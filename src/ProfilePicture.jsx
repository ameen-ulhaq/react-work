function ProfilePicture() {

    const imageUrl = 'https://ameenulhaq.com/wp-content/uploads/2023/04/studio-shot-of-handsome-european-man-smiles-positi-Y4MWC2J-223x300.png'

    const handleclick = (e) => e.target.style.display = "none"
    return(
        <img src={imageUrl} alt="" onClick={(e) => handleclick(e)} />
    )
}

export default  ProfilePicture