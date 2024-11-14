import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
