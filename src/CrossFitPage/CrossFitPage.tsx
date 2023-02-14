import React from 'react';
import Home from '../HomePage/section1/Home';
import cfhome from '../images/cfhome.jpg';

const CrossFitPage = () => {
  return (
    <>
      <Home
        title="CrossFit"
        description="Movimientos funcionales, constantemente variados, ejecutados a alta intensidad."
        image={cfhome}
      />
    </>
  );
};

export default CrossFitPage;
