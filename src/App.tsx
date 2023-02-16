import React from 'react';
import Navbar from './components/Navbar';
import Footer from './HomePage/section5/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CrossFitPage from './CrossFitPage/CrossFitPage';
import SchedulePage from './SchedulePage/SchedulePage';
import OpenGymPage from './OpenGymPage/OpenGymPage';
import PersonalPage from './PersonalPage/PersonalPage';
import PricesPage from './PricesPage/PricesPage';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crossfit" element={<CrossFitPage />} />
          <Route path="/horarios" element={<SchedulePage />} />
          <Route path="/opengym" element={<OpenGymPage />} />
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/precios" element={<PricesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
