import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pagina1">Pagina 1</Link></li>
        <li><Link to="/pagina2">Pagina 2</Link></li>
        <li><Link to="/pagina3">Pagina 3</Link></li>
        <li><Link to="/pagina4">Pagina 4</Link></li>
        <li><Link to="/pagina5">Pagina 5</Link></li>
        <li><Link to="/pagina6">Pagina 6</Link></li>
        <li><Link to="/pagina7">Pagina 7</Link></li>
        <li><Link to="/pagina8">Pagina 8</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
