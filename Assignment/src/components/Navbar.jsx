// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-first">
       
        <Link to="/" className="logo">Quest</Link>

        </div>
        <div className="nav-second">
          <Link to="/playbook" >Playbook</Link>
          <Link to="/signin" >Resources</Link>
          <Link to="/signup" >Blogs</Link>
        </div>
        <div className="nav-third">
             <button className='nav-btn1'>Get Started</button>
             <button className='nav-btn2'>Book Demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
