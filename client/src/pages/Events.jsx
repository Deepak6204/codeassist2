import React, { useState } from "react";
import "../style/Events.css";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
const images = [
    { src :"/images/LOGO1.PNG" , title : "JOURNEY BEGINS!"},
    { src: "/images/concept.jpg", title: "BUG BOUNTY", desc: "TECHVAGANZA 2024..!"},
    { src: "/images/star.jpg", title: "WELCOME CODERS..!" },
    { src: "/images/aiBanner.jpg", title: "HELLO CODERS..!" },
    { src: "/images/IMG2.avif", title: "NO ERRORS..!" },
];
const Events = () => {
    const navigate = useNavigate();
    const [slides , setSlides] = useState(images);
    const nextSlide = () => {
        setSlides([...slides.slice(1) , slides[0]]);
    };
    const prevSlide = () => {
        setSlides([slides[slides.length - 1], ...slides.slice(0, -1)]);
    }
    const handleClick = () => {
        const isLoggedIn = localStorage.getItem('firebaseId');
        if(isLoggedIn) {
            navigate('/event');
        } else {
            navigate('/login_temp');
        }
    }
    return(
        <div className="mainEventContainer">
        <Navbar/>
        <div className="eventContainer"> 
            <div className="slide">
                {slides.map((item , index) => (
                    <div key={index} className="item" style={{backgroundImage : `url(${item.src})`}}>
                        <div className="content">
                            <div className="name">{item.title}</div>
                            <div className="des">{item.desc}</div>
                            <div className="des">{item.click}</div>
                            <button onClick={handleClick}>See More</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button">
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>

            </div>
        </div>
        </div>
    )
}

export default Events;