import "./ImageComponents.css"



export const FillTool = ({fill="black", onClick, title, style}) => {
    return (
        <div onClick={onClick} className="tool-container" title={title} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} class="bi bi-paint-bucket" viewBox="0 0 16 16">
                <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" /> 
            </svg>
        </div>
    )
}

export const ClearTool = ({fill="black", onClick, title, style}) => {
    return (
        <div onClick={onClick} className="tool-container" title={title} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={fill} width="30" height="30.105" viewBox="0 0 30 30.105">
                <path id="Icon_material-layers-clear" data-name="Icon material-layers-clear" d="M29.715,22.485l1.785-1.38L29.355,18.96,27.57,20.34Zm-.675-7.08L31.5,13.5,18,3,13.635,6.4,25.44,18.225l3.6-2.82ZM4.905,1.5,3,3.4l6.33,6.33L4.5,13.5l2.445,1.9L18,24l3.15-2.445L23.3,23.7,18,27.81,6.945,19.215,4.5,21.1,18,31.6l7.425-5.775,5.67,5.67L33,29.595Z" transform="translate(-3 -1.5)"/>
            </svg>
        </div>
    )
}

export const ResetTool = ({fill="black", onClick, title, style}) => {
    return (
        <div onClick={onClick} className="tool-container" title={title} style={style}>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.04 81.07"><path id="b" d="M3.5,8.46v24.7H28.18l-10.5-10.5c5.54-6.18,13.44-9.7,21.73-9.7,16.12,0,29.18,13.07,29.18,29.18h6.93c-.04-10.05-4.27-19.62-11.67-26.42C49.19,2.24,26.38,3.21,12.91,17.88L3.5,8.46Z" stroke="#000" stroke-width="7"/><path id="c" d="M68.15,36.94c1.11,8.42-1.34,16.92-6.76,23.47h0c-10.38,12.35-28.83,13.96-41.2,3.6l-4.34,5.16h0c15.23,12.75,37.93,10.77,50.7-4.43,6.76-8.04,9.96-16.63,8.69-26.27l-7.1-1.53Z" stroke="#000" stroke-miterlimit="4" stroke-width="7"/></svg>
        </div>

    )
}

export const ThemeTool = ({fill="black", onClick, title, style}) => {
    return (
        <div onClick={onClick} className="tool-container" title={title} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path id="Icon_material-wallpaper" data-name="Icon material-wallpaper" d="M6,6H16.5V3H6A3.009,3.009,0,0,0,3,6V16.5H6Zm9,13.5L9,27H27l-4.5-6-3.045,4.065Zm10.5-6.75A2.25,2.25,0,1,0,23.25,15,2.247,2.247,0,0,0,25.5,12.75ZM30,3H19.5V6H30V16.5h3V6A3.009,3.009,0,0,0,30,3Zm0,27H19.5v3H30a3.009,3.009,0,0,0,3-3V19.5H30ZM6,19.5H3V30a3.009,3.009,0,0,0,3,3H16.5V30H6Z" transform="translate(-3 -3)"/>
            </svg>

        </div>

    )    
}

export const DownloadTool = ({fill="black", onClick, title, style}) => {
    <div onClick={onClick} className="tool-container" title={title} style={style}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-3 -3)">
                <path id="Path_37" data-name="Path 37" d="M31.5,22.5v6a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3v-6" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_38" data-name="Path 38" d="M10.5,15,18,22.5,25.5,15" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                <path id="Path_39" data-name="Path 39" d="M18,22.5V4.5" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </g>
        </svg>
    </div>

}

export default { FillTool, ClearTool, ResetTool, ThemeTool }