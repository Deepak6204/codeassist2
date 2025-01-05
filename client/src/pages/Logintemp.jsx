import React, { useState, useEffect } from 'react';
import { auth, provider, signInWithPopup, signOut } from '../firebaseConfig.js';
import { useNavigate, useLocation } from 'react-router-dom';
import "../style/login.css";
import Logo from "../images/favicon.png"
import GoogleLogo from "../images/googleLogo.png"
import GithubLogo from "../images/githubLogo.png"
import LinkedlnLogo from "../images/linkedlnLogo.png"

const Login = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const redirectTo = location.state?.from || '/event';

  useEffect(() => {
    // If user is already logged in, redirect to intended page
    const firebaseId = localStorage.getItem('firebaseId');
    if (firebaseId) {
      navigate(redirectTo); // Redirect to the target page
    }
  }, [navigate, redirectTo]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userData = result.user;
      

      // Set user in state
      setUser(userData);
      console.log('User:', userData);

      // Send user data to your backend
      await sendUserDataToBackend(userData);

      localStorage.setItem('firebaseId', userData.uid);
      navigate(redirectTo);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  const sendUserDataToBackend = async (userData) => {
    const { uid, email, displayName } = userData;

    try {
      const response = await fetch('https://server-jt5f.onrender.com/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firebaseId: uid,
          email,
          name: displayName || 'Anonymous',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save user data');
      }

      const data = await response.json();
      localStorage.setItem('firebaseId', uid);
      console.log("hi",localStorage.getItem('firebaseId'));
      console.log('User data stored in database:', data);
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error('Error during sign-out:', error);
      });
  };

  return (
    <div>
      {user ? (
        navigate('/event')
      ) : (
        <div className='login-container'>
          <div className="login-content">
            <div className="login-logo">
              <img src={Logo} alt="#" />
            </div>
            <div className="login-header">
              <p>Welcome to Code Assist</p>
            </div>
            <div className="login-google">
              <button className='google-button' onClick={handleLogin}><img src={GoogleLogo} alt="#" />Continue with Google</button>
            </div>
            <div style={{backgroundColor : "#171717", fontWeight: "bold"}}>OR</div>
            <div className="login-google">
              <button style={{cursor: "not-allowed"}} className='google-button'><img src={GithubLogo} alt="#" />Continue with Github</button>
            </div>
            <div style={{backgroundColor : "#171717", fontWeight: "bold"}}>OR</div>
            <div className="login-google">
              <button style={{cursor: "not-allowed"}} className='google-button' ><img src={LinkedlnLogo} alt="#" />Continue with Linkedln</button>
              <p className="terms">
                By continuing, you agree to our <a href="#" target="">Terms of Service</a> and <a href="#" target="">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
