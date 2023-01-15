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
        <>
            <table className="results-table">
                <thead>
                    <tr>
                        <th className="white">Question number</th>
                        <th className="white">Your Answer</th>
                        <th className="white">Correct Answer</th>
                        <th className="white">Correct/Incorrect</th>
                    </tr>
                </thead>
                <tbody>


                    {selectedAnswers.map((value, index) => {
                        return (
                            <tr>
                                <td><span>Question {index + 1}</span></td>
                                <td> <span>{value}</span></td>
                                <td> <span>{allQuestions[index].correctAnswer}</span></td>
                                <td>{isCorrectAnswer(selectedAnswers[index], allQuestions[index].correctAnswer)}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>


            <div className="percentage-answered">
                <span className="white"> You answered {quizScore(percentageAnswersCorrect, selectedAnswers.length)} of questions correctly.</span>
            </div>
            </>
    )
}

export default Results;

Results.propTypes = {
    selectedAnswers: propTypes.array,
    allQuestions: propTypes.array
}