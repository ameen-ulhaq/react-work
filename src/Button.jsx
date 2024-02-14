function Button() {
    const style = {
            "backgroundColor": "hsl(200, 100%, 50%)",
            "color": "white",
            "padding": "10px 20px",
            "borderRadius": "5px",
            "border": "none",
            "cursor": "pointer"
    }

    let count = 0

    // const handleClick = (name) => {
    //     if(count < 3) {
    //         count++
    //         console.log(`${name} clicked me ${count} time`)
    //     } else {
    //         console.log(`${name} stop clicking me`)
    //     }
    // }

    const handleclick = (e) => e.target.textContent = "OUCH"

    // const handleClick2 = (name) => console.log(`${name} stop cliking me`)

    return (
        <button onClick={(e) => handleclick(e)} style={style} > Button 2</button>
    )
}

export default Button