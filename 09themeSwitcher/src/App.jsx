import { useEffect } from 'react';
import './App.css'
import { themeContext } from './context/theme'
import { useState } from 'react';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [theme, setTheme] = useState("light");

  const darkMode = ( )=>{
      setTheme("dark")
    }

  const lightMode = ( )=>{
      setTheme("light")
    }

  //Logic for applying theme class to body

  useEffect(()=>{
    const body = document.querySelector('body');
    if(theme === "dark"){
      body.classList.add("dark");
    }
    else{
      body.classList.remove("dark");
    }
  },[theme])

  return (
    <themeContext.Provider value={{theme,darkMode,lightMode}}>
      
        <div className="flex flex-wrap items-center min-h-screen">
            <div className="w-full">
                <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
                      <ThemeBtn />
                </div>

                <div className="w-full max-w-sm mx-auto">
                       <Card />
                </div>
            </div>
        </div>

    </themeContext.Provider>
  )
}
export default App
