import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <section className="programs">
      <h2>Servicios</h2>
      <p>
        Sin importar tu edad o nivel de fitness, nosotros te ayudamos a mejorar
        tu salud.
      </p>
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
          <h3>Open Gym</h3>
          <p>
            Estás interesado en hacer tus propias ejercicios y rutinas. Tenemos
            un espacio dedicado para tí.
          </p>
          <button>Más información</button>
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
