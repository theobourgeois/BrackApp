import { useState, useContext } from "react"

export const useBracketParameters = (setContenderCount, contenderCount) => {

    const [editMode, setEditMode] = useState(true)

    

    const handleContenderCountChange = e => {
        const newContenderCount = e.target.value
        setContenderCount(newContenderCount)
    }

    return {
        handleContenderCountChange
    }

}

export default useBracketParameters