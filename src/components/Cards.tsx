import React from 'react';
import { Link } from 'react-router-dom';

type Card = {
  title: string;
  description: string;
  link: string;
};

const Cards = (props: Card) => {
  const card: Card = props;

  return (
    <div className="program-card">
      <div className="card-info">
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
