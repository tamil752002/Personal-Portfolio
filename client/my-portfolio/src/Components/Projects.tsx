import React from 'react';
import '../styles/projects.css';

const projectsData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'A brief description of Project Three.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

 const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects