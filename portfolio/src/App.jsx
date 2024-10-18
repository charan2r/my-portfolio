import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lottie from "lottie-react";
import nightsky from "./lotties/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Home from './components/Home';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <HashLoader 
            color={'#9067C6'}
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </div>
      ) : (
        <Router>
          <div>
            <Lottie className="bg" animationData={nightsky} loop={true} />  
            <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
            <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

            <Nav/>   

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer/>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
