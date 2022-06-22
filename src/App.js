import './App.css';
import React, { useState, useEffect} from 'react';

// what i want to do is for when one of the fields is filled, the other fields will auto fill based on a formula
// TODO error check for if 0 and backspace is pressed

function App() {
  let [flour, setFlour] = useState(0)
  let [water, setWater] = useState(0)
  let [starter, setStarter] = useState(0)
  let [salt, setSalt] = useState(0)

  useEffect(() => {
    // update the other fields on keychange
    flourChange(flour)
    // console.log("useEffect ran")
    if(flour < 0){
      setFlour(0)
    }

  }, [flour]);

  function flourChange(flour){
    // the ratio is 50% water to flour and 30% starter to flour
    if(flour !== 0){
      setWater(flour * 0.5)
      setStarter(flour * 0.3)
      setSalt(flour * 0.01)
    }
  }

  function clearAmt(){
    setFlour(0)
    setWater(0)
    setStarter(0)
    setSalt(0)

  }
  function handleChange(event) {
    let inputName = event.target.name
    let value = event.target.value
    console.log(event)
    // check for valid input
    if(!isNaN(value))
      if(inputName === "flour"){
        setFlour(parseInt(value))
        return
      }
    else{
      console.log("invalid input, please input a number")
    }
  }

  return (
    <div className="App">
      <header className="App-header">

      <div className ="formula">
        <h2>Just throw in how much flour/water/starter you got and we'll do the rest!</h2>

        <div className="flour-amt">
          <p>Input flour g </p>
          <input name="flour" type="text" value={ flour } onChange={ handleChange }></input>
        </div>

        <div className="water-amt">
          <p>Input water g </p>
          <input name="water" type="text" value={ water } onChange={ handleChange }></input>
        </div>
        <div className="starter-amt">
          <p>Input starter g </p>
          <input name="starter" type="text" value={ starter } onChange={ handleChange }></input>
        </div>
        
        <div className="salt-amt">
          <p>Input salt g </p>
          <input name="salt" type="text" value={ salt } onChange={ handleChange }></input>
        </div>
        
        <button onClick={ clearAmt }>clear </button>
      </div>
      
      </header>
    </div>
  );
}

export default App;
