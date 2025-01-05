import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import checklogo from '../images/checklogo.png';
import { CiMenuFries } from "react-icons/ci";import { signInWithPopup, signOut } from 'firebase/auth'; 
import { auth, provider } from '../firebaseConfig'; 
import { RiLogoutCircleLine } from "react-icons/ri";
import { RiLoginCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [isLogged, setIsLogged] = useState(false); 
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem('firebaseId');
    if (storedUser) {
      setIsLogged(true);
      setUserName(localStorage.getItem('userName') || 'User'); 
    }
  }, []);

  const handleLogin = async () => {
    navigate('/login_temp')
    // try {
    //     const result = await signInWithPopup(auth, provider);
    //     const user = result.user;
        
    //     // Save user data in localStorage for session persistence
    //     localStorage.setItem('firebaseId', user.uid);
    //     localStorage.setItem('userName', user.displayName);
  
    //     // Update navbar state
    //     setUserName(user.displayName);
    //     setIsLogged(true);
    //   } catch (error) {
    //     console.error('Error during login:', error);
    //   }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Clear user data from localStorage and reset state
      localStorage.removeItem('firebaseId');
      localStorage.removeItem('userName');
      setIsLogged(false);
      setUserName('');
      navigate('/'); // Redirect to home page on logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div className="navbar" style={{ paddingTop: "0px", paddingBottom: "0px", background: "transparent" }}>
      <Link to="/" className="logo1">
        <img src={checklogo} alt="checklogo" />
      </Link>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn-nav">
        <i className="fa fa-bars"><CiMenuFries style={{height: "8vh"}} /></i>
      </label>
      <ul style={{ marginBottom: "0" }}>
        <li><Link to="/problems">PROBLEMS</Link></li>
        <li><Link to="/contest">CONTESTS</Link></li>
        <li><Link to="/idea-pitch">IDEA-PITCHING</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/roadmaps">ROADMAPS</Link></li>
        <li><Link to="/notes">NOTES</Link></li>
        <li><Link to="/leaderboard">LEADERBOARD</Link></li>
        <li className="user-dropdown">
          {/* <FaUser style={{ marginBottom: "6px" }} /> */}
          {isLogged ? (
            <div>
              <li className='navbar-login' onClick={handleLogout}>LOGOUT</li>
            </div>
          ) : (
            <li className='navbar-login' onClick={handleLogin}>LOGIN</li>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
