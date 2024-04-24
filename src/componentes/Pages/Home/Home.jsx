import React, { useRef, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';
import emailjs from 'emailjs-com';
import CustomSlider from '../Slider';
import axios from 'axios';





const Home = () => {
  const formRef = useRef(null);
  const [reviews, setReviews] = useState([]);
  const [paragraphContent, setParagraphContent] = useState('');


   // Función para obtener los reviews de Facebook
   const PAGE_ID = '1091327095306985';
   const ACCESS_TOKEN = 'EAAPgjmPZAeukBO60fkSBGz63gFSuJuBaVvXTQ07KjqGldgo4gpLefWAr5BlIZBPlPHXJZCgdtVbRZB4OZCm5Xj0Uu9aLZC2GC34uGSGSi7g61HcEoOdQyRpRbDG1fBeImJ28sctNlD4qFxpZAaXZCeOZAZBgpwxZCd4lJ4qZA510FZCqKbSJbwlZCEbizb6oQZD';
   
   const fetchReviews = async () => {
     try {
       const response = await axios.get(`https://graph.facebook.com/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}`);
       setReviews(response.data.data);
     } catch (error) {
       console.error('Error al obtener los reviews de Facebook:', error);
     }
   };
   
      // Llamar a la función para obtener los reviews cuando el componente se monta
      useEffect(() => {
        fetchReviews();
      }, []);

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
            <Link to="/Seances">30' Seances Gratis</Link>
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
      <section className='section5'>
        <div className="slider-container">
          <CustomSlider />
        </div>
        <div className="paragraph-container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque dolorem, voluptas itaque nam totam voluptatum assumenda sapiente architecto nulla quia corporis. Eveniet nobis eum dolores, placeat totam perferendis debitis?</p>
        </div>
      </section>
      <section className='section6'>
        <h1>Reviews de Facebook</h1>
        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div className="card" key={index}>
              <h3>{review.author}</h3>
              <p>{review.text}</p>
              <p>{review.rating}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='section4'>
        <div className='p4-home'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aliquam corrupti nobis, accusamus adipisci modi laborum. Facere nam vero tenetur dolores! Sunt praesentium debitis dolorum officiis pariatur nisi suscipit modi.</p>
          <img className="img-home1" src="/img-home1.jpeg" alt="imagen-richard" ></img>  
        </div>
         {/* Botón de WhatsApp */}
       <div className="whatsapp-button" onClick={openWhatsAppChat}>
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </div>   
      </section>
      <div className="button2">
         <Link to="/Seances">Seances Gratis...</Link>
      </div>
    </Layout>
  );
};

export default Home;
