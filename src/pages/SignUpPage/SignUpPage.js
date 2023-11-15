import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css';
import userIcon from '../../assets/user.svg'; 
import lockIcon from '../../assets/lock.svg'; 
import homeIcon from '../../assets/home.svg'; 

function SignUpPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('Form submitted with:', { username, password });
        
    };

    const handleHomeClick = () => {
        navigate('/'); 
    };

    return (
        <div className="signUpPage">
            <img 
                src={homeIcon} 
                alt="Home" 
                className="homeIcon" 
                onClick={handleHomeClick} 
                style={{ cursor: 'pointer' }} 
            />
            <h1 className="title">Create Account</h1>
            <form className="signUpForm" onSubmit={handleSubmit}>
                <div className="inputWrapper">
                    <img src={userIcon} alt="User" className="inputIcon" />
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="inputWrapper">
                    <img src={lockIcon} alt="Lock" className="inputIcon" />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;