import React, { useEffect, useState } from 'react';
import './BenefitCard.css';

const BenefitCard = () => {
  const [image, setImage] = useState(
    'https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/329704789_480772610747568_3053823986333748116_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=BMJ5Omm4Nd4AX-OGDzu&_nc_ht=scontent.fgua3-4.fna&oh=00_AfCpN303T1XD-nubbH_DZqTQxTlGyUyYP_Id7VkdqJtu_Q&oe=63F13603'
  );

  const images = [
    'https://scontent.fgua3-4.fna.fbcdn.net/v/t39.30808-6/329704789_480772610747568_3053823986333748116_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=BMJ5Omm4Nd4AX-OGDzu&_nc_ht=scontent.fgua3-4.fna&oh=00_AfCpN303T1XD-nubbH_DZqTQxTlGyUyYP_Id7VkdqJtu_Q&oe=63F13603',
    'https://scontent.fgua3-3.fna.fbcdn.net/v/t39.30808-6/327631703_1212508352738715_8426527109739163071_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=5ekangrPmQIAX_Ur2g6&_nc_oc=AQn5Z9w9LVplosV1CDeinl8fKSTnF_d1Gd8m6yuj05s5X4xVSan4fwuihoBdYiBSASU&_nc_ht=scontent.fgua3-3.fna&oh=00_AfCMA0wihPbN7b5XxIdm2ppZQ26gUSiG-ivfKgYRgtfvwQ&oe=63F2B5AB',
  ];

  let counter = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < images.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
      setImage(images[counter]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="benefit-card">
      <div className="image-container">
        <img src={image} />
      </div>
      <h4>Mejora tu metabolismo</h4>
      <p>
        CrossFit incrementa tu metabolismo durante y después de cada workout.
      </p>
    </div>
  );
};

export default BenefitCard;
