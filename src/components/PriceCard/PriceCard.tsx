import React from 'react';

import './PriceCard.css';

const PriceCard = () => {
  return (
    <>
      <div className="price-card">
        <h3>Tres veces por semana</h3>
        <p>
          Membresía para las personas que buscan más flexibilidad por límite de
          tiempo.
        </p>
        <h4>
          Q.355
          <span className="monthly">/mensuales</span>
        </h4>
        <ul>
          <li>Incluye:</li>
          <li>
            Tres clases grupales a la semana en cualquiera de los horarios.
          </li>
          <li>Acceso al Open Gym antes o después de la clase.</li>
          <li>
            Acceso a ZenPlanner donde podrás darle seguimiento a tus entrenos y
            guardar tus progreso.
          </li>
        </ul>
      </div>
      <div className="price-card">
        <h3>Ilimitado</h3>
        <p>
          Membresía para las personas que buscan comprometerse en buscar una
          rutina de todos los días
        </p>
        <h4>
          Q.425
          <span className="monthly">/mensuales</span>
        </h4>
        <ul>
          <li>Incluye:</li>
          <li>Clases grupales ilimitadas en cualquiera de los horarios.</li>
          <li>Acceso ilimitado al Open Gym a cualquier horario.</li>
          <li>
            Acceso a ZenPlanner donde podrás darle seguimiento a tus entrenos y
            guardar tus progreso.
          </li>
        </ul>
      </div>
    </>
  );
};

export default PriceCard;
