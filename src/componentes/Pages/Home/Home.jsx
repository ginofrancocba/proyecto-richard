import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';
import emailjs from 'emailjs-com';
import CustomSlider from '../Slider';


const Home = () => {
  const formRef = useRef(null); 

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      // Parámetros para tu plantilla de correo electrónico
      to_name: 'Nombre del destinatario',
      from_name: 'Tu nombre',
      message: 'Este es un correo electrónico de prueba enviado usando emailjs',
    };

      const serviceId = 'service_r3ebwrc';
      const templateId = 'template_ggzepaa';
      const userId = 'WmcRxYglEsBbNIw_6';
  
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('Correo electrónico enviado correctamente:', response);
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });
    };

      // Función para abrir el chat de WhatsApp
  const openWhatsAppChat = () => {
    const phoneNumber = '34622311251'; // Reemplaza esto con tu número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };


  return (
    <Layout>   
      <section className='section1'>
        <div className="relative-container">
          <img className="img-header" src="/img-header2.png" alt="imagen-richard" />
          <div className="button-container">
            <Link to="/Seances">30' Gratis...</Link>
          </div>
        </div>
      </section>
      <section className='section-form'>
        <div className="p2-home">
          <p className='p1-home'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, ex libero tenetur beatae iste quis molestiae error deserunt, vero explicabo minus laborum ut nulla ratione fuga velit porro voluptas iure.</p>
        </div>
        <div className='p2-home'>
          <div className="column">
            <ul>
              <form className="mi-formulario" ref={formRef} onSubmit={sendEmail}>
                <li>
                  <label>Nombre</label>
                </li>
                <li>
                  <input type="text" name="user_name" />
                </li>
                <li>
                  <label>Correo electrónico</label>
                </li>
                <li>
                  <input type="email" name="user_email" />
                </li>
                <li>
                  <label>Mensaje</label>
                </li>
                <li>
                  <textarea name="message" />
                </li>
                <li>
                  <input type="submit" value="Enviar" />
                </li>
              </form>
            </ul>
          </div>      
        </div>
      </section>
      <section className='section3'>
        <div>
          <h1>Cours à venir</h1>
        </div>
        <div>
          <Link to="/Formations">
            <img className="img-curso" src="/img-curso.jpeg" alt="imagen-curso" ></img>   
          </Link>
          <Link to="Seances">
            <img className="img-libro" src="/img-libro.JPG" alt="imagen-libro" ></img>
          </Link>
        </div>
      </section>
      <section className='section4'>
        <div className='p4-home'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam corrupti nobis, accusamus adipisci modi laborum. Facere nam vero tenetur dolores! Sunt praesentium debitis dolorum officiis pariatur nisi suscipit modi.</p>
          <img className="img-home1" src="/img-home1.jpeg" alt="imagen-richard" ></img>  
        </div>
      </section>
      <section className='section5'>
        <CustomSlider />
      </section>
      
       {/* Botón de WhatsApp */}
       <div className="whatsapp-button" onClick={openWhatsAppChat}>
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </div>
    </Layout>
  );
};

export default Home;
