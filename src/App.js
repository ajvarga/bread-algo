import './App.css';
import React, { useState, useEffect} from 'react';

// what i want to do is for when one of the fields is filled, the other fields will auto fill based on a formula

function App() {
  let [flour, setFlour] = useState(0)
  let [water, setWater] = useState(0)
  let [starter, setStarter] = useState(0)
  let [salt, setSalt] = useState(0)

  useEffect(() => {
    // update the other fields on keychange
    flourChange(flour)
    // console.log("useEffect ran")

  }, [flour]);

  function flourChange(flour){
    // the ratio is 50% water to flour and 30% starter to flour
    // TODO figure out why the values are always 0
    // known: flour is a number type and is changed propperly
    if(flour != 0){

      setWater = (flour * 0.5)
      setStarter = (flour * 0.3)
      setSalt = (flour * 0.01)
    }

    console.log(flour)
    
    // console.log(water)
    // console.log(starter)
    // console.log(salt)

  }
  function handleChange(event) {
    let inputName = event.target.name
    let value = event.target.value

    // check for valid input
    if(!isNaN(value))

      if(inputName == "flour"){
        setFlour(parseInt(value))
        console.log(typeof(flour))
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
          <input name="flour" type="text" onChange={ handleChange } />
        </div>

        <div className='water-amt'>water amt: { water }</div>
        <div className='starter-amt'> starter amt: { starter }</div>
        <div className='salt-amt'> salt amt: { salt }</div>
        
        {/* <button></button> */}
      </div>
      
      </header>
    </div>
  );
}

export default App;
