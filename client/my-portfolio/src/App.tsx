import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
