import React from 'react'
import { Link } from 'react-router-dom'



function About() {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        The iSTORE is a chain of retail stores owned and operated by Apple Inc. The stores sell various Apple products, including Mac personal computers, iPhone smartphones, iPad tablet computers, Apple Watch smartwatches, Apple TV digital media players, software, and both Apple-branded and selected third-party accessories.
The first Apple Stores were originally opened as two locations in May 2001 by then-CEO Steve Jobs, after years of attempting but failing store-within-a-store concepts. Seeing a need for improved retail presentation of the company's products, he began an effort in 1997 to revamp the retail program to get an improved relationship with consumers and hired Ron Johnson in 2000.
                        </p>
                        <Link to="/contact" className="btn btn-outline-primary px-3">Contact Us</Link>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About