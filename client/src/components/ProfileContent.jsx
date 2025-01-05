import React, { useState } from 'react';

const ProfileContent = () => {
    const [editMode, setEditMode] = useState({
        name: false,
        gender: false,
        location: false,
        birthday: false,
        website: false,
        github: false,
        linkedin: false,
    });

    const [formData, setFormData] = useState({
        name:     "Enter Your Name",
        gender:   "Enter Your Gender",
        location: "Enter Your Place",
        birthday: "",
        website: "Your Blog or Portfolio",
        github: "Your Github URL or Username",
        linkedin: "Your Linkedln URL or Username",
    });

    const handleEditClick = (field) => {
        setEditMode(prevState => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const renderField = (field, label, type = "text") => (
        <div className="basic-info-item">
            <span className="basic-info-label" style={{fontSize: "1.2rem"}}>{label}</span>
            {editMode[field] ? (
                <>
                    {type === "date" ? (
                        <input
                            type="date"
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                            className='date-input'
                        />
                    ) : (
                        <input
                            className='input-edit'
                            type="text"
                            name={field}
                            value={formData[field]}
                            onChange={handleInputChange}
                        />
                    )}
                    <button className="save-button" onClick={() => handleEditClick(field)}>Save</button>
                </>
            ) : (
                <>
                    <span className="basic-info-value" style={{fontSize: "1.2rem"}}>{formData[field]}</span>
                    <button className="edit-button" style={{fontSize: "1.2rem"}} onClick={() => handleEditClick(field)}>Edit</button>
                </>
            )}
        </div>
    );

    return (
        <div className="profile-content">
            <div className="basic-info-container">
                <h3 className="basic-info-title">Basic Info</h3>
                {renderField("name", "Name")}
                {renderField("gender", "Gender")}
                {renderField("location", "Location")}
                {renderField("birthday", "Birthday", "date")}
                {renderField("website", "Website")}
                {renderField("github", "Github")}
                {renderField("linkedin", "Linkedln")}
            </div>
        </div>
    );
};

export default ProfileContent;
