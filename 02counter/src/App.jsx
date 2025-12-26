import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let count = 15;
  let[count,setCount] = useState(15);

  const addition = ()=>{

    if(count < 20){
      setCount (count + 1);
      console.log(count);

    }
    
  }

  function removeE(){

    if(count > 0){
      setCount(count -1);
      console.log(count);
    }
    
  }
  return (
    
    <>
      <h1>HIi ALLiens😁 {count}</h1>

      <button onClick={addition}>Add</button><br />
      <button onClick={removeE}>Remove</button>
    </>
  )
}

export default App
