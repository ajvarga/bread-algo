import './App.css';
import React, { useState, useEffect} from 'react';

function App() {
  let [flour, setFlour] = useState(0)
  let [water, setWater] = useState(0)
  let [starter, setStarter] = useState(0)
  let [salt, setSalt] = useState(0)

  useEffect(() => {
    // update the other fields on keychange
    // flourChange(flour)
    // waterChange(water)
    // starterChange(starter)
    saltChange(salt)
  }, [salt]);

  function flourChange(flour){
    // the ratio is 50% water to flour and 30% starter to flour
    if(flour !== 0){
      setWater(flour * 0.5)
      setStarter(flour * 0.3)
      setSalt(flour * 0.01)
    }else{
      resetVal()
    }
  }

  function waterChange(water){
    if(water !== 0){
      setStarter(water * 0.7)
      setFlour(water * 2)
      setSalt(water * .01)
    }else{
      resetVal()
    }
  }

  function starterChange(starter){
    if(starter !== 0){
      setFlour(Math.round(starter * 3.333333))
      setWater(Math.round(starter * 1.67))
      setSalt(Math.round(starter * .02))
    }else{
      resetVal()
    }
  }

  function saltChange(salt){
    if(salt !== 0){
      setFlour(salt * 200)
      setWater(salt * 100)
      setStarter(salt * 60)
    }else{
      resetVal()
    }
  }

  function handleChange(event) {
    let inputName = event.target.name
    let value = event.target.value
    console.log(event)
    // check for valid input{
    if(!isNaN(value)){
      setAmounts(inputName, value)
    }
    else{
      console.log("invalid input, please input a number")
    }
  }

  function setAmounts(name, value){
    if(name === "flour"){
      if(value.trim().length !== 0){
        setFlour(parseInt(value))
        return
      }
      else{
        setFlour(0)
      }
    }else if(name === "water"){
      if(value.trim().length !== 0){
        setWater(parseInt(value))
        return
      }
      else{
        setWater(0)
      }

    }else if(name ==="salt"){
      if(value.trim().length !== 0){
        setSalt(parseInt(value))
        return
      }
      else{
        setSalt(0)
      }

    }else if(name ==="starter"){
      if(value.trim().length !== 0){
        setStarter(parseInt(value))
        return
      }
      else{
        setStarter(0)
      }
    }
  }

  function resetVal(){
    setFlour(0)
    setWater(0)
    setStarter(0)
    setSalt(0)

    console.log("all fields empty")
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
        
        <button onClick={ resetVal }>clear </button>
      </div>
      
      </header>
    </div>
  );
}

export default App;
