import React, { useEffect, useRef, useState } from 'react';
import './Programs.css';
import CardsContent from '../../components/CardsContent';
import Cards from '../../components/Cards';

const Programs = () => {
  const [showClass, setShowClass] = useState('');
  const hiddenRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          setShowClass('show');
        } else {
          setShowClass('');
        }
      });
    });

    if (hiddenRef.current) {
      observer.observe(hiddenRef.current);
    }

    // cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, [hiddenRef]);

  return (
    <section className="programs">
      <h2 ref={hiddenRef} className={`hidden ${showClass}`}>
        ¿QUÉ OFRECEMOS?
      </h2>
      <p className={`hidden ${showClass}`}>
        Sin importar tu edad o nivel de fitness, nosotros te ayudamos a mejorar
        tu salud.
      </p>
      <div className="services">
        {CardsContent.map((card) => (
          <Cards
            key={card.title}
            title={card.title}
            description={card.description}
            link={card.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Programs;
