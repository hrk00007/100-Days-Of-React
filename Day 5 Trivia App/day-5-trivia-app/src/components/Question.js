import React from "react";
import shuffle from 'lodash.shuffle'

let Question = ({ question, answerQuestion }) => {

    let answers = shuffle([question.correct_answer, ...question.incorrect_answers])
    return (
        <React.Fragment>
            <div className="question">
                <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
                {
                    answers.map((answer, index) => (
                        <button onClick={() => answerQuestion(answer)} key={index} dangerouslySetInnerHTML={{ __html: answer }} />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
export default Question;