import { useState } from 'react'


function App() {
  const [color, setColor] = useState("lavender");

  return (
    <div style={{backgroundColor :color}} className='w-full h-screen duration-200'>
      <h1 className='place-self-center text-4xl text-white absolute top-60'>Namaste Alliens!!</h1>
      <div className='w-full flex flex-wrap justify-center fixed bottom-10 inset-x-0 p-2'>
        <div className='flex flex-wrap justify-center gap-4 bg-black px-3 py-2 rounded-full' >
          <button className='rounded-full px-5 py-1 bg-red-600 text-white' onClick={()=>setColor("red")}>red</button>
          <button className='rounded-full px-5 py-1 bg-green-600 text-white' onClick={()=>setColor("green")}>green</button>
          <button className='rounded-full px-5 py-1 bg-orange-600 text-white' onClick={()=>setColor("orange")}>orange</button>
          <button className='rounded-full px-5 py-1 bg-gray-600 text-white' onClick={()=>setColor("gray")}>gray</button>
          <button className='rounded-full px-5 py-1 bg-pink-600 text-white' onClick={()=>setColor("pink")}>pink</button>
          <button className='rounded-full px-5 py-1 bg-[#808000] text-white' onClick={()=>setColor("olive")}>olive</button>
          <button className='rounded-full px-5 py-1 bg-blue-600 text-white' onClick={()=>setColor("blue")}>blue</button>


        </div>
      </div>
    </div>
  )
}

export default App
