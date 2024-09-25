import React, { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { FaBars } from "react-icons/fa"; 
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='navbar'>
        <div className='nav-logo'>
          <h1>Wefo</h1>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className='menu-item'>Menu Item</li>
            <li className='menu-items'>Menu Item</li>
            <li className='menu-items'>Menu Item</li>
            <li className='menu-items'>Menu Item</li>
          </ul>
        </div>
        <div className={`navbar-button ${isMobileMenuOpen ? 'active' : ''}`}>
          <button className='start-button'>
            Start a project
            <span className='arrow-icon'><MdArrowOutward /></span>
          </button>
        </div>
        <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
          <FaBars />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
