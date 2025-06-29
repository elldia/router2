import { useState } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <>
      {/* test components */}
      {/* <Home />
      <About /> */}
      
      <BrowserRouter basename="router2">
        <div id="wrap">
          <h1><Link to="/">index</Link></h1>
          <Link to="/about">About</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
