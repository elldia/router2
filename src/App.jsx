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

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
