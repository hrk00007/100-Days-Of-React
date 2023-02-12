import React, { useEffect, useState } from 'react'

let ScoreBoard = ({ isCorrect }) => {
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    useEffect(() => {
        if (isCorrect === null) return;
        if (isCorrect) setCorrect((score) => score + 1)
        else setWrong((score) => score + 1)
    }, [isCorrect])
    return (
        <React.Fragment>
            <div className="scoreboard">
                <div className="wrong">
                    <strong>{wrong}</strong>
                    <span>wrong</span>
                </div>
                <div className="correct">
                    <strong>{correct}</strong>
                    <span>correct</span>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ScoreBoard;