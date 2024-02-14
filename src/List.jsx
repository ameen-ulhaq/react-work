import PropTypes from 'prop-types'

function List( props ) {
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "coconut", calories: 159}, 
    //                 {id: 5, name: "pineapple", calories: 37}] 

    // fruits.sort()

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) //Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) //Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories) // Numeric
    // fruits.sort((a, b) => b.calories - a.calories) // Reverse Numeric

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

    const category = props.category

    const itemsLists = props.items

    const listItems = itemsLists.map( itemsList => <li key={itemsList.id}>
                                            {itemsList.name}: &nbsp; 
                                            <b>{itemsList.calories}</b> 
                                            </li> )

    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">
            {listItems}
        </ul>
        </>
    )
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}
List.defaultProps = {
    category: "Categroy",
    items: []
}

export default List