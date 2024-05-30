import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import AboutSection from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default App;
