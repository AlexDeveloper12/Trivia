import React from "react";
import "../Styles/QuizItem.css";

function QuizItem({ handleQuestionChange, index, value }) {

    const chosenValue = (event) => {
        handleQuestionChange(event.target.value);
        //could pass the set array function into this component in order to append to the array and then bring it back up
        //the parent component
    }

    return (

        <div className="parent">
            <span className="white quiz-item" onClick={(event)=>chosenValue(event)} > {index} : {value}</span>
        </div>
            /* <div className="quiz-all-answers-container">

                <div className="block top-row">
                    
                    <span className="quiz-incorrect-answer-two quiz-answer right-answer white" onClick={handleQuestionChange}>{questionData.incorrectAnswers[1]}</span>
                </div>

                <div className="block bottom-row">
                    <span className="quiz-incorrect-answer-three quiz-answer left-answer white" onClick={handleQuestionChange}>{questionData.incorrectAnswers[2]}</span>
                    <span className="quiz-correct-answer quiz-answer right-answer white" onClick={handleQuestionChange}>{questionData.correctAnswer}</span>
                </div>
            </div> */
        

    )



}

export default QuizItem;