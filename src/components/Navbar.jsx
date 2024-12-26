import React from 'react';
import { Link } from 'react-scroll';
// import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>ML Developer</h1>
      <div className="nav-links">
        <Link to="home" smooth duration={500}>Home</Link>
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </div>
    </nav>
    
  );
}

export default Navbar;
