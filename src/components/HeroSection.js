// HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import demoImage from '../dev2.png';

const HeroSection = () => {
    return (
        <motion.section id='home'
            
            className="hero-section">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="hero-content">
                <div className="hero-text">
                    <h1>Hi There! 👋🏻</h1>
                    <h2>I'M <motion.span>
                        Pasindu Madushan</motion.span></h2>
                    <p>Discover amazing features that will make your website stand out.</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  whileHover={ {x:100, scale:1.5}}
                  className="hero-image">
                    <img src={demoImage} alt="Demo" />
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default HeroSection;
