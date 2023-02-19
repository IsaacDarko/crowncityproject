import React from 'react';
import './Footer.scss';

import images from '../../constants/images'; 

const Footer = () => {
  return (
      <div className="app__footer">

        <div className="app__footer-body">

            <div className="app__footer-socials">
                <img className="footer-logo" src={images.footerlogo} alt="travel-agent-logo" />
                <p class="vision">
                    We believe brand interaction is key in 
                    communication. Real innovations and 
                    a positive.
                </p>
                <div className="social-icons">
                    <a href="#"><img className="ico" src={images.twitterlogo} alt="twitter" /></a>
                    <a href="#"><img className="ico" src={images.instagramlogo} alt="instagram" /></a>
                    <a href="#"><img className="ico" src={images.youtubelogo} alt="youtube" /></a>
                </div>
            </div>

            <div className="app__footer-about app__flex">
                <h1 className="title">About Us</h1>
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>

            <div className="app__footer-company app__flex">
                <h1 className="title">Company</h1>
                <ul>
                    <li><a href="#">Core Values</a></li>
                    <li><a href="#">Partner w/ us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

            <div className="app__contact-form">
                <h1 className="title">Get In Touch</h1>
                    <input type="text" placeholder="Your email here..." className="form-input"/>
                    <button className="form-button" >Get Access</button>
            </div>

        </div>

        <hr className="divider" />

        <div className="app__footer-base">

            <div className="copyright">
                <p>Travel Agent © 2023. All Rights Reserved</p>
            </div>

            <div className="privacy">
                <ul className="last-menu">
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>

            </div>

        </div>

      </div>
  
  )
}

export default Footer;