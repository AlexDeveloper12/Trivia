import React from "react";
import propTypes from "prop-types";
import "../Styles/Results.css";
import { GiCheckMark } from "react-icons/gi";
import { ImCross } from "react-icons/im";

function Results({ selectedAnswers, allQuestions }) {

    var percentageAnswersCorrect = 0;

    const isCorrectAnswer = (chosenAnswer, correctAnswer) => {

        if (chosenAnswer == correctAnswer) {
            percentageAnswersCorrect++;
            return <span className="result-icon checkmark-icon"><GiCheckMark /></span>
        }
        else {
            return <span className="result-icon cross-icon" ><ImCross /></span>
        }
    }

    const quizScore = (answer, questions) => {
        var score = (answer / questions) * 100;
        return `${parseFloat(score).toFixed(0)}%`;
    }

    return (
        <div>
            {
                selectedAnswers.map((value, index) => {
                    return (
                        <div className="results-container" key={index}>
                            <span className="white" >Question {index + 1}  : Answer: {value}</span>
                            {isCorrectAnswer(selectedAnswers[index], allQuestions[index].correctAnswer)}
                        </div>
                    )
                })

            }
            <div className="percentage-answered">
                <span className="white"> You answered {quizScore(percentageAnswersCorrect, selectedAnswers.length)} of questions correctly.</span>
            </div>

        </div>
    )
}

export default Results;

Results.propTypes = {
    selectedAnswers: propTypes.array,
    allQuestions: propTypes.array
}