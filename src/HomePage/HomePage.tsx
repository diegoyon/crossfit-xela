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
        description="Con más de 7 años de experiencia, CrossFit Xela es el único gimnasio afiliado en Xela. Contamos con 500 metros cuadrados de espacio haciéndonos el gimnasio de CrossFit más grande y completo de la región. Contamos con entrenadores certificados CrossFit L1 que te ayudarán a tener un estilo de vida de lo más saludable y plena posible."
        image={portada}
      />
      <Programs />
    </>
  );
};

export default HomePage;
