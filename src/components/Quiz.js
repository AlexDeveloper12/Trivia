import React from "react";
import QuizItem from "./QuizItem";
import "../Styles/Quiz.css";

function Quiz({ questionData, chosenAnswer, currentQuestionNumber, handleQuestionChange,arrayOfAllQuestionAnswers }) {

    if (questionData !== null && questionData !== undefined) {
        return (
            <div>
                <div className="quiz-question-container">
                    <span>
                        Question {currentQuestionNumber+1} : {questionData.question}
                    </span>

                </div>

                 {
                    arrayOfAllQuestionAnswers?.length > 0 ?

                    arrayOfAllQuestionAnswers.map((value, index) => {
                        return (
                            // <div style={{color:'white'}}>{value}</div>
                            <QuizItem 
                                handleQuestionChange={handleQuestionChange}
                                index={index}
                                value={value}
                                correctAnswer={questionData.correctAnswer}
                                />


                        )
                    })
                    : null
                }
            </div>



        )
    }


}

export default Quiz;