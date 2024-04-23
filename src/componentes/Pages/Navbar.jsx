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
    </div>
  );
};

export default Navbar;
