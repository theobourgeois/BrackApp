import i_plus from "../../Images/plus.svg"
import i_minus from "../../Images/minus.svg"

import "./ZoomControls.css"


export const ZoomControls = ({zoom, setZoom}) => {

    const minusZoom = () => {
        setZoom(zoom-0.1)
    }

    const plusZoom = () => {
        setZoom(zoom+0.1)
    }

    

    return (
        <div className="zoom-controls-container">
            
            <div className="plus-icon-container" onClick={plusZoom}>
                <img src={i_plus} alt="plus"></img>
            </div>

            <div className="minus-icon-container" onClick={minusZoom}>
                <img src={i_minus} alt="minus"></img>
            </div>
        
        </div>
        
    )
}

export default ZoomControls