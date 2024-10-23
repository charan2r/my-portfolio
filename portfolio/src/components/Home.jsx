//import React from "react";
//import Lottie from "lottie-react";
//import codeboy from "../lotties/coding-boy.json";
import Tilt from "react-parallax-tilt";
import Gamer from "../assets/gamer.jpg";
import Charan from "../assets/charan.jpg";
//import CharanR from "../assets/charanr.png";
import Type from "./Type";
import { IoLogoGameControllerB } from "react-icons/io";
import CV from "../assets/Charan_CV.pdf";


const Home = () => {
    return (
    <div >
        <div className='HomePage'>
  
          <div className='HomeText'>
            <h1>Hello There!</h1>
            <h1>I am <b>Charan Romi</b></h1>
            <Type/>
            <a href={CV} download='Charan_CV.pdf' className="downloadCV">Download CV</a>
              
          </div>
          <img src={Charan} alt="new" className="illustration"/>
  
          {/*<Lottie 
            className="illustration" 
            animationData={codeboy} 
            loop={true} 
          />*/}
          
        </div>
  
        <div className='AboutPage'>
          <div className='AboutText'>
            <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
            <p>
            I love transforming initial concepts into fully functional websites or products that make a real difference. 
            I am driven by the desire to take on projects that push me to grow as a developer and allow me to create work that I can truly take pride in.<br /><br />
            I have good knowledge in <b>Java</b> and  <b>Python</b> and am working on  
            projects in <b>Full-Stack</b> development.<br />
            I plan to learn <b>cloud technologies</b> in the near future. <br /><br />
            Also, I love <b>playing PC games</b> <IoLogoGameControllerB style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
          </div>
          <Tilt>
            <img className='Avatar' src={Gamer} alt="" />
          </Tilt>
        </div>
    </div>
    )
 }

export default Home;