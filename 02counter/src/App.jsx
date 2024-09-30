import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
/* this is the problem when we want to change value of variable whithin multiple places in ui so that react will handle those value at ui according to 
them which uses hooks */

  const [counter, setCounter]  = useState(15)        // counter is the value and setcounter is the function which will handle counter at ui position.
  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    //counter = counter + 1    /*if we write multiple lines of similar code then it's a interesting proplem case, useState sends bunch of updation to ui at the time
    //of updation algorithm will check it is similar kind of case so it will not execute each line. so only 1st line will execute.*/

    // solution of previous case.
    setCounter(prevCounter => prevCounter + 1)       
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}                        // removeValue is the function
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
