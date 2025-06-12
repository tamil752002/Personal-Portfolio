import React from 'react';
import '../styles/projects.css';
import chatimg from "../assets/Chat.png"

const projectsData = [
  {
    id: 1,
    title: 'Chat Application',
    description: 'A real-time chat application built with React and Node.js, featuring instant messaging, user authentication, and responsive design.',
    imageUrl: chatimg,
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com/tamil752002/chat-app',
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Sketch Book',
    description: 'An interactive digital drawing application that allows users to create, edit, and save sketches with various drawing tools and color options.',
    imageUrl: 'https://images.pexels.com/photos/1053687/pexels-photo-1053687.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Canvas API', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/tamil752002/sketch-book',
    liveUrl: 'https://sketch-book-taupe.vercel.app/'
  },

];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;