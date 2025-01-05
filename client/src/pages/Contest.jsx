import React, { useState } from 'react';
import "../style/contest.css";
import trophyImg from "../images/trophy.png"
import bannerImg from '../images/banner.png';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Contest = () => {
  const [activeButton, setActiveButton] = useState('b1');
  const [boxShadow, setBoxShadow] = useState('none');
  const [scaleClass, setScaleClass] = useState('');

  const handleMouseOver = () => {
    setBoxShadow('5px 5px 5px #333');
    setScaleClass('box-scale');
  };

  const handleMouseOut = () => {
    setBoxShadow('none');
    setScaleClass('');
  };

  const handleButtonClick = (buttonId) => {
    if (activeButton === buttonId) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonId);
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      {/* First image */}
      <a href="index.html" target="_blank" rel="noopener noreferrer">
        <div className="gray-background"></div>
      </a>

      {/* Weekly box */}
      <div 
        className={`rect-box ${scaleClass}`} 
        id="box" 
        style={{ boxShadow }} 
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
      >
        <a href="register.html" className="box-link" target="_blank" rel="noopener noreferrer">
          <div className="box-bg"></div>
          <div className="boxBox">
            <span className="text">Weekly Contest 000</span>
            <p className="description">Date and time will be updated soon</p>
          </div>
        </a>
      </div>

      {/* Contest boxes */}
      <section className="white-block">
        <div className="container">
          {/* Left box */}
          <div className="box" id="box1">
            <ul className="left-buttons">
              <li>
                <button 
                  id="b1" 
                  className={activeButton === 'b1' ? 'active' : ''} 
                  onClick={() => handleButtonClick('b1')}
                >
                  Past Contest
                </button>
              </li>
              <li>
                <button 
                  id="b2" 
                  className={activeButton === 'b2' ? 'active' : ''} 
                  onClick={() => handleButtonClick('b2')}
                >
                  My Contest
                </button>
              </li>
            </ul>
            {/* content */}
            <div className="point1">
            <img src={bannerImg} alt="Banner" />
              <div className="t1">
                <p className="text1">Weekly Contest 000</p>
                <p className="text2">Will be updated soon</p>
              </div>
            </div>
          </div>
          {/* Right box */}
          <div className="box" id="box2">
            <ul>
              <li>
                <button 
                  id="b3" 
                  className={activeButton === 'b3' ? 'active' : ''} 
                  onClick={() => handleButtonClick('b3')}
                >
                  Rankings
                </button>
              </li>
            </ul>
            {/* content */}
            <div className="point1">
              <p className="rank">1.</p>
              <img src={trophyImg} alt="Trophy" />
              <div className="t1">
                <p className="text1" style={{ color: 'gold' }}>Winner</p>
                <div style={{ display: 'flex' }}>
                  <p className="text2">Rating:000</p>
                  <p className="text2">Attended:000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Contest;
