import "./Tools.css"

import { FillTool, ClearTool, ResetTool, ThemeTool } from "../Image Components/ImageComponents"
import { ToolContext, ColorContext, RoundsContext, BackgroundColorContext } from "../../Context"
import { SketchPicker } from "react-color";
import { useContext, useState } from "react"
import { incrementID } from "../../Utils"

export const Tools = () => {
    const { bgColor, setBgColor } = useContext(BackgroundColorContext)
    const { tool, setTool } = useContext(ToolContext)
    const [showingColorPicker, setShowingColorPicker] = useState(false)
    const [showingBgColorPicker, setShowingBgColorPicker] = useState(false)

    const { color, setColor } = useContext(ColorContext)
    const { leftRounds, rightRounds, setLeftRounds, setRightRounds, finalRound, setFinalRound } = useContext(RoundsContext)
    const idgen = incrementID();
    const clearRounds = (e, roundOne=false) => {

        const newRightRounds = rightRounds
        const newLeftRounds = leftRounds
        const newFinalRound = finalRound

        newRightRounds.forEach(round => {

            if (round[0].round === 1 && !roundOne) {
                round.forEach(pair => {
                    pair.nodes[0].id = idgen.next().value
                    pair.nodes[0].id = idgen.next().value
                })
                return
            }
            round.forEach(pair => {
                pair.nodes[0].title = ""
                pair.nodes[0].id = idgen.next().value
                pair.nodes[0].color = "white"

                pair.nodes[1].title = ""
                pair.nodes[1].id = idgen.next().value
                pair.nodes[1].color = "white"
            })
        })

        newLeftRounds.forEach(round => {
            if (round[0].round === 1 && !roundOne) {
                round.forEach(pair => {
                    pair.nodes[0].id = idgen.next().value
                    pair.nodes[1].id = idgen.next().value
                })
                return
            }
            round.forEach(pair => {
                pair.nodes[0].title = ""
                pair.nodes[0].id = idgen.next().value
                pair.nodes[0].color = "white"

                pair.nodes[1].title = ""
                pair.nodes[1].id = idgen.next().value
                pair.nodes[1].color = "white"
            })
        })


        newFinalRound.nodes[0].title = ""
        newFinalRound.nodes[1].title = ""
        newFinalRound.winner.title = ""
        newFinalRound.winner.color = "white"
        newFinalRound.winner.id = idgen.next().value

        setFinalRound({ ...newFinalRound })
        setRightRounds([...newRightRounds])
        setLeftRounds([...newLeftRounds])


    }
    const setToFill = () => {
        const fill = tool === "fill"
        setTool(fill ? "" : "fill")
        setShowingColorPicker(!fill)
        setColorPickerPos({
            right: "-2em",
            bottom: "6em"
        })
        setShowingBgColorPicker(false)
    }

    const setToTheme = () => {
        const theme = tool === "theme"
        setTool(theme ? "" : "theme")
        setShowingBgColorPicker(!theme)
        setShowingColorPicker(false)
    }


    const selectedToolStyle = {
        backgroundColor: "rgb(217, 217, 217)",
        borderRadius: "4px",
        outline: "thin inset var(--header)"
    }

    const resetBracket = (e) => {
        clearRounds(e, true)
    }

   
    const [colorPickerPos, setColorPickerPos] = useState({
        right: "-2em",
        bottom: "6em",
        dragging: false
    })

    const colorPickerOnDrag = e => {
        if(e.pageX === 0 || e.pageY === 0)
            return 
        setColorPickerPos({
            left: e.clientX - 150 + "px",
            bottom: -e.clientY + 680 + "px",
            dragging: true
        })        

        
    }

    const colorPickerOnDragEnd = e => {
        setColorPickerPos({
            left: colorPickerPos.left,
            bottom: colorPickerPos.bottom,
            dragging: false
        })  
              
    }

 


    

    return (
        <>
            <div className="tools-container">

                <ClearTool onClick={clearRounds} title="Clear rounds" />
                <ResetTool onClick={resetBracket} title="Reset bracket" />

                <div className="tools-divider"></div>

                <ThemeTool onClick={setToTheme} style={tool === "theme" ? selectedToolStyle : {}} title="Change background color" />
                <FillTool onClick={setToFill} style={tool === "fill" ? selectedToolStyle : {}} title="Fill" />

            </div>
        


            <div className="color-picker-container" style={{...{ cursor: colorPickerPos.dragging ? "grab" : "pointer" },...colorPickerPos}} >
                {(showingColorPicker || showingBgColorPicker) &&
                    (
                    <>
                    <div className="drag-tag" draggable={true} onDrag={colorPickerOnDrag} onDragEnd={colorPickerOnDragEnd}></div>
                    <SketchPicker
                        onChange={tool === "fill" ? setColor : setBgColor}
                        color={tool === "fill" ? color : bgColor}
                    />
                    </>)

                }

            </div>
        </>
    )
}

export default Tools