// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import './Footer.css';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <a href='https://github.com/Bugzseater' target='_blank'><FaGithub className="icon" /></a>
                    <a href='https://www.facebook.com/pasindu.madushan.7927' target='_blank'><FaFacebook className="icon" /></a>
                    <a href='www.linkedin.com/in/owpm' target='_blank'><FaLinkedin className="icon" /></a>
                </div>
                <p>&copy; 2024 PasinduMadushan. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
