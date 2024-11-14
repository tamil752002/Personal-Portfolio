import React from 'react';
import '../styles/home.css';
import mYImg from '../assets/profile.jpg';
import resume from '../assets/Resume.pdf';
const Home = () => {
  const resumedowload = () => {
    alert('jij');
  };
  return (
    <div id="Home" className="homemasterDiv">
      <div className="mainContent">
        <div className="Name"> 👋 Hi, I'm Tamilselvan </div>
        <div>Full stack Developer !</div>
        <div>
          {/* <button class="resume" > */}
          <a href={resume} download="Tamilselvan_Resume" class="download-btn">
            Resume
          </a>
          {/* </button>  */}
        </div>
      </div>
      <div className="imageDiv">
        <img
          src={mYImg}
          width={300}
          alt="Background"
          className="backgroundImage"
        />
      </div>
    </div>
  );
};

export default Home;
