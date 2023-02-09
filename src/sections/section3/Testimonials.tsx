import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h3>Testimoniales</h3>
      <div
        className="fb-video"
        data-href="https://www.facebook.com/crossfitxela/videos/1161834404570933"
        data-width="100"
        data-show-text="false"
      >
        <blockquote
          cite="https://www.facebook.com/crossfitxela/videos/1161834404570933/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/crossfitxela/videos/1161834404570933/"></a>
          <p>
            Juanita nos cuenta como el Crossfit la ha ayudado en su vida, como
            la ha ayudado a reducir la ansiedad y depresión, y como ahora se
            siente más en paz y feliz con ella. Esta es una de tantas historias
            que nos gusta conocer, compartir y sobre todo de las cuales
            aprender. ¡Gracias Juanita por ser inspiración para nosotros!
            &#064;jun_iq
          </p>
          Publicado por{' '}
          <a href="https://facebook.com/crossfitxela">CrossFit Xela</a> en
          Miércoles, 20 de abril de 2022
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
