import React, { useLayoutEffect } from 'react';
import BenefitCard from '../components/BenefitCard/BenefitCard';
import BenefitCardContent from '../components/BenefitCard/BenefitCardContent';
import Home from '../HomePage/section1/Home';
import cfhome from '../images/cfhome.jpg';
import './CrossFitPage.css';

const CrossFitPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Home
        title="CrossFit"
        description="Movimientos funcionales, constantemente variados, ejecutados a alta intensidad."
        image={cfhome}
      />
      <section className="benefits">
        <h3>¿Por qué entrenar en CrossFit Xela?</h3>
        <div className="benefits-list">
          {BenefitCardContent.map((card) => (
            <BenefitCard
              key={card.title}
              title={card.title}
              description={card.description}
              images={card.images}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CrossFitPage;
