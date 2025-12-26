import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Chai from './chai.jsx'

function Note(){
  return(
    <>
      <div>nothing to NOTE!!</div>
    </>
  )
}

const reactLink =  (
  <a href="https://google.com" target="_blank">click me</a>
)

const item = "Hii";

const reactElement = React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "google",
  item
)


createRoot(document.getElementById('root')).render(

    reactElement

)
