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
        hidden: { scale:0.3 },
        visible: { scale:1, transition: { duration: 2 } }
    };

    return (
        <section ref={aboutRef} className="skill-section">
            <motion.h2 className="skill-title" variants={textVariants} animate={isVisible ? "visible" : "hidden"} >My Skills</motion.h2>
            <div className="skill-list-container">
                <div className="skill-list">
                    {skills.concat(skills).map((skill, index) => (
                        <div key={index} className="skill-item">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
