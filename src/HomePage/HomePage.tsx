import React from 'react';
import Home from './section1/Home';
import Programs from './section2/Programs';

const HomePage = () => {
  return (
    <>
      <Home
        title="THIS PLACE WILL CHANGE YOU"
        description="El ejercicio es el elixir de la vida, y los beneficios de CrossFit
            se transfieren a actividades diarias desde cargar las compras del
            supermercado hasta superar desafíos en el trabajo."
      />
      <Programs />
    </>
  );
};

export default HomePage;
