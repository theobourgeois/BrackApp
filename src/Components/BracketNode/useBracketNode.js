import { useState, useContext, useEffect, useDeferredValue } from "react";
import {
    RoundsContext,
    EditingContext,
    ColorContext,
    ToolContext,
} from "../../Context";

export const useBracketNode = (node) => {
    const [title, setTitle] = useState("");
    const deferedTitle = useDeferredValue(title);
    const {
        leftRounds,
        setLeftRounds,
        rightRounds,
        setRightRounds,
        finalRound,
        setFinalRound,
    } = useContext(RoundsContext);
    const { color } = useContext(ColorContext);
    const { tool } = useContext(ToolContext);

    const editing = useContext(EditingContext);

    const updateColor = () => {
        const newRounds = node.right ? rightRounds : leftRounds;

        let row = node.pos[0][1];
        let col = node.pos[0][0];

        newRounds[col][row].nodes[node.pos[1]] = {
            title: node.title,
            id: node.id,
            round: node.round,
            right: node.right,
            pos: node.pos,
            color: color.hex,
        };

        let previousNode;
        for (var i = 1; i < newRounds.length; i++) {
            const pairIndex = row % 2 === 0 ? 0 : 1;
            col = col + 1;
            row = Math.floor(row / 2);
            const currentNode = newRounds[col][row].nodes[pairIndex];

           


            const nextNode = {
                title: currentNode.title,
                id: currentNode.id,
                round: currentNode.round,
                right: currentNode.right,
                pos: currentNode.pos,
                color: color.hex,
            };

            if (previousNode !== undefined) {
                if (previousNode.id !== newRounds[col][row].nodes[pairIndex].id)
                    break;
            }

            previousNode = newRounds[col][row].nodes[pairIndex];
            
            if(node.id !== newRounds[col][row].nodes[pairIndex].id && i === 1)
                break

            newRounds[col][row].nodes[pairIndex] = nextNode;
        }
        const finalRoundIndex = node.right ? 1 : 0 
        const newFinalRound = finalRound

        if(finalRound.nodes[finalRoundIndex].id === node.id){
            newFinalRound.nodes[finalRoundIndex].color = color.hex
        }
        if(finalRound.winner.id === node.id){
            newFinalRound.winner.color = color.hex
        }
        setFinalRound({...newFinalRound})

        if (node.right) setRightRounds([...newRounds]);
        else setLeftRounds([...newRounds]);
    };

    const handleClick = () => {
        if (tool === "fill" && node.round === 1) {
            updateColor();
            return;
        }
        if (editing) return;
        if (node.title === "") return;

        const newRounds = node.right ? rightRounds : leftRounds;

        let row = node.pos[0][1];
        let col = node.pos[0][0];

        const updateFinalRound = () => {
            const newFinalRound = finalRound;
    
            const pairIndex = node.right ? 1 : 0;
            const newNode = {
                title: node.title,
                id: node.id,
                round: "final",
                right: node.right,
                pos: [[leftRounds.length + 1, 0], pairIndex],
                color: node.color,
            };
            newFinalRound.nodes[pairIndex] = newNode;
            newFinalRound.winner.title = ""
            newFinalRound.winner.color = "white"
            setFinalRound({...newFinalRound});
            if (node.right) setRightRounds([...newRounds]);
            else setLeftRounds([...newRounds]);
        }
    
        const updateWinner = () => {
            const newFinalRound = finalRound;
            const newNode = {
                title: node.title,
                id: node.id,
                round: "winner",
                right: node.right,
                pos: [],
                color: node.color,
            };
            newFinalRound.winner = newNode;
            setFinalRound({...newFinalRound});
            if (node.right) setRightRounds([...newRounds]);
            else setLeftRounds([...newRounds]);
        }

        if (node.round === "final") {
            updateWinner()
            return;
        }

        if (node.round === newRounds.length) {
            updateFinalRound()
            return;
        }

        let previousNode;
        for (var i = node.round; i < newRounds.length; i++) {
            const pairIndex = row % 2 === 0 ? 0 : 1;
            col = col + 1;

            row = Math.floor(row / 2);

            const nextNode = {
                title: node.round === 1 ? title : node.title,
                id: node.id,
                round: i + 1,
                right: node.right,
                pos: [[col, row], pairIndex],
                color: node.color,
            };
            if (previousNode !== undefined) {
                if (previousNode.id !== newRounds[col][row].nodes[pairIndex].id)
                    break;
            }
            previousNode = newRounds[col][row].nodes[pairIndex];
            const finalRoundPairIndex = node.right ? 1 : 0;
            if(previousNode.id === finalRound.nodes[finalRoundPairIndex].id)
                updateFinalRound(newRounds)
            if(previousNode.id === finalRound.winner.id)
                updateWinner(newRounds)
            newRounds[col][row].nodes[pairIndex] = nextNode;
        }

        if (node.right) setRightRounds([...newRounds]);
        else setLeftRounds([...newRounds]);
    };

    const updateBranches = () => {
        if (node.round !== 1) return;

        const newRounds = node.right ? rightRounds : leftRounds;
        let row = node.pos[0][1];
        let col = node.pos[0][0];
        newRounds[col][row].nodes[node.pos[1]].title = title === "" ? node.title : title;

        for (var i = 1; i < newRounds.length; i++) {
            const pairIndex = row % 2 === 0 ? 0 : 1;
            col = col + 1;
            row = Math.floor(row / 2);

            if (newRounds[col][row].nodes[pairIndex].id !== node.id) break;

            const nextNode = {
                title: title,
                id: node.id,
                round: node.round + i,
                right: node.right,
                pos: [[col, row], pairIndex],
                color: node.color,
            };
            newRounds[col][row].nodes[pairIndex] = nextNode;
        }

        const finalRoundPairIndex = node.right ? 1 : 0
        if(finalRound.nodes[finalRoundPairIndex].id === node.id){
            const newFinalRound = finalRound
            newFinalRound.nodes[finalRoundPairIndex].title = title
            setFinalRound({...newFinalRound})
        }
        if(finalRound.winner.id === node.id){
            const newFinalRound = finalRound
            newFinalRound.winner.title = title
            setFinalRound({...newFinalRound}) 
        }


        if (node.right) setRightRounds([...newRounds]);
        else setLeftRounds([...newRounds]);
    };

    const handleTitleChange = (e) => {
        const newTitle = e.target.value;

        setTitle(newTitle);
    };

    useEffect(() => updateBranches(), [deferedTitle]);
    
    useEffect(() => {
        if (node.round !== 1) return;
        setTitle(node.title);   
    }, [node]);

    return {
        title,
        handleTitleChange,
        handleClick,
        editing,
    };
};

export default useBracketNode;
