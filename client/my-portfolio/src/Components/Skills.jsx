import React from 'react';
import javascript from "../assets/javascript.png";
import reactjs from "../assets/reactjs.png";
import express from "../assets/express.png";
import docker from "../assets/docker.png";
import MongoDB from "../assets/mongodb.jpg";
import Node from "../assets/node.png";
import Cpp from "../assets/cpp.png";
import Docker from "../assets/docker.png";
import "../styles/skill.css";

const Skills = () => {
  const skillsList = [
    { name: 'JavaScript', img: javascript },
    { name: 'React', img: reactjs },
    { name: 'Node.js', img: Node },
    { name: 'MongoDB', img: MongoDB },
    { name: 'C++', img: Cpp },
    { name: 'Docker', img: Docker },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} className="skill-icon" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
