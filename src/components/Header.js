import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id="home" className="header">
            <div className="overlay"></div>
            <div className="header-content container">
                <h1 className="header-title">
                    <span className="up">Welcome!</span>
                    <span className="down">I am Jacob Malmstadt</span>
                </h1>
                <p className="header-subtitle">Full Stack Software Developer</p>
                <Link to='https://github.com/theMalmstadt' target="_blank">
                    <button className="btn btn-primary">Visit My Works <i className="ti-github"></i></button>
                </Link>

            </div>
        </header>
    )
}

export default Header