import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './HomePage.css';
import logo from '../../assets/grocery_analytica_logo.svg';
import image from '../../assets/frontpage.png';

function HomePage() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate(); 

    const handleSignUpClick = () => {
        navigate('/signup'); 
    };

    return (
        <div className="homePage">
            <header className="header">
                <img src={logo} alt="Grocery Analytica Logo" className="logo" />
                <button className="loginButton">
                    <span className="loginRect"></span> {/* New rectangle span */}
                    Log In
                </button>
            </header>

            {/* Content section with Title, Sign Up, and Image */}
            <div className="contentSection">
                <div className="titleSection">
                    <h1 className="appName">{"Grocery\nAnalytica"}</h1>
                    {/* Attach the click handler to the button */}
                    <button className="signUpButton" onClick={handleSignUpClick}>Sign Up</button>
                </div>
                <img src={image} alt="Front Page" className="mainImage" />
            </div>
        </div>
    );
}

export default HomePage;