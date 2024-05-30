// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="social-icons">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaInstagram className="icon" />
                </div>
                <p>&copy; 2024 MyCompany. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
