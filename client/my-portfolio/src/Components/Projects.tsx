import React from 'react';
import '../styles/projects.css';
import chatimg from "../assets/Chat.png"

const projectsData = [
  {
    id: 1,
    title: 'Chat Application',
    description: 'coming soon !',
    imageUrl: '', // Replace with your image URL
  }

];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={chatimg}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
