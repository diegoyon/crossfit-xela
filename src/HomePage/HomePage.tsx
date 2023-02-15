import React, { useLayoutEffect } from 'react';
import Home from './section1/Home';
import Programs from './section2/Programs';
import portada from '../images/portada.jpg';

const HomePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Home
        title="THIS PLACE WILL CHANGE YOU"
        description="El ejercicio es el elixir de la vida, y los beneficios de CrossFit
            se transfieren a actividades diarias desde cargar las compras del
            supermercado hasta superar desafíos en el trabajo."
        image={portada}
      />
      <Programs />
    </>
  );
};

export default HomePage;
