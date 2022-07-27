import "./BracketPair.css"
import BracketNode from "../BracketNode/BracketNode"
import { useContext, useEffect, useRef, useState } from "react"
import { RoundsContext } from "../../Context"

const fib = (num) => {
    if (num === 0)
        return 0
    else if (num === 1)
        return 1
    else
        return fib(num - 1) + fib(num - 2)
}

export const BracketPair = ({ pair }) => {

    const { leftRounds } = useContext(RoundsContext)
    const containerRef = useRef(null)
    const [connectorLineStyle, setConnectorLineStyle] = useState({})
    

    useEffect(() => {
        const containerWidth = containerRef.current.offsetHeight
        setConnectorLineStyle({
            height: `${(containerWidth/2)}px`,
            transform: pair.right  ? "scaleX(-1) translate(6em)" : "",
            
        }) 
      

    }, [])

   
    
    
    

    return (
        <div ref={containerRef} className="bracket-pair-container" style={{margin: pair.round === 1 && pair.right ? "0" : "0 2em 0 0"}}>
            <BracketNode node={pair.nodes[0]}/>
            <BracketNode node={pair.nodes[1]}/>
            <div className="bracket-node-connector-line" style={connectorLineStyle}>
                {(pair.nodes[0].round === "final" || pair.nodes[0].round === leftRounds.length) && <div></div>}
            </div>
        </div>
    )
}

export default BracketPair