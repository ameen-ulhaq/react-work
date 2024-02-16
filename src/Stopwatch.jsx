import React, { useState, UseEffect, useRef, useEffect } from 'react'
function Stopwatch() {

    const [isrunning, setIsrunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)

    const  intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect( () => {

        if( isrunning ) {
            intervalIdRef.current = setInterval( () => {
                setElapsedTime( Date.now() - startTimeRef.current )
            }, 10)
        }

        return () => {
            clearInterval( intervalIdRef.current )
        }
    }, [isrunning])

    function start() {
        setIsrunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }
    function stop() {
        setIsrunning(false)

    }
    function reset() { 
        setElapsedTime(0)
        setIsrunning(false)

    }
    function formatTime() {

        let hours = Math.floor( elapsedTime / [1000 * 60 * 60] )
        let minutes = Math.floor( elapsedTime / [1000 * 60] % 60 )
        let seconds = Math.floor( elapsedTime / (1000) % 60 )
        let miliSeconds = Math.floor( elapsedTime % (1000) / 10 )
        
        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        miliSeconds = String(miliSeconds).padStart(2, "0")
        return `${hours}:${minutes}:${seconds}:${miliSeconds}`
    }



    return(
        <div className='stopwatch-container'>
            <div className='stopwatch'>
            <div className='display'>{ formatTime() }</div>
            <div className='controls'>
                <button onClick={start} className='start-btn'>Start</button>
                <button onClick={stop} className='stop-btn'>Stop</button>
                <button onClick={reset} className='reset-btn'>Reset</button>
            </div>
        </div>
        </div>
    )
}

export default Stopwatch