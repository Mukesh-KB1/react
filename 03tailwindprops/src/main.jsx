import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card1 from './card1.jsx'

let data1 = {
  Uname : "Mukesh",
  description : "Preparing for a JOB",
  view : 500
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card1 {...data1} btnText={"click me"}/>
    <Card1 />

  </StrictMode>,
)
