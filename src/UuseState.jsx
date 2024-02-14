import React, {useState} from 'react'

function UuseState() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("New Name")
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={ updateName}> Set Name </button>

            <p>Age: {age}</p>
            <button onClick={updateAge}> Set Age </button>

            <p>is employed?: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}> Status </button>
        </div>
    )
}

export default UuseState