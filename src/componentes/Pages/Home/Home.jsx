import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';
import emailjs from 'emailjs-com';


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

      // Reemplaza los siguientes valores con los IDs reales de tu cuenta de EmailJS
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

  return (
    <Layout>   
      <section className='section1'>
        <div className="relative-container">
          <img className="img-header" src="/img-header2.png" alt="imagen-richard" />
          <div className="button-container">
            <Link to="/seances">30' Gratis...</Link>
          </div>
        </div>
      </section>
      <section className='section-form'>
        <div className="p2-home">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, culpa animi, aliquamñl kglghñrtjnh gñojtnrh gñjesn vo</p>
        </div>
        <div className='p2-home'>
          <div className="column">
            <ul>
              <form className="mi-formulario" ref={formRef} onSubmit={sendEmail}>
                <li><label>Nombre</label></li>
                <li><input type="text" name="user_name" /></li>
                <li><label>Correo electrónico</label></li>
                <li><input type="email" name="user_email" /></li>
                <li><label>Mensaje</label></li>
                <li><textarea name="message" /></li>
                <li><input type="submit" value="Enviar" /></li>
              </form>
            </ul>
          </div>      
        </div>
      </section>
      <section className='section3'>
        <div>
          <h1>Próximos cursos</h1>
        </div>
        <div>
          <img className="img-curso" src="/img-curso.jpeg" alt="imagen-curso" ></img>   
          <img className="img-libro" src="/img-libro.JPG" alt="imagen-libro" ></img>
        </div>
      </section>
      <section className='section4'>
        <div className='p4-home'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, culpa animi, aliquamñl kglghñrtjnh gñojtnrh gñjesn vo</p>
          <img className="img-home1" src="/img-home1.jpeg" alt="imagen-richard" ></img>  
        </div>
        <div></div>
      </section>
    </Layout>
  );
};

export default Home;
