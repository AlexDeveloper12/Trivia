import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import { getCategoriesAPICall, getQuestionsByCategoryAPICall } from "../API/Calls";
import Categories from "./Categories";
import "../Styles/Home.css";
import Quiz from "./Quiz";
import Results from "./Results";


function Home() {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [questions, setQuestions] = useState([]);
    const [chosenCategory, setCategory] = useState("");
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [chosenAnswer, setChosenAnswer] = useState("");
    const [arrayOfSelectedAnswers, setArrayOfSelectedAnswers] = useState([]);
    const [arrayOfAllQuestionAnswers, setArrayOfAllQuestionAnswers] = useState([]);

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

    const shuffleArray = (array) => {

        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i);
            var k = array[i];
            array[i] = array[j];
            array[j] = k;
        }

        return array;
    }

    const GetQuestions = (category) => {
        axios.get(`${getQuestionsByCategoryAPICall}${category}&limit=10`)
            .then((response) => {
                if (response !== undefined && response !== null) {

                    setQuestions(response.data);
                    setCurrentQuestion(response.data[currentQuestionNumber]);

                    var allAnswers = response.data[currentQuestionNumber].incorrectAnswers;
                    //allAnswers.push('hello');
                    allAnswers.push(response.data[currentQuestionNumber].correctAnswer)
                    var randomArray = shuffleArray(allAnswers);
                    setArrayOfAllQuestionAnswers(randomArray);


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
        console.log('selectedAnswer');
        console.log(selectedAnswer);
        var tempArray = []
        if (currentQuestionNumber != 9) {
            setCurrentQuestionNumber(currentQuestionNumber + 1);
            setCurrentQuestion(questions[currentQuestionNumber + 1]);
            arrayOfSelectedAnswers.push(selectedAnswer);
            setArrayOfSelectedAnswers(arrayOfSelectedAnswers);
            var correctAnswer = questions[currentQuestionNumber + 1].correctAnswer;
            var allAnswers = questions[currentQuestionNumber + 1].incorrectAnswers;
            allAnswers.push(correctAnswer);
            var randomArray = shuffleArray(allAnswers);
            setArrayOfAllQuestionAnswers(randomArray);

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
                        handleQuestionChange={changeQuestion}
                        arrayOfAllQuestionAnswers={arrayOfAllQuestionAnswers}
                    />
                    : null}
            </div>

            {currentQuestionNumber == 9 ?
                <div style={{ textAlign: 'center' }}>
                    <span className="white">

                        You have finished the quiz well done.
                        Below are the answers you gave.
                    </span>
                    {arrayOfSelectedAnswers.length > 0 && arrayOfSelectedAnswers.length === 8 ?
                        <Results
                            selectedAnswers={arrayOfSelectedAnswers}
                            allQuestions={questions}
                        />
                        : null}
                </div>
                : null}


        </div>
    )
}

export default Home;