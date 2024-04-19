import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pagina1">Numerologie</Link></li>
        <li><Link to="/pagina2">Tarot</Link></li>
        <li><Link to="/pagina3">Formations</Link></li>
        <li><Link to="/pagina4">Seances</Link></li>
        <li><Link to="/pagina5">Sur moi</Link></li>
        <li><Link to="/pagina6">Blog</Link></li>
        <li><Link to="/pagina7">Boutique</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
