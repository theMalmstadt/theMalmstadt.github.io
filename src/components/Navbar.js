import React from "react";
import '../js/portfolio.js'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    return (
        <nav className="custom-navbar" data-spy="affix" data-offset-top="20">
            <div className="container">
                <button className="logo" onClick={scrollToTop}>Jacob</button>
                <ul className="nav">
                    <li className="item">
                        <Link
                            activeClass="deactive"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                            href="#home"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                            href="#about"
                        >
                            About
                        </Link>
                    </li>
                    <li className="item">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                            href="#portfolio"
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="item">
                        <Link
                            activeClass="active"
                            to="testmonial"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                            href="#testmonial"
                        >
                            Testmonial
                        </Link>
                    </li>
                    <li className="item">
                        <Link
                            activeClass="active"
                            to="interests"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="link"
                            href="#interests"
                        >
                            Interests
                        </Link>
                    </li>
                    <li className="item ml-md-3" hidden>
                        <a href="components.html" className="btn btn-primary">Components</a>
                    </li>
                </ul>
                <div className="hamburger hamburger--elastic" id="nav-toggle" >
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar