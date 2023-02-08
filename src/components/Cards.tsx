import React from 'react';

interface Card {
  title: string;
  description: string;
}

const Cards = (props: Card) => {
  const card: Card = props;

  return (
    <div className="program-card">
      <div className="card-info">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
        <button>Más información</button>
      </div>
    </div>
  );
};

export default Cards;
