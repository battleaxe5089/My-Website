import React, { useState } from 'react';
import './App.css';

const projects = [
  {
    id: 1,
    name: 'SitesMobile',
    description: "Over the course of 14 weeks, the SitesMobile team updated the tracking system utilized by Mizzou's Computing Sites, replacing Microsoft Forms and Excel Workbooks with a mobile application to streamline student employee tasks and computer lab management. The app, aimed at roaming student employees, facilitates inventory counts, computer cleaning logs, and weekly form submissions. It also provides managers with tools to access data and review detailed reports for progress tracking, evaluations, and site data. The project included 4 weeks of conceptualization, 6 weeks of development, and 4 weeks of testing and implementation. The team collaborated on user interface and backend tasks, establishing a unified system for tracking employee activities and lab statuses. Key features include user authentication, live location and map functionalities, form submissions for productivity tasks, issue tracking, and the ability to manage images for enhanced data management.",
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg']
  },
  {
    id: 2,
    name: 'Grocery Store Website',
    description: "My Grocery Store website is a full-stack web application designed for a seamless online grocery shopping experience. Built with a React frontend and a Node.js backend, it uses MongoDB for efficient product and user data management. Key features include user authentication with registration and login, dynamic product display across categories like Produce, Meat, Frozen, Dairy, and Bakery, and a robust cart system allowing users to add, view, and remove items. The checkout process ensures secure user information handling with form validation and a date picker for DOB entry. The site is fully responsive, providing an excellent user experience on all devices. The technical stack includes React, React Router, Axios, Node.js, Express.js, MongoDB, Mongoose, bcrypt for password hashing, and Toastify for notifications.",
    video: ['groceryStore.mp4']
  }
];
 
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0); // Reset to the first image when a new project is selected
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="Github">
      <h1>GitHub Projects:</h1>
      <h2>
        <a href="https://github.com/battleaxe5089" target="_blank" rel="noopener noreferrer">
          Battleaxe5089
        </a>
      </h2>
      <div className="Projects-content">
        <div className="Projects-list">
          {projects.map((project) => (
            <div key={project.id} className="Project-item" onClick={() => handleProjectClick(project)}>
              {project.name}
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className="Project-details">
            <h3>{selectedProject.name}</h3>
            <p>{selectedProject.description}</p>
            {selectedProject.video ? (
              <div className="Project-video">
                <video width="100%" controls>
                  <source src={selectedProject.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="Project-images">
                <button onClick={handlePreviousImage}>Previous</button>
                <img src={selectedProject.images[currentImageIndex]} alt="Project" />
                <button onClick={handleNextImage}>Next</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
