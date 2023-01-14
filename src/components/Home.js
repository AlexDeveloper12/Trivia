import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategoriesAPICall, getQuestionsByCategoryAPICall } from "../API/Calls";
import Categories from "./Categories";
import "../Styles/Home.css";
import Quiz from "./Quiz";


function Home() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [questions, setQuestions] = useState([]);
    const [chosenCategory, setCategory] = useState("");
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [chosenAnswer, setChosenAnswer] = useState("");
    const [arrayOfSelectedAnswers, setArrayOfSelectedAnswers] = useState([])

    useEffect(() => {
        axios.get(getCategoriesAPICall)
            .then(response => {
                console.log(response.data);
                setCategories(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(`GetCategories error: ${error}`);
            })
    }, []);

    const GetQuestions = (category) => {
        axios.get(`${getQuestionsByCategoryAPICall}${category}&limit=10`)
            .then((response) => {
                if (response !== undefined && response !== null) {

                    setQuestions(response.data);
                    setCurrentQuestion(response.data[currentQuestionNumber]);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                setError(error);
            });
    }

    const handleCategoryChange = (categoryChosen) => {
        setCategory(categoryChosen);
        GetQuestions(categoryChosen);
    }

    const changeQuestion = (selectedAnswer) => {
        console.log(selectedAnswer);
        var tempArray = []
        if (currentQuestionNumber != 9) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setCurrentQuestion(questions[currentQuestionNumber + 1]);
            tempArray.push(selectedAnswer);
            setArrayOfSelectedAnswers(arrayOfSelectedAnswers, selectedAnswer);
        }
        console.log(arrayOfSelectedAnswers);

    }

    if (loading) {
        return (
            <div className="white">The categories are loading...</div>
        )

    }

    if (error !== "") {
        return (
            <div className="white">{error}</div>
        )
    }

    return (
        <div>

            <div className="header">
                <label>Quiz Wizz</label>

                {categories && <Categories categoryValues={categories} onChangeCategory={handleCategoryChange} />}

            </div>
            <div>
                {chosenCategory !== "" && currentQuestion !== null ?
                    <Quiz
                        currentQuestionNumber={currentQuestionNumber}
                        questionData={currentQuestion}
                        chosenAnswer={chosenAnswer}
                        handleQuestionChange={changeQuestion} />
                    : null}
            </div>

            {currentQuestionNumber == 9 ?
                <div>
                    You have finished the quiz well done.
                    Below are the answers you gave.
                    {arrayOfSelectedAnswers.map((value, index) => {
                        return (
                            <div>
                                <span style={{ color: 'white' }}> Question: {index + 1} : {value}</span>
                            </div>
                        )
                    })}
                </div>
                : null}


        </div>
    )
}

export default Home;