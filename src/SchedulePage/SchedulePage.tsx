import React from 'react';
import Home from '../HomePage/section1/Home';
import './SchedulePage.css';

const SchedulePage = () => {
  return (
    <section className="schedule">
      <h3>Horarios</h3>
      <p>Lunes a viernes: 5:00am - 8:30pm</p>
      <p>Sábados: 7:00am - 12:30pm</p>

      <div className="grid-container">
        <div className="grid-item days"></div>
        <div className="grid-item days">Lunes</div>
        <div className="grid-item days">Martes</div>
        <div className="grid-item days">Miércoles</div>
        <div className="grid-item days">Jueves</div>
        <div className="grid-item days">Viernes</div>
        <div className="grid-item days">Sábado</div>
        <div className="grid-item days">Domingo</div>
        <div className="grid-item hour">5:00am</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">6:00am</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:00am</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:30am</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">8:00am</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">9:00am</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">10:00am</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item event">Open Gym</div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">3:00pm</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">4:00pm</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">5:00pm</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">6:00pm</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:30pm</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item event">CrossFit</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
      </div>
    </section>
  );
};

export default SchedulePage;
