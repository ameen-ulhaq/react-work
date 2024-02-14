import React, { useState } from 'react'
function UpdateObject() {

    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    function handleYearChange(event) {
        // setCar({...car, year: 2025})
        // setCar({...car, year: event.target.value})
        setCar( prevCar => ( {...prevCar, year: event.target.value} ))

    }
    function handleMakeChange(event) {
        setCar( prevCar => ( {...prevCar, make: event.target.value} ))
    }
    function handleModelChange(event) {
        setCar( prevCar => ( {...prevCar, model: event.target.value} ))
    }
    return(
        <div>
            <p>Your Favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /><br />
            <input type="text" value={car.make} onChange={handleMakeChange} /><br />
            <input type="text" value={car.model} onChange={handleModelChange} /><br />
        </div>
    )
}

export default UpdateObject