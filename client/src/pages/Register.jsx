import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    useEffect(() => {
        document.body.style.height = '73vh';
    }, []);

    return (
        <div id="register-page">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <div className="container content">
                <form action="signup" method="post">
                    <p className="sign-in">Register</p>
                    <input type="text" name="user_id" placeholder="Username" required />
                    <br />
                    <input type="text" name="enroll" placeholder="Enrollment" required />
                    <br />
                    <input type="password" name="pass" placeholder="Password" required />
                    <br />
                    <div className="check">
                        <input type="checkbox" className="checkbox" required />
                        <p>I Agree To The Terms & Conditions</p>
                    </div>
                    <button className="login" type="submit">SIGNUP</button>
                </form>
                <div className="login-option">
                    <p>Already have an Account? <Link to="/login"><span>Login Now!</span></Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
