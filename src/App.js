import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from './components/About';
import SkillSection from './components/SkillSection';
import ProjectsSection from './components/ProjectsSection';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <ProjectsSection/>
      <ContactUs/>
      <Footer/>
      
    </div>
  );
}

export default App;
