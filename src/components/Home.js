import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCategoriesAPICall } from "../API/Calls";
import Categories from "./Categories";
import "../Styles/Home.css";

function Home(){

    const [categories,setCategories] = useState({});

    const GetCategories = () =>{
        axios.get(getCategoriesAPICall)
        .then(response=>{
            
            setCategories(response.data);
            
        })
        .catch(error=>{
            console.log(`GetCategories error: ${error}`);
        })
    }

    useEffect(()=>{
        GetCategories();
    },[]);

    return(
        <div>

            <div className="header">
                <label>Quiz Wizz</label> 
            </div>


            {categories !== null ? <Categories categoryValues={categories}/> : null }

        </div>
    )
}

export default Home;