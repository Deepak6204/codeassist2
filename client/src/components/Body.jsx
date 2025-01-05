import React from 'react';
import HoverText from '../components/hoverEffect/HoverEffect';
import assistImage from '../images/assist.png';
import assistImage1 from '../images/assist1.png';
import assistImage2 from '../images/assist2.png';
import laptop from '../images/mac-laptop-png-13.png'
import { useNavigate } from 'react-router-dom';


const Body = () => {
    const navigate =  useNavigate();

    const handleClick = () => {
        const isLoggedIn = localStorage.getItem('firebaseId');
        if (isLoggedIn) {
            navigate('/event');
        } else {
            navigate('/login_temp');
        }
    };
    return (
        <>
            <body>
                <div className="body-section">
                    <div className="headline">
                        <HoverText/>
                        <button className="button-body" onClick={handleClick}>Get Started</button>
                    </div>
                    <div className="info">
                        <img src={laptop} alt="laptopPng"  />
                        {/* <div className="video-container">
                            <video src={demoVideo} controls autoPlay muted className="video" />
                        </div> */}
                    </div>
                </div>

                <div className="img">
                <img src="https://files.codingninjas.com/why-us2-33889.svg" alt="About us" />
                </div>
                <div className="about">
                    {/* Uncomment and add the src for the video iframe if needed */}
                    {/* <div className="video">
                        <iframe width="560" height="315" src="" title="Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div> */}
                    <div className="detail">
                        <div className="box">
                            <img src={assistImage} alt="Coding Assistance" />
                            <h1>Coding Assistance 24/7</h1>
                        </div>
                        <div className="box">
                            <img src={assistImage1} alt="Academic Support" />
                            <h1>Academic Support</h1>
                        </div>
                        <div className="box">
                            <img src={assistImage2} alt="Quizzes and Contest" />
                            <h1>Quizzes and Contest</h1>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}

export default Body;
