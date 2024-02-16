import React, { useState, useEffect, useRef } from 'react'

function UseRef() {

    // let [number, setNumber] = useState(0)

    const ref = useRef(0)
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    // console.log(ref)

    function handleClick() {
        // setNumber( n => n + 1 )
        // ref.current++

        ref.current = ref.current + 1

        inputRef.current.focus()
        inputRef.current.style.backgroundColor = "green"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

        // console.log(ref.current)
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = "green"
        inputRef.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef3.current.style.backgroundColor = "green"
        inputRef2.current.style.backgroundColor = ""
        inputRef1.current.style.backgroundColor = ""

    }

    useEffect( () => {
        // console.log("COMPONENT RENDERED")
        // console.log(inputRef)

    })

    return(
        <div>
            <button onClick={handleClick}>Click me!</button>

            <input type="text" ref={inputRef} />

            <button onClick={handleClick2}>Click me 2!</button>

            <input type="text" ref={inputRef2} />


            <button onClick={handleClick3}>Click me 3!</button>

            <input type="text" ref={inputRef3} />
        </div>
    )
}

export default UseRef