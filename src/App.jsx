// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css'

function App() {
  return (
    <>
    <div className='App'>
     <Navbar/>
      <h2>Movies lib</h2>
    </div>
     <Outlet/>
    </>
  )
}

export default App;
