import { React, useState, useEffect } from "react";
import { Link, animateScroll as scrolling } from "react-scroll";

const Navbar = () => {
    const scrollToTop = () => {
        scrolling.scrollToTop();
    };

    const [isActiveClick, setActiveClick] = useState(false)

    const handleClick = () => {
        setActiveClick(!isActiveClick)
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <nav className={scroll ? "custom-navbar affix" : "custom-navbar affix-top"}>
            <div className="container">
                <button className="logo" onClick={scrollToTop}>Jacob</button>
                <ul className={isActiveClick ? "nav show" : "nav"} onClick={handleClick}>
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
                <div className={isActiveClick ? "hamburger hamburger--elastic is-active" : "hamburger hamburger--elastic"} id="nav-toggle" onClick={handleClick} >
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar