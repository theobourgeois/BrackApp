import { useEffect, useContext } from "react";
import { RoundsContext } from "../../Context";
import { incrementID } from "../../Utils"





export const useBracket = (contenderCount) => {

    const idgen = incrementID();
    const { leftRounds, rightRounds, setLeftRounds, setRightRounds, finalRound, setFinalRound } = useContext(RoundsContext)
 
    const fillRoundArray = () => {
        const sameContenderCount = leftRounds.length === Math.log2(contenderCount)
        if(leftRounds[0] !== undefined && sameContenderCount){
            const leftRoundsCache = JSON.parse(localStorage.getItem("leftRounds"))
            const rightRoundsCache = JSON.parse(localStorage.getItem("rightRounds"))
            const finalRoundCache = JSON.parse(localStorage.getItem("finalRound"))
            
            setFinalRound(finalRoundCache)
            setLeftRounds(leftRoundsCache)
            setRightRounds(rightRoundsCache)
            return
        }
        
        const newRightRounds = Array(Math.log2(contenderCount));
        const newLeftRounds = Array(Math.log2(contenderCount));

       

        for (var i = 0; i < newRightRounds.length; i++) {
            const currentRound = i + 1;
            const currentContenderCount =
                Math.pow(2, newRightRounds.length - i) / 2;

            newRightRounds[i] = [];
            for (var j = 0; j < currentContenderCount; j++) {
                const bracketPair = {
                    nodes: [
                        {
                            title: "",
                            id: idgen.next().value,
                            round: currentRound,
                            right: true,
                            pos: [[i, j], 0],
                            color: "white"
                        },
                        {
                            title: "",
                            id: idgen.next().value,
                            round: currentRound,
                            right: true,
                            pos: [[i, j], 1],
                            color: "white"
                        },
                    ],
                    winner: null,
                    pos: [i, j],
                    round: currentRound,
                    right: true
                    
                };

                newRightRounds[i].push(bracketPair);
            }

            newLeftRounds[i] = [];
            for (j = 0; j < currentContenderCount; j++) {
                const bracketPair = {
                    nodes: [
                        {
                            title: "",
                            id: idgen.next().value,
                            round: currentRound,
                            right: false,
                            pos: [[i, j], 0],
                            color: "white"
                        },
                        {
                            title: "",
                            id: idgen.next().value,
                            round: currentRound,
                            right: false,
                            pos: [[i, j], 1],
                            color: "white"
                        },
                    ],
                    winner: null,
                    pos: [i, j],
                    round: currentRound,
                    right: false
                };
                newLeftRounds[i].push(bracketPair);
            }
        }

       

        setRightRounds(newRightRounds);
        setLeftRounds(newLeftRounds);
    };

    

    useEffect(() => fillRoundArray(), [contenderCount]);

    return { leftRounds, setLeftRounds, rightRounds, setRightRounds, finalRound, setFinalRound };
};

export default useBracket;
