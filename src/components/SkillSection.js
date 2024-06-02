// SkillSection.js
import React, { useRef, useEffect, useState } from 'react';
import { delay, motion } from 'framer-motion';
import '../styles/SkillSection.css'; // Import the CSS file

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Git", "Webpack"];

const SkillSection = () => {

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
        hidden: {opacity: 0, x: -100 },
        visible: { opacity: 1, x:0, transition: { duration: 2 } }
    };

    return (
        <section ref={aboutRef} className="skill-section">
            <motion.h2 className="skill-title" variants={textVariants} animate={isVisible ? "visible" : "hidden"} >My Skills</motion.h2>
            <div className="skill-list-container">
                <div className="skill-list">
                    {skills.concat(skills).map((skill, index) => (
                        <motion.div whileHover={ {scale:0.5}} whileTap={{rotate:"2.5deg"}} key={index} className="skill-item">
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
