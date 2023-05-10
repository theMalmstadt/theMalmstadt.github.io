import Justin from '../assets/justin.jpg'
import React from 'react'
import { Link } from 'react-router-dom';

const Testmonials = () => {
    return (
        <section className="section" id="testmonial">
            <div className="container text-center">
                <p className="section-subtitle">What Past Employers Have To Say About Me ?</p>
                <h6 className="section-title mb-6">Testmonial</h6>


                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="testimonial-card">
                            <div className="testimonial-card-img-holder">
                                <img src={Justin} className="testimonial-card-img"
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, meyawo Landing page" />
                            </div>
                            <div className="testimonial-card-body">
                                <p className="testimonial-card-subtitle">
                                    "Jacob did a great job working with me in the small business environment which calls for
                                    adaptability and perseverance through unexpected twists and turns.
                                    I was very impressed with his ability to understand and enhance our code while
                                    consistently focused on how to improve the product to better fit the customer's needs.
                                    I will look forward to any opportunity I get to work with him in the future!"
                                </p>
                                <h6 className="testimonial-card-title">
                                    <Link to="http://www.syferstrategies.com/" target='_blank'>
                                        Justin O'Sullivan
                                    </Link>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testmonials