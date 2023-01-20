import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <section className="programs">
      <h2>Clases</h2>
      <div className="program-card">
        <div className="card-info">
          <h3>CrossFit</h3>
          <p>
            Forma parte de clases grupales que consisten en ejercicios
            constantemente variados, ejecutados a alta intensidad.
          </p>
          <button>Más informacion</button>
        </div>
      </div>
      <div className="program-card">
        <div className="card-info">
          <h3>HIIT</h3>
          <p>
            Nuestro programa de HIIT te hará quemar calorias y te mantendra en
            forma con movimientos funcionales.
          </p>
          <button>Más informacion</button>
        </div>
      </div>
      <div className="program-card">
        <div className="card-info">
          <h3>Clases Personales</h3>
          <p>
            ¿Necesitas algo más personalizado? Nuestros coaches están
            capacitados para lo que necesites.
          </p>
          <button>Más informacion</button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
