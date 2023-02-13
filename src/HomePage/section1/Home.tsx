import React from 'react';
import './Home.css';
import homeImage from '../../images/portada.jpg';

type HomeContent = {
  title: string;
  description: string;
};

const Home = (props: HomeContent) => {
  return (
    <section className="home">
      <img src={homeImage} alt="background-image" />
      <div className="black-background">
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>

          <button>CLASE DE PRUEBA</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
