// Navbar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.div className="logo" whileHover={{scale: 1.1}}>Pasindu Madushan</motion.div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item"><a href='#home'>Home</a></li>
          <li className="nav-item"><a href='#about'>About</a></li>
          <li className="nav-item"><a href='#projects'>Projects</a></li>
          <li className="nav-item"><a href='#contanct'>Contact</a></li>
        </ul>
        <FaBars className="menu-icon" onClick={toggleMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
