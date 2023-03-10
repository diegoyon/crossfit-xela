import React, { useLayoutEffect } from 'react';
import './SchedulePage.css';

const SchedulePage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="schedule">
      <h3>Horarios</h3>
      <p>Lunes a viernes: 5:00am - 8:30pm</p>
      <p>Sábados: 7:00am - 12:30pm</p>

      <div className="grid-container">
        <div className="grid-item days empty"></div>
        <div className="grid-item days">Lunes</div>
        <div className="grid-item days">Martes</div>
        <div className="grid-item days">Miércoles</div>
        <div className="grid-item days">Jueves</div>
        <div className="grid-item days">Viernes</div>
        <div className="grid-item days">Sábado</div>
        <div className="grid-item days">Domingo</div>
        <div className="grid-item hour">5:00am</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00am - 6:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00am - 6:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00am - 6:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00am - 6:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00am - 6:00am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">6:00am</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00am - 7:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00am - 7:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00am - 7:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00am - 7:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00am - 7:00am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:00am</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:00am - 8:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:00am - 8:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:00am - 8:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:00am - 8:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:00am - 8:00am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:30am</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30am - 9:00am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">8:00am</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>8:00am - 9:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>8:00am - 9:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>8:00am - 9:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>8:00am - 9:00am</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>8:00am - 9:00am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">9:00am</div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>9:00am - 10:30am</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">10:30am</div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item opengym">
          <p>Open Gym</p>
          <p>10:30am - 12:30pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">3:00pm</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>3:00pm - 4:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>3:00pm - 4:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>3:00pm - 4:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>3:00pm - 4:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>3:00pm - 4:00pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">4:00pm</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>4:00pm - 5:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>4:00pm - 5:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>4:00pm - 5:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>4:00pm - 5:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>4:00pm - 5:00pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">5:00pm</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00pm - 6:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00pm - 6:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00pm - 6:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00pm - 6:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>5:00pm - 6:00pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">6:00pm</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00pm - 7:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00pm - 7:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00pm - 7:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00pm - 7:00pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>6:00pm - 7:00pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
        <div className="grid-item hour">7:30pm</div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30pm - 8:30pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30pm - 8:30pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30pm - 8:30pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30pm - 8:30pm</p>
        </div>
        <div className="grid-item event">
          <p>CrossFit</p>
          <p>7:30pm - 8:30pm</p>
        </div>
        <div className="grid-item empty"></div>
        <div className="grid-item empty"></div>
      </div>
    </section>
  );
};

export default SchedulePage;
