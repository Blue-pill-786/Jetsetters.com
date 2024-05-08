import React, { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import FlightsPage from './pages/FlightsPage';
import PopupModal from './components/shared/PopupModal';

const App = () => {
  const [firstPop, setFirstPop] = useState(false);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem('popModal') !== 'true') {
      setFirstPop(true);
    }
    sessionStorage.setItem('popModal', 'true');
  }, [])
  console.log(firstPop);
  return (
    <>
      <Routes>
        <Route path='/' element={<FlightsPage />} />
        <Route path='*' element={<div className='min-h-screen  flex justify-center items-center text-5xl font-bold'>404 Not Found</div>} />
      </Routes>

      {
        firstPop && <PopupModal
          setOpen={setOpen}
          open={open}
          firstPop={firstPop}
          setFirstPop={setFirstPop}
        />
      }
    </>
  )
}

export default App;