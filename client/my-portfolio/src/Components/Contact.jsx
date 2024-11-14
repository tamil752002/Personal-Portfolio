import React from 'react';
import '../styles/contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-card">
          <a
            href="https://www.linkedin.com/in/tamilselvan-ravichandran-376649258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="contact-icon" />
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://github.com/tamil752002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="contact-icon" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
