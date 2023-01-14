import React from "react";
import QuizItem from "./QuizItem";
import "../Styles/Quiz.css";

function Quiz({ questionData, chosenAnswer, currentQuestionNumber, handleQuestionChange }) {

    if (questionData !== null && questionData !== undefined) {

        return (
            <div>
                <div className="quiz-question-container">
                    <span>
                        Question {currentQuestionNumber} : {questionData.question}
                    </span>

                </div>

                {
                    questionData.incorrectAnswers.map((value, index) => {
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
                }
                <div style={{color:'white'}}>{questionData.correctAnswer}</div>


                {/* <QuizItem questionData={questionData} chosenAnswer={chosenAnswer} currentQuestionNumber={currentQuestionNumber} handleQuestionChange={handleQuestionChange} /> */}
            </div>



        )
    }


}

export default Quiz;