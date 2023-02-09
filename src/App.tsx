import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/section1/Home';
import Programs from './sections/section2/Programs';
import Testimonials from './sections/section3/Testimonials';
import Footer from './sections/section5/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Programs />
      </main>
      <Footer />
    </>
  );
};

export default App;
