import React from 'react';
import '../styles/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function Footer() {
  return (
    <>
<div className="footer-container">
    {/* <div data-aos="fade-up"
     data-aos-duration="700"> */}
             <div className="footer-left-container">
                <img src="https://www.questlabs.ai/assets/brandLogo-_2OygUFf.png" alt="Quest Labs" />
                <p>Quest Labs INC</p>

             </div>
             <div className="footer-right-container">
                    <ul>
                      <li>Resources</li>
                      <li>Blog</li>
                      <li>Newsletter</li>
                      <li>Playbook</li>
                      <li>Docs</li>
                    </ul>
                    <ul>
                      <li>Support</li>
                      <li>Contact</li>
                      <li>Join Quest Club</li>
                      <li>Sales Partner</li>
                    </ul>
                    <ul>
                      <li>Legal</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Use</li>
                      <li>Cookies Policy</li>
                    </ul>
             </div>
            
      </div>
      {/* </div> */}
       <div className="copy-right-section">
         <p>© 2024 Quest Labs INC. All rights reserved </p>
        </div>  
    </>
  );
}

export default Footer;
