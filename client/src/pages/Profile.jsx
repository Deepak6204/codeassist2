import React from 'react'
import { useRef, useState } from 'react'
import profile from '../images/prof.jpg'
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineSchool } from "react-icons/md";
import { TbPencil } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar"
import "../style/profile.css";

 
const Profile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  
  const handleImageClick = () => {
    inputRef.current.click();
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(e.target.files[0]);
  }
  const handleEditProfile = () => {
    navigate('/edit-profile');
  }

  return (
    <>
    <Navbar/>
      <div className="profile-section">
        <div className="profile-wrapper">
          <div className="profile-wrapper-content">
            <div className="profile-photo" onClick={handleImageClick}>
              {image? <img src={URL.createObjectURL(image) } alt="" className='img-display-after'/> : 
              <img src={profile} alt="" className='img-display-before' />}
              <input 
                type="file" 
                ref={inputRef}
                onChange={handleImageChange}
                style={{display: "none"}}
              />
            </div>
            <div className="profile-detail">
              <h3>Name</h3>
              <h4>ID</h4>
            </div>
          </div>
          <div className="profile-edit-btn">
            <button className='button-profile button-profile-btn' onClick={handleEditProfile}>Edit Profile</button>
          </div>
          <div className="profile-wrapper-content2">
            <div className="profile-wrapper-content2-detail" style={{background: "rgb(45 45 45)"}}>
              <p><MdOutlineLocationOn className='profile-logo'/>Location</p>
              <p><MdOutlineSchool className='profile-logo'/>College</p>
              <p><TbPencil className='profile-logo'/>Language</p>
            </div>
          </div>
        </div>
        <div className="profile-body">
          <div className="profile-body-content">
            <div className="profile-body-content-1">
              <h2 className='p-b-c-h1'>Overall Coding Score</h2>
              <p className='p-b-c-p'>40</p>
            </div>
            <div className="profile-body-content-2">
              <h2 className='p-b-c-h1'>Total Problem Solved</h2>
              <p className='p-b-c-p'>10</p>
            </div>
          </div>
        </div>
        <div className="recent-problm">
          <div className="recent-problm-content">
            <div className="r-p-c-h">
              <h1>Recent Problems</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile