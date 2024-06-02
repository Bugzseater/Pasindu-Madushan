// ContactUs.js
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbynWbFAPYnuzaQ_yNfVsxQoBRSX8AY9rgra0HbRvpaKN0TiDR1HwHphdFHfz78qd-Lx/exec';

        try {
            const res = await fetch(scriptURL, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await res.json();
            setResponse(result.status);
        } catch (error) {
            console.error('Error!', error.message);
            setResponse('Error');
        }
    };

    const [isVisible, setIsVisible] = useState(false);
    const contactRef = useRef(null);

    useEffect(() => {
        const aboutSection = contactRef.current;
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.1 },
        visible: { opacity: 1, scale: 1, transition: { duration: 2.5 } }
    };

    return (
        <section ref={contactRef} className="contact-us-section" id='contact'>
            <motion.h2 className="contact-us-title" variants={textVariants} animate={isVisible ? "visible" : "hidden"} >Contact Us</motion.h2>
            <motion.form 
                className="contact-us-form"
                animate={isVisible ? "visible" : "hidden"}
                variants={cardVariants}
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <motion.button 
                    type="submit"
                    className="send-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send
                </motion.button>
                {response && <p>{response}</p>}
            </motion.form>
        </section>
    );
}

export default ContactUs;
