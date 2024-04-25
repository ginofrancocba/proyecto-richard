import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
   <section className='section-footer'>
        <div className='footer-column1'>
            <p>Paris-France</p>
            <p>Whatsapp +33 6 64 42 40 50</p>
            <p>contac@numerologie-tarot.com</p>
        </div>
        <div className='footer-column2'>        
            <div className="social-media">
                <p><a href="https://www.facebook.com/richard.albacete/about" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                <p><a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">Tik Tok</a></p>
                <p><a href="https://www.instagram.com/richard_albacete/" target="_blank" rel="noopener noreferrer">Instagram</a></p> 
                <p><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a></p>
            </div>
        </div>
      </section>
      <section className='section-footer-p'>
        <div className='footer-copyright'>
            <p>Copyright © studio23.es All rights reserved.</p> 
        </div>
      </section>
    </footer>
  );
};

export default Footer;
