import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coding from '../lotties/coding.json';
import { useState } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../assets/Charan_CV.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const About = () => {
  const [wid, setwid] = useState(window.innerWidth);
  const [error, setError] = useState(null);

  const handleResize = () => {
    setwid(window.innerWidth);
  };

  window.addEventListener("load", handleResize);
  window.addEventListener("resize", handleResize);

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me</h1>
          <p>
            Hi, my name is <b>Charan Romi</b> and I am from Matara, Sri Lanka.
            I am a <b>Full-Stack web developer</b> and a third year college student pursuing <b>BSc in Software Engineering</b>.<br /><br />

            I am passionate about crafting unique projects with visually appealing designs. You can explore some of my creations in the projects section.<br /><br />
            I am always open to new opportunities for collaboration or work where I can make an impact and continue growing. Do not hesitate to reach out and connect with me!<br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coding} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='HTML'/>
        <Skills skill='Tailwind CSS'/>
        <Skills skill='JavaScript'/>
        <Skills skill='React'/>
        <Skills skill='NodeJS'/>
        <Skills skill='ExpressJS'/>
        <Skills skill='MongoDB'/>
        <Skills skill='MySQL'/>
        <Skills skill='PostgreSQL'/>
        <Skills skill='Postman'/>
        <Skills skill='Vercel'/>
        <Skills skill='Java'/>
        <Skills skill='Python'/>
        <Skills skill='Python Django'/>
        <Skills skill='Prisma ORM'/>
        <Skills skill='PHP Laravel'/>
        <Skills skill='Github'/>
        <Skills skill='Figma'/>

        
      </div>

      <div className='ResumePage'>
        <Document 
          file={pdf} 
          className="resumeview"
          onLoadError={(error) => setError(error)}
        >
          {!error ? (
            <Page 
              pageNumber={1} 
              scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} 
            />
          ) : (
            <p>Download</p>
          )}
        </Document>

        <a href={pdf} target='_blank' download="Charan's Resume">
          <button className='downloadCV' type='button'>
            <h3><BsDownload />&nbsp; Download CV</h3>
          </button>
        </a>
      </div>
    </>
  );
};

export default About;
