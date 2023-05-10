import React from "react";
import Man from '../assets/man.png'
import Resume from '../assets/RESUME_NoPersonalInfo.pdf'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="section pt-0" id="about">
            <div className="container text-center">
                <div className="about">
                    <div className="about-img-holder">
                        <img src={Man} className="about-img"
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                    </div>
                    <div className="about-caption">
                        <p className="section-subtitle">Who Am I ?</p>
                        <h2 className="section-title mb-3">About Me</h2>
                        <p>
                            I enjoy long walk on... just kidding. Hello! Welcome to my portfolio. I am a passionate Oject-oriented programmer.
                            I specialize in Python and studied .NET framework with C# in school.
                            <br />
                            I have couple of personal porjects that I'm working on and a few that I've finished. I hope to continue my Professional work, working with OOP
                            languages and a communicative team. I love working in teams and I have easily adapted to the working from
                            home environment.
                            <br />
                            Thanks for checking out my portfolio! If you wanna get in touch check out my LinkedIn (
                            <Link to="https://www.linkedin.com/in/jacob-malmstadt/" target="_blank">
                                <i className="ti-linkedin social-links text-center m-auto ml-sm-auto"></i>
                            </Link>
                            ) below!
                        </p>
                        <Link to={Resume} download="Jacob_Resume" target="_blank">
                            <button className="btn-rounded btn btn-outline-primary mt-4">Download Resume</button>
                        </Link>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About