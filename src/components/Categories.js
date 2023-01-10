import React, { useEffect } from "react";

function Categories({categoryValues}) {

    var loopCategories = Object.keys(categoryValues).map(function(value,index){
        <option>{value}</option>
    })

    return (
        <div>
            <select>
                
            </select>

        </div>
    )
}

export default Categories;