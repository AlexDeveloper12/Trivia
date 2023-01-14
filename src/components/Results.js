import React from "react";
import "../Styles/Results.css";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Results({ selectedAnswers, allQuestions }) {

    const isCorrectAnswer = (chosenAnswer, correctAnswer) => {

        if (chosenAnswer == correctAnswer) {
            return <span className="result-icon checkmark-icon"><GiCheckMark /></span>
        }
        else {
            return <span className="result-icon cross-icon" ><ImCross /></span>
        }
    }

    return (
        <div>
            {
                selectedAnswers.map((value, index) => {
                    return (
                        <div className="results-container">
                            <span className="white">Question {index + 1}  : Answer: {value}</span>
                            {isCorrectAnswer(selectedAnswers[index], allQuestions[index].correctAnswer)}

                        </div>
                    )
                })
            }
        </div>

    )

}

export default Results;