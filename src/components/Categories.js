import React, { useEffect } from "react";
import "../Styles/Categories.css";

function Categories({ categoryValues, onChangeCategory }) {

    var loopCategories = Object.keys(categoryValues);

    return (

        <select onChange={(e) => onChangeCategory(e.target.value)} className="categories-dropdown">
            {loopCategories.length > 0 ?
                loopCategories.map(function (index, value) {
                    return (
                        <option value={index} >{index}</option>
                    )

                })
                : null
            }

        </select>


    )
}

export default Categories;