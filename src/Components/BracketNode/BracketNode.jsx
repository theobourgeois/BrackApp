import "./BracketNode.css"
import useBracketNode from "./useBracketNode"


import { useContext } from "react"
import { ToolContext, ThemeContext } from "../../Context"


export const BracketNode = ({ node }) => {

    const { tool } = useContext(ToolContext)

    const {
        title,
        handleTitleChange,
        handleClick,
        editing
    } = useBracketNode(node)


    const nodeStyles = {
        backgroundColor: node.color,
        opacity: node.title === "" && node.round !== 1 ? 0 : 100,
        transform: node.round === 1 ? "" : `${node.right ? "translate(-5em)" : "translate(6em)"}`,
        margin: (node.round === "final") ? `${node.right ? "0 2em 0 7em" : "0 7em 0 0"}` : ""


    }




    const Title = () => {
        if (node.round === 1 && editing) {
            return (
                <input type="text" placeholder="Type here" value={title} onChange={handleTitleChange} disabled={tool==="fill"}></input>
            )
        } else {
            return (
                <h3>{node.title}</h3>
            )
        }
        
    }




    return (
        <div className="contender-node-container" onClick={handleClick} style={nodeStyles} title={title}>
            {Title()}
        </div>
    );
}

export default BracketNode