// ProjectsSection.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImage4 from '../images/CURRENCY CONVRTER.jpg';
import projectImage2 from '../images/EXPENSE TRACKER.jpg';
import projectImage3 from '../images/music player .jpg';
import projectImage1 from '../images/note taking.jpg';
import projectImage5 from '../images/shop buddy.jpg';
import projectImage6 from '../images/tech shop .jpg';
import '../styles/ProjectsSection.css';

const projects = [
    {
        id: 1,
        title: 'NOTE TAKING APP',
        image: projectImage1,
        githubLink: 'https://github.com/Bugzseater/Note-Taking',
        demoLink: 'https://note-taking-ashen.vercel.app/'
    },
    {
        id: 2,
        title: 'EXPENSE TRACKER',
        image: projectImage2,
        githubLink: 'https://github.com/Bugzseater/Expense-Tracker',
        demoLink: 'https://expense-tracker-eight-kohl.vercel.app/'
    },
    {
        id: 3,
        title: 'MUSIC PLAYER',
        image: projectImage3,
        githubLink: '',
        demoLink: ''
    },
    {
        id: 4,
        title: 'CURRENCY CONVERTER',
        image: projectImage4,
        githubLink: 'https://github.com/Bugzseater/Currency-converter',
        demoLink: 'https://currency-converter-cyan-delta.vercel.app/'
    },
    {
        id: 5,
        title: 'SHOP BUDY',
        image: projectImage5,
        githubLink: 'https://github.com/Bugzseater/shop-buddy',
        demoLink: ''
    },
    {
        id: 6,
        title: 'TECH SHOP',
        image: projectImage6,
        githubLink: 'https://github.com/Bugzseater/Sanity-stripe-next-14-Ecommerce',
        demoLink: 'https://sanity-stripe-next-14-ecommerce.vercel.app/'
    },
];

const projectsall = [
    {
        id: 1,
        title: 'POS SYSTEM',
        image: projectImage5,
        githubLink: 'https://github.com/Bugzseater/POS-for-Clotheshop',
        demoLink: ''
    }
];

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const projectsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (projectsRef.current) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const sectionPosition = projectsRef.current.offsetTop;
                if (scrollPosition > sectionPosition + 100) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } }
    };

    const textVariants = {
        hidden: {opacity: 0, x: 100 },
        visible: { opacity: 1, x:0, transition: { duration: 2 } }
    };

    return (
        <section ref={projectsRef} className="projects-section" id='projects'>
            <motion.h2 className="projects-title" variants={textVariants} animate={isVisible ? "visible" : "hidden"} >Recent Projects</motion.h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={cardVariants}
                    >
                        <motion.img whileHover={{scale:1.2}}  src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-links">
                            <motion.a
                             whileHover={{rotate:"5.5deg"}} 
                             href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </motion.a>
                            <motion.a 
                            whileHover={{rotate:"-5.5deg"}} 
                            href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* {!showMore && (
                <div className="more">
                    <button onClick={() => setShowMore(true)}>Show More</button>
                </div>
            )}

            {showMore && (
                <div className="projectsall-grid">
                    {projectsall.map(project => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial="hidden"
                            animate={isVisible ? "visible" : "hidden"}
                            variants={cardVariants}
                        >
                            <motion.img whileHover={ {scale:1.2}} src={project.image} alt={project.title} className="project-image" />
                            <h3 className="project-title">{project.title}</h3>
                            <motion.div className="project-links">
                            <motion.a
                             whileHover={{rotate:"5.5deg"}} 
                             href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </motion.a>
                            <motion.a 
                            whileHover={{rotate:"-5.5deg"}} 
                            href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            )} */}
        </section>
    );
}

export default ProjectsSection;
