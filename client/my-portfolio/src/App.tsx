import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Projects/>
     
    </div>
  );
}

export default App;
