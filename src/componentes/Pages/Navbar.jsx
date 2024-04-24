import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo-navbar" src="/img-logo.png" alt="Logo" ></img>
      <ul>
        <li><Link to="/"></Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Numerologie">Numerologie</Link></li>
        <li><Link to="/Tarot">Tarot</Link></li>
        <li><Link to="/Formations">Formations</Link></li>
        <li><Link to="/Seances">Seances</Link></li>
        <li><Link to="/Surmoi">Sur moi</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
        <li><Link to="/Boutique">Boutique</Link></li>
      </ul>
      
      {/* Redes Sociales */}
      <div className="redes-sociales">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src="/rrss1.png" alt="Twitter" />
        </a>  
        <a href="https://www.facebook.com/richard.albacete/about" target="_blank" rel="noopener noreferrer">
          <img src="/rrss2.png" alt="Facebook" />
        </a>
        <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
          <img src="/rrss3.png" alt="TikTok" />
        </a>
        <a href="https://www.instagram.com/richard_albacete/" target="_blank" rel="noopener noreferrer">
          <img src="/rrss4.png" alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

