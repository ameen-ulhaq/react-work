import React, {useState} from 'react'
function OonChange() {

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(5)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantitychange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentchange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantitychange} type="number" />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentchange} placeholder='Some text' />
            <p>Comment: {comment}</p>

            <select name="" id="" value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label htmlFor="">
                Pick up
                <input type="radio" name="" id="" value="Pick up" checked={shipping === "Pickup"} onChange={handleShippingChange} />
            </label>
            <label htmlFor="">
                Delivery
                <input type="radio" name="" id="" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            </label>
            <p>Shipping: {shipping}</p>

            
        </div>
    )
}

export default OonChange