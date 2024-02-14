import React, {useState} from 'react'
function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event) {
        setColor(event.target.value)
    }

    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Select color: {color}</p>
            </div>
            <label htmlFor="">Select a color</label>
            <input type="color" name="" id="" value={color} onChange={handleColorChange} />
        </div>
    )
}

export default ColorPicker