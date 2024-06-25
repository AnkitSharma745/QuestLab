// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css'
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-first-section">
       <div className="first-section-content">
        <h1>Transform Your Product with Intelligent In- App Experiences</h1>
        <p>Empower growth & Marketing Teams to Boost Engagement and Conversion 10x faster without data or engineering team</p>
         <div className="email-input">
            <input type="email" placeholder='Enter your mail address' />
            <button>Book Demo</button>
            
         </div>
         <p>No credit card required</p>
      
      
       </div>
    </div>

    
    
    </>
  )
};

export default Home;
