import logo from './logo.svg';
import React, {Component, useState} from 'react';
import './App.css';
import {Person, AddToCart} from './Person/Person'




function App() {
  const [dets, setdets] = useState({Person:[{name:"John", age : "20"},
                                  {name:"Dipesh",age :"21"}]}) //state hook
  const switchPersonState = () => {
    setdets({Person:[{name:"Dzon", age : "20"},
                {name:"Dipesh",age :"21"}]})
  }

  const [count,setCount] = useState(0)
  const addCount = () => {
    setCount(count+1)
  }

  return (
    <div className="App">
      <h1>This is my first react ap</h1>
      <button onClick={switchPersonState}>Click Here</button>
      <Person name={dets.Person[0].name} age = {dets.Person[0].age} /> 
      <Person name={dets.Person[1].name} age = {dets.Person[1].age} >My hobby is Programming</Person>
      <AddToCart itemCount={count}/>
      <button onClick={addCount}>Add to Cart</button>
    </div>
    //React.createElement('div', {className:"App"}, React.createElement('h1',null,'This is hello world'))
);
}

export default App;
