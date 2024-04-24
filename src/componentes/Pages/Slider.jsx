import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
    const [speed, setSpeed] = useState(4000);

    // Función para aumentar la velocidad
    const increaseSpeed = () => {
        setSpeed((prevSpeed) => prevSpeed - 500); // Reducir la velocidad en 500 ms
      };

          // Función para disminuir la velocidad
    const decreaseSpeed = () => {
        setSpeed((prevSpeed) => prevSpeed + 500); // Aumentar la velocidad en 500 ms
          };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
  };

  return (
    <div>
      <h2 className='slider-titulo'>Galerie d'images</h2>
    <Slider {...settings}>
      <div>
        <img className="img-slider1" src="/img-slider1.jpeg" alt="imagen-curso" />
      </div>
      <div>
        <img className="img-slider1" src="/img-slider2.jpeg" alt="imagen-libro" />
      </div>
      <div>
        <img className="img-slider1" src="/img-slider3.jpeg" alt="imagen-curso" />
      </div>
      <div>
        <img className="img-slider1" src="/img-slider4.jpeg" alt="imagen-libro" />
      </div>
    </Slider>
    </div>
  );
};

export default CustomSlider;
