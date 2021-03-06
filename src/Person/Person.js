import React from 'react'
import './Person.css'

//functional components
const Person  = (props) => {
    let classes = ['red','bold']
  

    return (
        <div className = "Person">
            <p className={classes.join(" ")}>I'm a {props.name}. my age is {props.age}</p> 
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}></input>
            <button onClick={props.clicked}>Delete</button>
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