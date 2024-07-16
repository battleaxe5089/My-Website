import React from 'react';
import './App.css';

function Skills() {
  return (
    <div className="Skills-content">
      <h2>Technical Skills</h2>
      <div className="Skills-grid">
        <div className="Skills-section">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>C#</li>
            <li>Swift</li>
          </ul>
        </div>
        <div className="Skills-section">
          <h3>Cyber Security</h3>
          <ul>
            <li>SQL Injection</li>
            <li>Cross-Site Scripting (XSS)</li>
            <li>Cross-Site Request Forgery (CSRF)</li>
          </ul>
        </div>
        <div className="Skills-section">
          <h3>Databases</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="Skills-section">
          <h3>Tools and Technologies</h3>
          <ul>
            <li>Burp Suite</li>
            <li>Virtual Machines</li>
            <li>Jira</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="Skills-Project">
          <h3>Project Management</h3>
          <ul>
            <li>Agile methodologies</li>
            <li>Team collaboration</li>
            <li>Task tracking</li>
          </ul>
        </div>
        <div className="Skills-section">
          <h3>Platforms</h3>
          <ul>
            <li>Windows</li>
            <li>Linux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
