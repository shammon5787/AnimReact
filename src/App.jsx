import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './Pages/Success'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/success' element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App