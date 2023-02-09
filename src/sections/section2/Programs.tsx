import React from 'react';
import './Programs.css';
import CardsContent from '../../components/CardsContent';
import Cards from '../../components/Cards';

const Programs = () => {
  return (
    <section className="programs">
      <h2>Servicios</h2>
      <p>
        Sin importar tu edad o nivel de fitness, nosotros te ayudamos a mejorar
        tu salud.
      </p>

      {CardsContent.map((card) => (
        <Cards
          key={card.title}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default Programs;
