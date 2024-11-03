// NoPage.jsx
import React from 'react';

import { Link } from 'react-router-dom';
import yourImage from '../assets/404.jpg'; // Import your image

const NoPage = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row align-items-center justify-content-center">
                {/* Left column for the image */}
                <div className="col-md-6 mb-3 text-center">
                    <img
                        src={yourImage}
                        alt="Error illustration"
                        className="img-fluid" // Bootstrap class for responsive image
                    />
                </div>
                {/* Right column for the text */}
                <div className="col-md-6  mb-3">
                    <h1 className="display-1 fw-bold ">Oops!</h1>
                    <p className="text-muted">
                        It seems that you have encountered an error. Please check the URL or return to the home page.
                    </p>
                    <Link to="/" className="btn btn-success">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NoPage;
