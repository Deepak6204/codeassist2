// import React from 'react'

// const EditProfile = () => {
//   return (
//     <div className="edit-prof-cont">
//         <div className="e-p-c-c">
//             <h1>Basic Information</h1>
//             {/* <ul>
//                 <input type="text" />
//                 <li>Gender: Male</li>
//                 <li>Location: Bihar</li>
//                 <li>BirthDay: ****</li>
//                 <li>Website: Sumit</li>
//                 <li>Linkedln: Sumit</li>
//                 <li>Github: Sumit</li>
//                 <li>Twitter: Sumit</li>
//             </ul> */}
//             <div className="e-p-c-c-1 e-p-c-c-c">
//               <label htmlFor="Name">Name : </label>
//               <input type="text" placeholder='Enter Your Name'/>
//             </div>
//             <div className="e-p-c-c-2 e-p-c-c-c">
//               <label htmlFor="Name">Gender : </label>
//               <input type="text" placeholder='Enter Your Gender'/>
//             </div>
//             <div className="e-p-c-c-3 e-p-c-c-c">
//               <label htmlFor="Name">Location : </label>
//               <input type="text" placeholder='Select Your Location'/>
//             </div>
//             <div className="e-p-c-c-4 e-p-c-c-c">
//               <label htmlFor="Name">Birthday : </label>
//               <input type="date" />
//             </div>
//             <div className="e-p-c-c-5 e-p-c-c-c">
//               <label htmlFor="Name">Website : </label>
//               <input type="text" placeholder='Your Portfolio'/>
//             </div>
//             <div className="e-p-c-c-6 e-p-c-c-c">
//               <label htmlFor="Name">Linkedln : </label>
//               <input type="text" placeholder='Your Linkedln username or url'/>
//             </div>
//             <div className="e-p-c-c-7 e-p-c-c-c">
//               <label htmlFor="Name">Github : </label>
//               <input type="text" placeholder='Your Github username or url'/>
//             </div>

//             <h1>Experience</h1>
//             <div className="e-p-c-c-8 e-p-c-c-c">
//               <label htmlFor="Name">Education : </label>
//               <input type="text" placeholder='Your College Name'/>
//             </div>
//             <br />
//             <br />
//             <h1>Skills</h1>
//             <div className="e-p-c-c-9 e-p-c-c-c">
//               <label htmlFor="Name">Technical Skills : </label>
//               <input type="text" placeholder='Your Technical Skills'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default EditProfile


import React from 'react';
import ProfileHeader from '../components/ProfileHeader';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileContent from '../components/ProfileContent';
import Footer from '../components/Footer';
// import './Profile.css';

function EditProfile() {
    return (
        <div className="profile-cont">
            <ProfileHeader />
            <div className="Profile">
                <div className="main-content" style={{height: "60vh"}}>
                    <ProfileSidebar />
                    <ProfileContent />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default EditProfile;
