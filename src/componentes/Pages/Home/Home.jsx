import React, { useRef, useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../Layout/Layout';
import emailjs from 'emailjs-com';
import CustomSlider from '../Slider';
import axios from 'axios';
import Footer from '../../Footer/Footer'; 



const Home = () => {
  const formRef = useRef(null);
  const [reviews, setReviews] = useState([]);


   const PAGE_ID = '1091327095306985';
   const ACCESS_TOKEN = 'EAAPgjmPZAeukBO60fkSBGz63gFSuJuBaVvXTQ07KjqGldgo4gpLefWAr5BlIZBPlPHXJZCgdtVbRZB4OZCm5Xj0Uu9aLZC2GC34uGSGSi7g61HcEoOdQyRpRbDG1fBeImJ28sctNlD4qFxpZAaXZCeOZAZBgpwxZCd4lJ4qZA510FZCqKbSJbwlZCEbizb6oQZD';

    // Llamar a la función para obtener los reviews cuando el componente se monta
    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await axios.get(`https://graph.facebook.com/${PAGE_ID}/ratings?access_token=${ACCESS_TOKEN}`);
          setReviews(response.data.data);
        } catch (error) {
          console.error('Error al obtener los reviews de Facebook:', error);
        }
      };
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
          <p className='p1-home'>Découvrez votre objectif de vie avec clarté en utilisant la numérologie. Inscrivez-vous maintenant et obtenez une vision 
          approfondie de votre passé, présent et futur. Abonnez-vous pour explorer votre potentiel et allumer votre passion avec nos guides détaillés !</p>
        </div>
        <div className='form-home'>
          <div className="column">
            <ul>
              <form className="mi-formulario" ref={formRef} onSubmit={sendEmail}>
                <li>
                  <input type="text" name="user_name" placeholder='Nom' />
                </li>
                <li>
                  <input type="email" name="user_email" placeholder='courrier électronique' />
                </li>
                <li>
                  <textarea name="message" placeholder='message' />
                </li>
                <li>
                  <input type="submit" value="Subscribe" />
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
          <p className='p-paragraph'>Richard Albacete a pris la décision audacieuse de se consacrer entièrement à l'enseignement du Tarot et de la Numérologie, rendant ces disciplines anciennes
             accessibles à tous. Son objectif est de populariser ces méthodes auprès du grand public, rehaussant leur statut et démontrant leur valeur. 
             Grâce à de nombreuses expériences et défis surmontés, Richard a acquis une compréhension profonde qui lui a permis d'embrasser sa passion. 
             Établir une école et enseigner à plein temps reflète son engagement envers son destin et son désir de vivre de ce qu'il aime, 
             refusant le confort et le conformisme pour poursuivre une vie de réalisation personnelle.</p>
        </div>
      </section>
      <section className='section6'>
        {/* <h1>Reviews de Facebook</h1> */}
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
        <div className='p4'>
          <p className='p-section4'>Richard Albacete s'est engagé à rendre la Numérologie et le Tarot accessibles à tous, cherchant à populariser ces disciplines
           ancestrales à travers l'enseignement. En bâtissant une école, il aspire à restituer leurs lettres de noblesse et à offrir une compréhension profonde 
           de ces outils. Son parcours est marqué par des défis surmontés, enrichissant sa passion et sa maîtrise. Pour Richard, vivre de sa passion et aider les 
           autres à découvrir leur destin sont essentiels pour une vie épanouie, loin de la facilité et du conformisme.
          </p>
          <img className="img-about" src="/img-about.jpeg" alt="imagen-richard" ></img>  
        </div>
         {/* Botón de WhatsApp */}
       <div className="whatsapp-button" onClick={openWhatsAppChat}>
        <img src="/whatsapp-icon.png" alt="WhatsApp" />
      </div>   
      </section>
      <div className="button2">
         <Link to="/Seances">Seances Gratis...</Link>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
