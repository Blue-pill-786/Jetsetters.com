import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import FlightsPage from './pages/FlightsPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<FlightsPage />} />
      <Route path='*' element={<div className='min-h-screen  flex justify-center items-center text-5xl font-bold'>404 Not Found</div>} />
    </Routes>
  )
}

export default App;