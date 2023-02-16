import React, { useLayoutEffect } from 'react';
import Home from '../HomePage/section1/Home';
import personalhome from '../images/personalhome.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper';

import personal from '../images/personal.jpg';
import personal1 from '../images/personal1.jpg';
import personal2 from '../images/personal2.jpg';

const PersonalPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Home
        title="Clases Personales"
        description="Buscas clases personalizadas diseñadas para tus necesidades y metas específicas. Maximiza tus resultados trabajando junto con un de nuestros entrenadores certificados con años de experiencia."
        image={personalhome}
      />

      <div className="opengym-card">
        <div className="swiper-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={personal} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personal1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={personal2} />
            </SwiperSlide>
          </Swiper>
        </div>
        <h3>Clases Personales</h3>
        <p>
          Las clases personales son sesiones de entrenamiento individuales
          diseñadas para necesidades y metas específicas.
        </p>
        <p>
          Tu entrenador trabajará junto contigo para establecer un programa de
          entrenamiento para cumplir tus metas, manteniendote responsable de que
          las cumplas y asimismo, asegurándote que tu técnica sea la correcta.
        </p>
        <p>Te ofrecemos una clase de prueba gratis.</p>
      </div>
    </>
  );
};

export default PersonalPage;
