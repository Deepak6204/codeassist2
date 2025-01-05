import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    useEffect(() => {
        document.body.style.height = '50vh';
    }, []);

    return (
        <div id="login-page">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="container content">
                <form action="/login" method="post">
                    <p className="sign-in">Login</p> 
                    <input type="text" name="user_id" placeholder="Name" required />
                    <br />
                    <input type="password" name="pass" placeholder="Password" required />
                    <br />
                    <button type="submit" className="login">LOGIN</button>
                    <div className="login-option">
                        <p>Don't have an Account? <Link to="/signup"><span>Sign Up!</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
