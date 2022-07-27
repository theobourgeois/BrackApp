export function* incrementID() {
    let id = 2;

    while (true) {
        yield id;
        id++;
    }
}

export const colorPalette = {
    body: "white",
    header: "#F4F4F4",
    secondary: "#4B4A52"
}



export default { incrementID, colorPalette}