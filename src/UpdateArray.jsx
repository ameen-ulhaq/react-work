import React, { useState } from 'react'

function UpdateArray() {

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ''

        setFoods( prevFoods => [...prevFoods, newFood])
    }
    
    function handleRemoveFood( index ) {
        // setFoods( foods.filter( (element, i) => i !== index ))
        setFoods( foods.filter( (_, i) => i !== index )) 
    }

    return(
        <div>
            <h2>Lists of Foods</h2>
            <ul>
                { foods.map( (food, index) => <li 
                                                key={index}
                                                onClick={() => handleRemoveFood(index)}
                                                >{food}
                                            </li> ) }
            </ul>

            <input type="text" id='foodInput' placeholder='Enter food name' />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}

export default UpdateArray