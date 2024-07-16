import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import './App.css';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';


function App() {
  useEffect(() => {
    const sections = ['about', 'skills', 'education', 'projects', 'contact'];

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);

      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                section.classList.add('visible');
              } else {
                section.classList.remove('visible');
              }
            });
          },
          { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        observer.observe(section);

        return () => {
          observer.disconnect();
        };
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Karch Hertelendy</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div id="home" className="App-section">
        <Home />
      </div>
      <div id="about" className="App-section">
        <About />
      </div>
      <div id="skills" className="App-section">
        <Skills />
      </div>
      <div id="education" className="App-section">
        <Education />
      </div>
      <div id="projects" className="App-section">
        <Projects />
      </div>
      <div id="contact" className="App-section">
        <Contact />
      </div>
    </div>
  )
}


function Home() {
  return (
    <div className="App-main">
      <aside className="App-sidebar">
        <div className="App-picture">
          <img src="public/profilePic.jpg" alt="Profile" />
        </div>
        <div className="App-info">
          <p>Karch Hertelendy</p>
          <p>Saint Charles, Missouri</p>
          <p>July 17th 2000</p>
        </div>
      </aside>
      <section className="App-content">
        <p>Dedicated and detail-oriented IT professional with a strong background in cybersecurity and project management. Seeking an entry-level position as a Penetration Tester, Security Analyst, Data Analyst, or Vulnerability Assessment Analyst to leverage my technical skills and experience in identifying and mitigating security vulnerabilities.</p>
      </section>
    </div>
  );
}



export default App;
