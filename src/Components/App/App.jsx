import "./App.css"

import { useState, useEffect } from "react";

import Bracket from "../Bracket/Bracket.jsx";
import BracketParameters from "../BracketParameters/BracketParameters.jsx"
import { EditingContext, ToolContext, ColorContext, RoundsContext, BackgroundColorContext } from "../../Context"


const fillToolCursorURL = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-paint-bucket" viewBox="0 0 16 16"> <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z"/> </svg>'

const initFinalRound = {
  nodes: [
    {
      title: "",
      id: -1,
      round: "final",
      right: false,
      pos: [[0, 0], 0],
      color: "white"
    },
    {
      title: "",
      id: -2,
      round: "final",
      right: true,
      pos: [[0, 0], 0],
      color: "white"
    }
  ],
  winner: { 
      title: "",
      id: -3,
      round: "winner",
      right: false,
      pos: [[0, 0], 0],
      color: "white"
  }
}


function App() {

  const [contenderCount, setContenderCount] = useState(8)//localStorage.getItem("contenderCount")
  const [editing, setEditing] = useState(true)
  const [zoom, setZoom] = useState(0.9)
  const [tool, setTool] = useState("")
  const [color, setColor] = useState('red')
  const [bgColor, setBgColor] = useState("white")

  const [leftRounds, setLeftRounds] = useState(
    Array(Math.log2(contenderCount))
  );
  const [rightRounds, setRightRounds] = useState(
    Array(Math.log2(contenderCount))
  );
  const [finalRound, setFinalRound] = useState(initFinalRound)

  const bodyStyles = {
    cursor: tool === "fill" ? `url('${fillToolCursorURL}') 24 24, auto` : "",
    backgroundColor: bgColor.hex
  }

  useEffect(() => {
    switch (parseInt(contenderCount)) {
      case 2:
        setZoom(1.4)
        break
      case 4:
        setZoom(0.8)
        break
      case 8:
        setZoom(0.7)
        break
      case 16:
        setZoom(0.46)
        break
      case 32:
        setZoom(0.23)
        break
      case 64:
        setZoom(0.1)
        break
      default:
        break
    }
  }, [contenderCount])



  useEffect(() => {
    localStorage.setItem("contenderCount", contenderCount);
  }, [contenderCount])

  useEffect(() => {
    localStorage.setItem("leftRounds", JSON.stringify(leftRounds));
    
  }, [leftRounds])

  useEffect(() => {
    localStorage.setItem("rightRounds", JSON.stringify(rightRounds));
  }, [rightRounds])

  useEffect(() => {
    localStorage.setItem("finalRound", JSON.stringify(finalRound));
  }, [finalRound])




  /*  
    MEMOIZED VALUES
      - contenderCount
      - Bracket
      - bracketTitle
  */

  return (
    <div className="body-container" style={bodyStyles}>
      <EditingContext.Provider value={editing}>
        <BackgroundColorContext.Provider value={{ bgColor, setBgColor }}>
          <ColorContext.Provider value={{ color, setColor }}>
            <ToolContext.Provider value={{ tool, setTool }}>
              <RoundsContext.Provider value={{ leftRounds, setLeftRounds, rightRounds, setRightRounds, finalRound, setFinalRound }}>

                <Bracket zoom={zoom} setZoom={setZoom} contenderCount={contenderCount} />   
                <BracketParameters zoom={zoom} setZoom={setZoom} setEditing={setEditing} contenderCount={contenderCount} setContenderCount={setContenderCount} />
             
              </RoundsContext.Provider>
            </ToolContext.Provider>
          </ColorContext.Provider>
        </BackgroundColorContext.Provider>
      </EditingContext.Provider>
    </div>
  )
}

export default App;
