import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
    </>
  );
};

export default App;
