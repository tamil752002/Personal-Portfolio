import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-heading">About Me</h2>
      <div className="about-content">
        <div className="about-item fade-in-up">
          <h3 className="sub-heading">🎓 Education</h3>
          <p>
            Studied <strong>Bachelor of Technology in Chemical Engineering</strong> at{' '}
            <strong>Anna University</strong>, Chennai.
          </p>
        </div>

        <div className="about-item fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h3 className="sub-heading">💼 Currently Working</h3>
          <p>
            I am a <strong>Software Trainee</strong> at{' '}
            <strong>Prematix Software Solution Pvt Ltd</strong>, focusing on web development,
            with experience in <strong>React, Node.js, and MongoDB</strong>.
          </p>
        </div>

        <div className="about-item fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="sub-heading">📚 Currently Learning</h3>
          <p>
            Exploring <strong>React TypeScript</strong> projects to deepen my understanding,
            mastering <strong>C++ Pointers</strong>, and learning{' '}
            <strong>Algorithmic Trading Bot Development</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
