import React, { useEffect, useState } from 'react';
import './BenefitCard.css';

type BenefitCardInfo = {
  title: string;
  description: string;
  images: string[];
};

const BenefitCard = (props: BenefitCardInfo) => {
  const [image, setImage] = useState(props.images[0]);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < props.images.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      setImage(props.images[counter]);
    }, 1500);
    return () => clearInterval(interval);
  }, [props.images]);

  return (
    <div className="benefit-card">
      <div className="image-container">
        <img src={image} alt={image} />
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
