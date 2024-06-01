import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from './components/About';
import SkillSection from './components/SkillSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <Footer/>
      <ProjectsSection/>
    </div>
  );
}

export default App;
