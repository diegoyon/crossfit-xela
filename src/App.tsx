import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/section1/Home';
import Programs from './sections/section2/Programs';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Programs />
      </main>
    </>
  );
};

export default App;
