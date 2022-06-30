import React, { useState, useEffect} from 'react';
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Sourdough(props) {

    let [flour, setFlour] = useState(0)
    let [water, setWater] = useState(0)
    let [starter, setStarter] = useState(0)
    let [salt, setSalt] = useState(0)

    let [name, setName] = useState("")
  
    // TODO, have all fields active for typing
    useEffect(() => {
      handleSwitch(name)
    }, [name]);
  
    function handleSwitch(name){
      if(name === "flour"){
        flourChange(flour)
      }else if(name === "water"){
        waterChange(water)
      }else if(name === "starter"){
        starterChange(starter)
      }else if(name === "salt"){
        saltChange(salt)
      }
      // reset field so useEffect will occur
      setName("")
    }
  
    function flourChange(flour){
      // the ratio is 50% water to flour and 30% starter to flour
      if(flour !== 0){
        setWater(flour * 0.5)
        setStarter(flour * 0.3)
        setSalt(flour * 0.01)
      }
    }
  
    function waterChange(water){
      if(water !== 0){
        setStarter(water * 0.7)
        setFlour(water * 2)
        setSalt(water * .02)
      }
    }
  
    function starterChange(starter){
      if(starter !== 0){
        setFlour(Math.round(starter * 3.333333))
        setWater(Math.round(starter * 1.67))
        setSalt(Math.round(starter * .02))
      }
    }
  
    function saltChange(salt){
      if(salt !== 0){
        setFlour(salt * 200)
        setWater(salt * 100)
        setStarter(salt * 60)
      }
    }

    function handleChange(event) {

        let inputName = event.target.name
        let value = event.target.value
    
        setName(inputName)
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
            // flourChange(flour)
            return
          }
          else{
            setFlour(0)
          }
        }else if(name === "water"){
          if(value.trim().length !== 0){
            setWater(parseInt(value))
            // waterChange(water)
            return
          }
          else{
            setWater(0)
          }
    
        }else if(name ==="salt"){
          if(value.trim().length !== 0){
            setSalt(parseInt(value))
            // saltChange(salt)
            return
          }
          else{
            setSalt(0)
          }
    
        }else if(name ==="starter"){
          if(value.trim().length !== 0){
            setStarter(parseInt(value))
            // starterChange(starter)
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
    <div className='main' class="col d-flex justify-content-center">
        <Card className ="formula">
            <Card.Header>Just throw in how much flour/water/starter you got and we'll do the rest!</Card.Header>
            <Card.Body>
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
                <Button variant='secondary' onClick={ resetVal }>Clear</Button>
            </Card.Body>
            
            
        </Card>
      </div>
  )
}
