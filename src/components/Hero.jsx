// Hero.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import heroImage from '../assets/hero.jpg'; // Import your image

const Hero = () => {
    return (
        <div className="container d-flex my-5 pt-5 align-items-center justify-content-center" >
            <div className="row ">
                {/* Left Section: Text */}
                <div className="col-md-6 mb-3 d-flex flex-column align-items-start justify-content-center ">
                    <h1 className="display-4 fw-bold"> <span className='text-success'>Delicious Recipes</span> Just For You</h1>
                    <p className="lead">
                        Discover a variety of recipes to tantalize your taste buds. From quick snacks to gourmet meals, we have it all.
                    </p>
                    <Link to="/create" className="btn btn-success  fs-5 p-2">
                         Create Blog
                        </Link>                </div>

                {/* Right Section: Image */}
                <div className="col-md-6 mb-3 d-flex align-items-center justify-content-center">
                    <img
                        src={heroImage}
                        alt="Delicious food"
                        className="img-fluid rounded" // Bootstrap class for responsive image and rounded corners
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
