// AboutSection.js
import React, { useRef, useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';
import profileImage from '../pro1.png'; // Ensure you have a profile.png image in the src directory
import './About.css'; // Import the CSS file

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const aboutSection = aboutRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const aboutSectionOffset = aboutSection.offsetTop;
            if (scrollPosition > aboutSectionOffset) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 , delay:1} }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 3, delay: 2 } }
    };

    const titleani = {
        hidden: { opacity: 0, scale: 0.3 },
        visible: { opacity: 1, scale: 1, transition: { duration: 2 } }
    };

    return (
        
        <section ref={aboutRef} className="about-section" id='about'>
            <div className="about-content">
                <motion.div className="about-text" variants={textVariants} animate={isVisible ? "visible" : "hidden"}>
                    < motion.div className="title" variants={titleani} animate={isVisible ? "visible" : "hidden"}>
                        <h2>LET ME INTRODUCE MYSELF</h2>
                    </motion.div>
                    <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                    <p>I am fluent in classics like <span> Java, Javascript, and Electron.</span>
                    </p>
                    <p>Whenever possible, I also apply my passion for developing products with <span>Node.js</span> and Modern Javascript Library and Frameworks like <span>React.js</span>and <span>Next.js.</span></p>
                </motion.div>
                <motion.div className="about-image" variants={imageVariants} animate={isVisible ? "visible" : "hidden"}>
                    <img src={profileImage} alt="Profile" />
                </motion.div>
            </div>
        </section>
    );
}

export default AboutSection;
