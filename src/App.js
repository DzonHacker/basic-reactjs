import logo from './logo.svg';
import React, {Component, useState} from 'react';
import './App.css';
import {Person, AddToCart} from './Person/Person'


function App() {
  const [dets, setdets] = useState({Person:[{name:"John", age : "20"},
                                  {name:"Dipesh",age :"21"}]}) //state hook
  const switchPersonState = (newName) => {
    setdets({Person:[{name:newName, age : "20"},
                {name:"Dipesh",age :"21"}]})
  }

  const [count,setCount] = useState(0)
  // const addCount = () => {
  //   setCount(count+1)
  // }
  const nameChangeHandler = (event) =>{
    setdets({Person:[{name:event.target.value, age : "20"},
                {name:"Dipesh",age :"21"}]})
  }
  return (
    <div className="App">
      <h1>This is my first react ap</h1>
      <button onClick={switchPersonState.bind(this,"Dzasta")}>Click Here</button>
      <Person name={dets.Person[0].name} age = {dets.Person[0].age} /> 
      <Person name={dets.Person[1].name} age = {dets.Person[1].age} changed={nameChangeHandler} >My hobby is Programming</Person>
      <AddToCart itemCount={count}/>
      <button onClick={()=>{setCount(count+1)}}>Add to Cart</button>
    </div>
    //React.createElement('div', {className:"App"}, React.createElement('h1',null,'This is hello world'))
);
}

export default App;
