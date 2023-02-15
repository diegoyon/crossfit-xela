import React from 'react';
import BenefitCard from '../components/BenefitCard/BenefitCard';
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
      <section className="benefits">
        <h3>Beneficios de CrossFit</h3>
        <BenefitCard />
      </section>
    </>
  );
};

export default CrossFitPage;
