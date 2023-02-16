import React, { useRef, useLayoutEffect } from 'react';
import Home from '../HomePage/section1/Home';
import opengym from '../images/opengym.jpg';
import './OpenGymPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import open1 from '../images/open1.jpeg';
import open2 from '../images/open2.jpeg';
import open3 from '../images/open3.jpeg';

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
        <div className="swiper-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={open1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={open2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={open3} />
            </SwiperSlide>
          </Swiper>
        </div>
        <h3>Open Gym</h3>
        <p>
          Ofrecemos Open Gym en todos nuestros horarios incluso durante clases,
          ya sea que quieras hacer ejercicios extra antes o después de la clase
          o quieras hacer tu propia progra.
        </p>
        <p>
          Hemos dedicado 60 metros cuadrado de nuestras instalaciones con todo
          el equipo necesario.
        </p>
        <p>
          También contamos con horario de Open Gym de lunes a sábado de 10:30am
          a 12:30pm en dónde podrás hacer uso de todo el gimnasio.
        </p>
      </div>
    </>
  );
};

export default OpenGymPage;
