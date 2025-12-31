import './App.css'
import { themeContext } from './context/theme'

function App() {

  return (
    <themeContext.Provider>
      <h1 className='bg-pink-200 text-gray-800 p-2 text-2xl'>Context API</h1>
    </themeContext.Provider>
  )
}

export default App
