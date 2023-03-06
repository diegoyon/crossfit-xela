import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

type Card = {
  title: string;
  description: string;
  link: string;
};

const Cards = (props: Card) => {
  const card: Card = props;

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

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     console.log(entry);
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('show');
  //     } else {
  //       entry.target.classList.remove('show');
  //     }
  //   });
  // });

  // const hiddenElements = document.querySelectorAll('.hidden');
  // hiddenElements.forEach((el) => observer.observe(el));

  return (
    <div ref={hiddenRef} className={`program-card hidden ${showClass}`}>
      <div className={`card-info hidden ${showClass}`}>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <Link to={card.link}>
          <button>Más información</button>
        </Link>
      </div>
    </div>
  );
};

export default Cards;
