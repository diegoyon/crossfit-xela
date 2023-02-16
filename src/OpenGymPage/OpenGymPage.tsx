import React, { useLayoutEffect } from 'react';
import Home from '../HomePage/section1/Home';
import opengym from '../images/opengym.jpg';
import './OpenGymPage.css';

const OpenGymPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Home
        title="Open Gym"
        description="¿Quieres hacer tu propia progra? Somos el único gimnasio de Xela que te da acceso todo el día a un espacio dedicado para ti."
        image={opengym}
      />

      <div className="opengym-card">
        <h3>Open Gym</h3>
        <p>
          Ofrecemos Open Gym en todo nuestros horarios incluso durante clases,
          ya sea que quieras hacer extra antes o después de la clase o quieras
          hacer tu propia progra.
        </p>
        <p>
          Hemos dedicado 60 metros cuadrado de nuestras instalaciones con todo
          el equipo necesario.
        </p>
        <p>¡Quédate todo el tiempo que quieras!</p>
      </div>
    </>
  );
};

export default OpenGymPage;
