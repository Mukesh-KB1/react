import { useCallback, useState } from 'react'
import './App.css'
import Child from './child'
import useCounter from './hooks/useCounter'

function App() {
  // const [count, setCount] = useState(0)


  // const increment = useCallback(()=>{
  //   setCount(count => count+ 1);
  // },[]);

  const{count,increment,decrement,reset} = useCounter(10);

  return (
    // <div>
    //   {/* <h2>count : {count}</h2>
    //   <Child increment={increment} /> */}
    // </div>
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment +</button>
      <button onClick={decrement}>decrement -</button>
      <button onClick={reset}>reset</button>

    </div>
  )
}

export default App
