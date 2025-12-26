import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'

function App() {
  
  const [password,setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [charAllowed,setCharAllowed] = useState(false);
  const [numberAllowed,setNumberAllowed] = useState(false);

  let passRef = useRef(null);

/*Simple definition --->
         useCallback stores the function in memory 
         and returns the SAME function reference if dependencies don’t change. */
  /*3️⃣ Core Difference (Simple Words)
         Aspect	               useEffect	           useCallback
         Used for	             Side effects	         Memoizing functions
         Runs code	           After render	         Does NOT run automatically
         Returns	             Nothing	             A function
         Main goal	           Do something	         Optimize performance */
  let passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i = 1;i <= length;i++){
      let rand = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(rand);
    }
    
    setPassword(pass);
  },[length,charAllowed,numberAllowed,setPassword]);  

  let copyPasswordInClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  },[password])
  
  useEffect(()=>{
    passwordGenerator();
  },[numberAllowed,charAllowed,length,passwordGenerator])

  return (
      <div className='w-full max-w-lg mx-auto shadow-mdrounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
              type="text"
              value = {password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passRef}
          />
          <button onClick={copyPasswordInClipboard} 
          className=" outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0
          rounded-md transition duration-200  hover:bg-blue-800 hover:shadow-md active:scale-95
          ">
            copy
          </button>
        </div>


        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input 
                type="range"
                min={6}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
                type="checkbox" 
                defaultChecked = {numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev)=>!prev);
                }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input 
                type="checkbox" 
                defaultChecked = {charAllowed}
                id = "charInput"
                onChange={()=>setCharAllowed((prev)=>!prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
  )
}

export default App
