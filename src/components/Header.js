import React from "react";

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

                <button className="btn btn-primary">Visit My Works</button>
            </div>
        </header>
    )
}

export default Header