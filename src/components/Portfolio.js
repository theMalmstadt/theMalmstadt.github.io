import folio1 from '../assets/folio-1.jpg'
import folio2 from '../assets/folio-2.jpg'
import folio3 from '../assets/folio-3.jpg'
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section className="section" id="portfolio">
            <div className="container text-center">
                <p className="section-subtitle">What I Have Done ?</p>
                <h6 className="section-title mb-6">Portfolio</h6>
                <div className="row">
                    <div className="col-md-4">
                        <Link href="#" onClick={event => event.preventDefault()} className="portfolio-card">
                            <img src={folio1} className="portfolio-card-img"
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h5>Web Designing</h5>
                                    <p className="font-weight-normal">Category: Web Templates</p>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link href="#" onClick={event => event.preventDefault()} className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src={folio2}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h5>Web Designing</h5>
                                    <p className="font-weight-normal">Category: Web Templates</p>
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link href="#" onClick={event => event.preventDefault()} className="portfolio-card">
                            <img className="portfolio-card-img img-responsive rounded" src={folio3}
                                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            <span className="portfolio-card-overlay">
                                <span className="portfolio-card-caption">
                                    <h5>Web Designing</h5>
                                    <p className="font-weight-normal">Category: Web Templates</p>
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