import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Demo from './pages/Demo';

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Flights flightsData={flightsData} />} /> */}
      <Route path='/' element={<Demo />} />
    </Routes>
  )
}

export default App;