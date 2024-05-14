import React, { useEffect, useState, lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import PopupModal from './components/shared/PopupModal';
import Loader from './components/shared/Loader';
import Plane from './assets/gif/trip.gif';
import Ship from './assets/gif/ship2.gif';

const FlightsPage = lazy(() => import('./pages/FlightsPage'));
const Cruise = lazy(() => import('../src/pages/Cruise'));
const CovidFAQ = lazy(() => import('./pages/CovidFAQ'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  const [firstPop, setFirstPop] = useState(false);
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem('popModal') !== 'true') {
      setFirstPop(true);
    }
    sessionStorage.setItem('popModal', 'true');
    // window.scrollTo(0, 0)
  }, [pathname]);
  return (
    <div className='App'>
      <Suspense fallback={""}>
        <Routes>
          <Route path='/' element={<FlightsPage />} />
          <Route path='/cruise' element={<Cruise />} />
          <Route path='/about' element={<About />} />
          <Route path='/covid-19' element={<CovidFAQ />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='*' element={<div className='min-h-screen flex justify-center items-center text-5xl font-bold'>404 Not Found</div>} />
        </Routes>
      </Suspense>

      <Suspense fallback={<Loader />}>
        {firstPop && (
          <PopupModal
            setOpen={setOpen}
            open={open}
            firstPop={firstPop}
            setFirstPop={setFirstPop}
            title={pathname === '/' ? "Flights" : "Cruise"}
            img={pathname === '/' ? Plane : Ship}
          />
        )}
      </Suspense>
    </div>
  )
}

export default App;