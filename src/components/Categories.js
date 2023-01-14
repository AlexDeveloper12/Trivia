import React from "react";
import propTypes from "prop-types";
import "../Styles/Categories.css";

function Categories({ categoryValues, onChangeCategory }) {

    var loopCategories = Object.keys(categoryValues);

    return (

        <select onChange={(e) => onChangeCategory(e.target.value)} className="categories-dropdown">
            <option value="-1">Please select</option>
            {loopCategories.length > 0 ?
                loopCategories.map(function (index) {
                    
                    return (
                        <option key={index} value={index} >{index}</option>
                    )

                })
                : null
            }

        </select>
    )
}

export default Categories;

Categories.propTypes = {
    categoryValues: propTypes.object,
    onChangeCategory:propTypes.func
}