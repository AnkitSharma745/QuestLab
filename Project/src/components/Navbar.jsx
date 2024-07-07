import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-first">
          <Link to="/" className="logo">Quest</Link>
        </div>
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <div className="nav-second">
            <Link to="/playbook">Playbook</Link>
            <Link to="/signin">Resources</Link>
            <Link to="/signup">Blogs</Link>
          </div>
          <div className="nav-third">
            <button className='nav-btn1'>Get Started</button>
            <button className='nav-btn2'>Book Demo</button>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
