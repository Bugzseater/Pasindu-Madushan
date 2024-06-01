// ProjectsSection.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectImage1 from '../images/CURRENCY CONVRTER.jpg';
import projectImage2 from '../images/EXPENSE TRACKER.jpg';
import projectImage3 from '../images/music player .jpg';
import projectImage4 from '../images/note taking.jpg';
import '../styles/ProjectsSection.css';

const projects = [
    {
        id: 1,
        title: 'Project One',
        image: projectImage1,
        githubLink: '#',
        demoLink: '#'
    },
    {
        id: 2,
        title: 'Project Two',
        image: projectImage2,
        githubLink: '#',
        demoLink: '#'
    },
    {
        id: 3,
        title: 'Project Three',
        image: projectImage3,
        githubLink: '#',
        demoLink: '#'
    },
    {
        id: 4,
        title: 'Project Four',
        image: projectImage4,
        githubLink: '#',
        demoLink: '#'
    }
];

const ProjectsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
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
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } }
    };

    const textVariants = {
        hidden: { scale:0.3 },
        visible: { scale:1, transition: { duration: 2 } }
    };

    return (
        <section ref={projectsRef} className="projects-section">
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
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-links">
                            <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>
                            <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
