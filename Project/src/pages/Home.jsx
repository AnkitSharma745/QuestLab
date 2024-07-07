// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/styles.css'
import RotatingIcons from '../components/RotatingIcons';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="home-first-section">
      <div className="container">
      <div className="first-section-content">
        <h1>Transform Your Product with Intelligent In- App Experiences</h1>
        <p>Empower growth & Marketing Teams to Boost Engagement and Conversion 10x faster without data or engineering team</p>
         <div className="email-input">
            <input type="email" placeholder='Enter your mail address' />
            <button>Book Demo</button>
            
         </div>
         <p>No credit card required</p>

          <div className="dots-background-container">
            <br />
            <img src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg" alt="" />
          </div>
       </div>
      </div>
    </div>
         
         <div className="home-section2">
               
             <div className="home-section2-first">
              <br />
               <h1>AI-Driver Personalized UI</h1>
               <p>Enhance your app with AI-driven personalized Ui, seamlessly integrated with your data stack for a tailored user experience </p>
                  
               <div className="h-s-f-1">
                      <div className="logo-container">
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg" alt="Firebase Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg" alt="Segment Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/snowflack-X_nYrDCM.svg" alt="Snowflake Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/stack-MxdB7c0M.svg" alt="Stack Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/firebase-gDRaRdGY.svg" alt="Firebase Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/AMPL-MScmEe7Q.svg" alt="Amplify Logo" />
                        </div>
                        <div className="logo-item">
                          <img src="https://www.questlabs.ai/assets/segmentIcon-18JVZ7QZ.svg" alt="Segment Logo" />
                        </div>
                        <div className="logo-item">
                          <img style={{color:"white"}} src="https://img.icons8.com/?size=128&id=wU62u24brJ44&format=png" alt="Segment Logo" />

                        </div>
                      </div>
                 </div>

               <div className='chart-container'>
                   <div className="chart-container-left">
                      <p>AI Segmentation</p>
                      <p>Analytics & Insights</p>

                   </div>
                  <img src="https://www.questlabs.ai/assets/logoWithLines-L5NiNPgQ.svg" alt="" />
                    <div className="chart-container-right">
                      <p>Decision Agents</p>
                      <p>AI growth companion</p>
                    </div>
               
               </div>



             </div>
   
              <div className="home-section2-second">

                 <p>Dynamic & Intelligent Experiences</p>
                 <h1>Deliver Delightful In-App Experiences that drive Adoption, Engagement & Retention</h1>
                 <p>50+ Pre-Built In-app Components to get started within minutes</p>
                 <img src="" alt="" />
              </div>

           
         </div>
      

    
    
    </>
  )
};

export default Home;
