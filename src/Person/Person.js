import React from 'react'
//functional components
const Person  = (props) => {
    return (
        <div>
            <p>I'm a {props.name}. my age is {props.age}</p> 
            <p>{props.children}</p>
        </div>

    )
}

const AddToCart = (props) => {
    return (
        <div>
            <p>Item {props.itemCount}</p>
        </div>
    )
}


export {
    Person,
    AddToCart
}