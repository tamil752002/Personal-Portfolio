import React from 'react';
import '../styles/navbar.css';

export const Navbar = () => {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Array of section names
  const sections = ['Home','about', 'projects', 'skills', 'contact'];

  return (
    <div className="navbardiv">
      {sections.map((section) => (
        <div key={section} onClick={() => scrollToSection(section)}>
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </div>
      ))}
    </div>
  );
};
