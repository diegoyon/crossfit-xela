import React from 'react';
import Navbar from './components/Navbar';
import Footer from './HomePage/section5/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import CrossFitPage from './CrossFitPage/CrossFitPage';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crossfit" element={<CrossFitPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
