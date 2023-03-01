import React, { useEffect, useState } from 'react';
import './BenefitCard.css';

type BenefitCardInfo = {
  title: string;
  description: string;
  images: string[];
};

const BenefitCard = (props: BenefitCardInfo) => {
  const [image, setImage] = useState(props.images[0]);

  // let words: string[];

  let counter = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < props.images.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      setImage(props.images[counter]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="benefit-card">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="information">
        <div className="title">
          {props.title.split(' ').map((word, index) => {
            return <h4 key={index}>{word}</h4>;
          })}
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
