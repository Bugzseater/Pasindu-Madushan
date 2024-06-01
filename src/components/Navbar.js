// Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import AboutSection from './About';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Pasindu Madushan</div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">Home</li>
          <li className="nav-item"><a href='#about'>About</a></li>
          <li className="nav-item">Project</li>
          <li className="nav-item">Contact</li>
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
