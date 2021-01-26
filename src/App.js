import React, {useState} from 'react';
import './App.css';
import {Person, AddToCart} from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import LenghtValidation from './Validation/Validation'
import CharComponent from './CharComponent/CharComponent'


function App() {
  const [dets, setdets] = useState({Person:[
    {id: 1, name:"John", age : "20"},
    {id: 2, name:"Dipesh",age :"21"}
  ]}) //state hook
  const switchPersonState = (newName) => {
    setdets({Person:[{id: 1, name:newName, age : "20"},
                {id: 2, name:"Dipesh",age :"21"}]})
  }

  const [UserName, SetUsername] = useState({userName:''})
  const [ToggleState, SetToggleState] = useState({toggle:false})

  const [count,setCount] = useState(0)
  // const addCount = () => {
  //   setCount(count+1)
  // }
  const nameChangeHandler = (event, id) =>{
    //getting the exact list to update 
    const personIndex = dets.Person.findIndex(pers => {
      return pers.id === id;
    });

    //assiging new object
    //const person = Object.assign({},dets.Person[personIndex])
    const person = {...dets.Person[personIndex]}
    person.name = event.target.value;

    //copying state with spread operator (...)
    const persons = [...dets.Person]
    //modifying specific list data
    persons[personIndex] = person;

    setdets({Person:persons})
  }

  const deleteListHandler = (delIndex) =>{
    //const persons = dets.Person.slice()
    const persons = [...dets.Person]
    persons.splice(delIndex,1);
    setdets({Person:persons})
    
  } 

  const UpdateUsername = (event) => {
    SetUsername({userName:event.target.value})
  }
    //inline-style
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }

    const toggleStyle = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '4px',
      cursor: 'pointer'
    }
  
  const toggleUserOutput = () =>{
    if(ToggleState.toggle){
      SetToggleState({toggle:false})
    }else{
      SetToggleState({toggle:true})
    }
  }


  let userOput = null
  if(ToggleState.toggle){
    userOput = (
      <div>
        <UserOutput newUser = {UserName.userName} />
        <UserOutput newUser = {UserName.userName} />
        <UserOutput newUser = {UserName.userName} />
      </div>
    )
    toggleStyle.backgroundColor = 'red'
  }
  
  const [inCharList, setInCharList] = useState({userInput:''})
  const [textLength, setLen] = useState(0)
  //output length of text
  const OutputLengthHandler = (event) =>{
    let input = event.target.value
    let len = input.toString().length
    setLen(len)
    setInCharList({userInput:input})
  }
  //delete char handler
  const DeleteChar = (delIndex) =>{
    const chars = [...inCharList.userInput]
    chars.splice(delIndex,1);
    const splitChars = chars.toString().split(',')
    const updateChars = splitChars.join('')
    setInCharList({userInput:updateChars})
  }

  //char as array
  let charList = [...inCharList.userInput].map((char,index)=>{
    return(
      <CharComponent ch={char} key={index} clicked={DeleteChar.bind(this,index)}/>
    )
  })

  // const cha = (event,id) =>{
  //   const getIndex = [...dets.Person].findIndex(()=>{
  //     return dets.Person.id === id
  //   })

  //   const personField = dets.Person[getIndex];
  //   personField.name = event.target.value;

  //   const persons = [...dets.Person];
  //   persons[getIndex] = personField;
    

  // }

  return (
    <div className="App">
      <h1>This is my first react ap</h1>
      <button style = {style} onClick={switchPersonState.bind(this,"Dzasta")}>Click Here</button>
      {/* <div>
        <Person name={dets.Person[0].name} age = {dets.Person[0].age} /> 
        <Person name={dets.Person[1].name} 
          age = {dets.Person[1].age} 
          changed={nameChangeHandler}>My hobby is Programming</Person>
      </div> */}
      <div>
        {dets.Person.map((person, index) => {
          return (<Person name={person.name} 
              age={person.age}
              changed={(event)=>{
                nameChangeHandler(event,person.id)
              }}
              clicked={deleteListHandler.bind(this,index)}
              key={person.id}
              />
            )
        })}
      </div>

      <AddToCart itemCount={count}/>
      <button onClick={()=>{setCount(count+1)}}>Add to Cart</button>
      <UserInput userChanged={UpdateUsername} />
      <button style={toggleStyle} onClick={toggleUserOutput}>ToggleOutput</button>
      {/* {ToggleState.toggle ?
        <div>
        <UserOutput newUser = {UserName.userName} />
        <UserOutput newUser = {UserName.userName} />
        <UserOutput newUser = {UserName.userName} />
      </div> : null
      } */}
      {userOput} {/* alternative to ternary */}
      
      <br></br>
      <br></br>
      <br></br>
      <input type="text" onChange={OutputLengthHandler} value={inCharList.userInput}></input>
      <LenghtValidation strLen={textLength}/>

      {/* <div>
        {charList.map(char =>{
          return (
            <CharComponent ch={char}/>
          )
        })}
      </div> */}
      {charList}
    </div>
    //React.createElement('div', {className:"App"}, React.createElement('h1',null,'This is hello world'))
);
}

export default App;
