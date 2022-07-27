import { useContext } from "react"
import "./BracketParameters.css"
import useBracketParameters from "./useBracketParameters"
import { EditingContext } from "../../Context"
import Tools from "../Tools/Tools";
import ZoomControls from "../ZoomControls/ZoomControls.jsx"
import i_logo from "../../Images/logo.svg"

export const BracketParameters = ({setContenderCount, contenderCount, setEditing, zoom, setZoom}) => {
    const { handleContenderCountChange } = useBracketParameters(setContenderCount, contenderCount)

    const editing = useContext(EditingContext)

    return (
        <div className="bracket-parameters-container">
            <div className="contender-number-conainer">
                <div className="contender-number-options">
                    <label for="cars">Choose number of contenders:</label>

                    <select id="cars" onChange={handleContenderCountChange} disabled={!editing} value={contenderCount}>
                        <option value={2}>4</option>
                        <option value={4}>8</option>
                        <option value={8}>16</option>
                        <option value={16}>32</option>
                        <option value={32}>64</option>
                        <option value={64}>128</option>
                        
                    </select>
                </div>
                <div className="edit-btn-container">
                    <button onClick={()=>setEditing(!editing)}>{!editing ? "Edit" : "Done"}</button>
                </div>
            </div>
            <div className="logo-container">
                <img src={i_logo} alt="logo"></img>
            </div>
            <div className="tools-zoom">
                <Tools />
                <ZoomControls zoom={zoom} setZoom={setZoom} />
            </div>
        </div>
    )
}

export default BracketParameters