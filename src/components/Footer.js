import React from "react";
import { Link } from "react-router-dom";
import '../css/vendors/themify-icons/css/themify-icons.css'

const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="social-links text-center m-auto ml-sm-auto">
                    <Link to="https://github.com/theMalmstadt" target="_blank">
                        <i className="ti-github"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/jacob-malmstadt/" target="_blank">
                        <i className="ti-linkedin"></i>
                    </Link>
                </div>
            </footer>
        </div>
    )
}

export default Footer