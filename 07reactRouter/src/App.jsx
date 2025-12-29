import { useState } from 'react'
import { Outlet } from 'react-router';
import { Header,Footer } from './components/index.js';

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
