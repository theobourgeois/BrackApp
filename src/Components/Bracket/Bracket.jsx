import "./Bracket.css"
import BracketNode from "../BracketNode/BracketNode"
import useBracket from "./useBracket"
import BracketPair from "../BracketPair/BracketPair"
import { useContext, useEffect, useState } from "react";
import { BackgroundColorContext } from "../../Context";

export const Bracket = ({ contenderCount, zoom }) => {
    const [doneEditingTitle, setDoneEditingTitle] = useState(false)
    const { leftRounds, rightRounds, finalRound } = useBracket(contenderCount)
    const { bgColor } = useContext(BackgroundColorContext)
    const [title, setTitle] = useState(localStorage.getItem("title"))


    const zoomStyle = {
        zoom: zoom,
        transformOrigin: `0 0`,
    }

    const handleTitleChange = e => {
        const newTitle = e.target.value
        const charLimit = 50
        if(newTitle.length > charLimit){
            setTitle(newTitle.substr(0, charLimit))
            return
        }
        setTitle(newTitle)
    }
    

    const Title = () => {
        if (doneEditingTitle || title === "")
            return <input className="bracket-title" value={title} onChange={handleTitleChange} style={{backgroundColor: bgColor.hex}}></input>
        else
            return <input className="bracket-title" value={title} style={{width: `1000px`, backgroundColor: bgColor.hex}}></input>
    }

    const toggleEditingTitle = (e, bool) => {
        e.stopPropagation()
        setDoneEditingTitle(bool)
    }

    useEffect(()=>{
        localStorage.setItem("title", title)
    }, [title])



    

   


    return (
        <>

                <div className="bracket-container" style={zoomStyle} onClick={e=>toggleEditingTitle(e, false)}>
                    <div className="left-side">
                        {leftRounds.map((round) => {
                            return (
                                <div className="round-container" style={{ height: `${100 * (contenderCount / 8)}vh` }}>
                                    {round.map(pair => (
                                        <BracketPair pair={pair}></BracketPair>
                                    ))}

                                </div>
                            )

                        })}
                        <BracketNode node={finalRound.nodes[0]}></BracketNode>
                    </div>

                    <div className="winner-and-title">
                        <div className="bracket-title-container" onClick={e=>toggleEditingTitle(e, true)}>
                            {Title()}
                        </div>
                        <div className="winner-container" >
                            <div className="winner-node" style={{ backgroundColor: finalRound.winner.color }}>
                                <h3>{finalRound.winner.title}</h3>
                            </div>
                        </div>
                    </div>



                    <div className="right-side">
                        {rightRounds.map((round) => {
                            return (
                                <div className="round-container" style={{ height: `${100 * (contenderCount / 8)}vh` }}>
                                    {round.map(pair => (
                                        <BracketPair pair={pair}></BracketPair>
                                    ))}

                                </div>
                            )

                        })}
                        <BracketNode node={finalRound.nodes[1]}></BracketNode>
                    </div>


                </div>

        </>
    )
}

export default Bracket