import okcomp from '../assets/OKlogo.png'
import jmlogo from '../assets/jm.jpg'
import React from 'react';

import { Link } from 'react-router-dom';


const Portfolio = () => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Have Done ?</p>
                <h2 className="section-title mb-6">Portfolio</h2>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="https://github.com/theMalmstadt/Ok_Computer/tree/master" className="portfolio-card">
                            <img src={okcomp} className="portfolio-card-img"
                                alt="Logo for Ok Computer" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h5>Ok Computer - Bracket Manager</h5>
                                    <p className="font-weight-normal">Category: Full Stack development</p>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="https://github.com/theMalmstadt/theMalmstadt.github.io" className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src={jmlogo}
                                alt="JM logo for portfolio" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h5>Web Designing</h5>
                                    <p className="font-weight-normal">Category: Responsive React App</p>
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
