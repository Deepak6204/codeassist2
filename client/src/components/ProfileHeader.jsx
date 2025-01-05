import React from 'react';
import profile from '../images/prof.jpg'
import { useRef, useState } from 'react'



const ProfileHeader = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    
    const handleImageClick = () => {
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(e.target.files[0]);
    }

    return (
        <div className="profile-header">
            <div className="profile-photo-edit" onClick={handleImageClick}>
              {image? <img src={URL.createObjectURL(image) } alt="" className='img-display-after-edit'/> : 
              <img src={profile} alt="" className='img-display-before-edit' />}
              <input 
                type="file" 
                ref={inputRef}
                onChange={handleImageChange}
                style={{display: "none"}}
              />
            </div>
            <div className="profile-details">
                <h2>Sumit Kumar</h2>
                <p>LeetCode ID: Sumit_1911</p>
            </div>
        </div>
    );
};

export default ProfileHeader;