import React, { useEffect } from 'react';
import "../style/roadmap.css"
import aiImg from "../images/ai.jpg";
import webDev from "../images/webdev.jpeg";
import dataImg from "../images/dataAnanlyst.jpeg";
import cyberImg from "../images/cybersecurity.webp"
import aiDataImg from "../images/aiData.jpg";
import iosImg from "../images/ios.jpeg";
import grapicImg from "../images/gd.jpg"
import blockchainImg from "../images/blockChain.avif"
import gameImg from "../images/game.png"
import appImg from "../images/app.jpg";
import devopsImg from "../images/devOps.webp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Check from "../images/check.webp";
import { Navigate, useNavigate } from 'react-router-dom';

const Roadmap = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = '#d3d1d1';
        box.style.transform = 'scale(1.05)';
        box.style.boxShadow = '1px 1px 5px #b5b4b4';
        box.style.border = '1px solid white';
      });

      box.addEventListener('mouseleave', () => {
        box.style.backgroundColor = 'white';
        box.style.transform = 'scale(1)';
        box.style.boxShadow = '1px 1px 5px #b5b4b4';
        box.style.border = '1px solid white';
      });
    });

    

    // Cleanup function to remove event listeners
    return () => {
      boxes.forEach(box => {
        box.removeEventListener('mouseenter', null);
        box.removeEventListener('mouseleave', null);
      });
    };
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <div className="bgimage" style={{height: "70vh"}}>
        <img src={Check} alt="#" style={{width:"100%", height: "100%"}}/>
      </div>
      <section className="white-block">
        <div className="container-roadmap ">
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/frontend')}>
              <img src={aiImg} alt="Frontend Development logo-roadmap" />
              <p className="box-name">Frontend Development</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/backend')}>
              <img src={webDev} alt="Backend Development logo-roadmap" />
              <p className="box-name">Backend Development</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/cyberSecurity')}>
              <img src={cyberImg} alt="Cybersecurity logo-roadmap" />
              <p className="box-name">Cybersecurity</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/dataAnalyst')}>
              <img src={dataImg} alt="Data Analyst logo-roadmap" />
              <p className="box-name">Data Analyst</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/aiDataScientist')}>
              <img src={aiDataImg} alt="AI Data Scientist logo-roadmap" />
              <p className="box-name">AI Data Scientist</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/ios')}>
              <img src={iosImg} alt="IOS Development logo-roadmap" />
              <p className="box-name">IOS Development</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/graphics')}>
              <img src={grapicImg} alt="Graphic Design logo-roadmap" />
              <p className="box-name">Graphic Design</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/blockchain')}>
              <img src={blockchainImg} alt="Blockchain logo-roadmap" />
              <p className="box-name">Blockchain</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/gameDevlopment')}>
              <img src={gameImg} alt="Game Development logo-roadmap" />
              <p className="box-name">Game Development</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/appDev')}>
              <img src={appImg} alt="App Development logo-roadmap" />
              <p className="box-name">App Development</p>
            </a>
          </div>
          <div className="box-roadmap">
            <a target="_blank" rel="noopener noreferrer" onClick={() => handleClick('/roadmaps/devOps')}>
              <img src={devopsImg} alt="DevOps logo-roadmap" />
              <p className="box-name">DevOps</p>
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Roadmap;
