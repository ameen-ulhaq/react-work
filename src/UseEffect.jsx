import React, { useState, useEffect } from 'react'

function UseEffect () {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("green")

    const [width, setWidth] = useState(window.innerWidth)
    const [height, setheight] = useState(window.innerHeight)

    // useEffect( () => {
    //     document.title = `Count: ${count}`
    // }, [] )
    
    useEffect( () => {
        document.title = `Count: ${count} ${color} -  ${width} x ${height} `
    }, [count, color, height, width] )

    
    useEffect( () => {
        window.addEventListener("resize", handleResize)
        // console.log("addec")

        return( () => {
            window.removeEventListener("resize", handleResize)
        })
    }, [])
    // widhotu useeffect    
    // window.addEventListener("resize", handleResize)

    function addCount() {
        setCount( c => c + 1 )
    }
    function subtractCount() {
        setCount( c => c - 1 )
    }
    function changeColor() {
        setColor( c => c === "green" ? "red" : "green" )
    }

    function handleResize() {
        setWidth(window.innerWidth)
        setheight(window.innerHeight)
    }

    return (
        <div>
            <p style={{ color: color }}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button>
            <button onClick={changeColor}>Change color</button>

            <p>Widnow width: {width}</p>
            <p>Widnow height: {height}</p>
        </div>
    )
}

export default UseEffect