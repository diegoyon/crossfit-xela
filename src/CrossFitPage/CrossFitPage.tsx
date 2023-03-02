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
        title="Clases de CrossFit"
        description="Ya sea que seas nuevo en el mundo del fitness o que vas al gimnasio desde hace mucho
        tiempo, CrossFit es para ti. Millones de personas de todos los orígenes, edades y habilidades
        confían en CrossFit y por una buena razón: funciona."
        image={cfhome}
      />
      <section className="benefits">
        <h3>
          ¿Por qué entrenar en <span>CrossFit Xela</span>?
        </h3>
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
