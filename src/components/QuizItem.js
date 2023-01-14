import React from "react";
import propTypes from "prop-types";
import "../Styles/QuizItem.css";

function QuizItem({ handleQuestionChange, index, value }) {

    const chosenValue = (event) => {
        handleQuestionChange(event);
    }

    return (
        <div className="parent" key={index}>
            <span className="white quiz-item" onClick={()=>chosenValue(value)} > {index+1} : {value}</span>
        </div>
    )
}

export default QuizItem;

QuizItem.propTypes = {
    handleQuestionChange: propTypes.func,
    index:propTypes.number,
    value:propTypes.string
}