import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
    const [speed, setSpeed] = useState(2000);

    // Función para aumentar la velocidad
    const increaseSpeed = () => {
        setSpeed((prevSpeed) => prevSpeed - 400); // Reducir la velocidad en 500 ms
      };

          // Función para disminuir la velocidad
    const decreaseSpeed = () => {
        setSpeed((prevSpeed) => prevSpeed + 400); // Aumentar la velocidad en 500 ms
          };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: speed, 
  };

  return (
    <div>
      <h2 className='slider-titulo'>Galerie d'images</h2>
    <Slider {...settings}>
      <div>
        <img className="img-slider1" src="/img-curso.jpeg" alt="imagen-curso" />
      </div>
      <div>
        <img className="img-slider2" src="/img-libro.JPG" alt="imagen-libro" />
      </div>
    </Slider>
    </div>
  );
};

export default CustomSlider;
