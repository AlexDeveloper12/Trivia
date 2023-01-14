import React from "react";
import QuizItem from "./QuizItem";
import "../Styles/Quiz.css";

function Quiz({ questionData, chosenAnswer, currentQuestionNumber, handleQuestionChange,arrayOfAllQuestionAnswers }) {

    if (questionData !== null && questionData !== undefined) {
        console.log(arrayOfAllQuestionAnswers);
        return (
            <div>
                <div className="quiz-question-container">
                    <span>
                        Question {currentQuestionNumber} : {questionData.question}
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


                {/* <QuizItem questionData={questionData} chosenAnswer={chosenAnswer} currentQuestionNumber={currentQuestionNumber} handleQuestionChange={handleQuestionChange} /> */}
            </div>



        )
    }


}

export default Quiz;