import React from 'react'
import "../styles/home.css"
import  mYImg from "../assets/backgrdimg.jpg"
const Home = () => {
  return (
    <div  className='homemasterDiv'>
        <div className='mainContent'>
          <div className='Name' > 👋 Hi, I'm Tamilselvan   </div> 
         <div>Full stack Developer</div>
 
        </div>
        <div  className='imageDiv'>
        <img src={mYImg}  width ={ 500} alt="Background" className="backgroundImage" />

        </div>


    </div>
  )
}

export default Home