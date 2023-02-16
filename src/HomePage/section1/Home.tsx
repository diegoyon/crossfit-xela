import React from 'react';
import './Home.css';

type HomeContent = {
  title: string;
  description: string;
  image: string;
};

const Home = (props: HomeContent) => {
  return (
    <section className="home">
      <img src={props.image} alt="background" />
      <div className="black-background">
        <div className="content">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <a
            href="https://wa.link/crossfitxela"
            target="_blank"
            rel="noreferrer"
          >
            <button>CLASE DE PRUEBA</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
