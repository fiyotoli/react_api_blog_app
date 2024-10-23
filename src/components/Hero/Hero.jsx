import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'; // Import the custom CSS for the background image
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const Hero = () => {
  const [heroHeight, setHeroHeight] = useState('100vh'); // Default height for large screens

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) { // Bootstrap's 'lg' breakpoint is 992px
        setHeroHeight('50vh'); // Set height for medium and smaller screens
      } else {
        setHeroHeight('100vh'); // Set height for large screens
      }
    };

    handleResize(); // Set initial height
    window.addEventListener('resize', handleResize); // Listen for resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup event listener
    };
  }, []);

  return (
    <section className="hero d-flex flex-column mt-5 pt-5 justify-content-center align-items-center" style={{ height: heroHeight, marginTop: '56px' }}>
      <div className="container text-center">
        {/* Fade in from top */}
        <motion.h1 
          className="display-2 text-white fw-bold" 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to <span className='text-success'>Recipe Blog</span> World
        </motion.h1>

        {/* Fade in from left */}
        <motion.p 
          className="lead col-lg-8 mx-auto" 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          Discover your dream property with us. Explore the best properties for rent and purchase.
        </motion.p>

        {/* Buttons fade in from bottom */}
        <motion.div 
          className="d-flex justify-content-center gap-3" 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/" className="btn btn-success btn-lg">
           Enjoy Recipe
          </Link>
          <Link to="/create" className="btn btn-outline-light btn-lg">
            Create Blog
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
