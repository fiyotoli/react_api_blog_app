import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaBook } from 'react-icons/fa'; // Icons for the nav links
import { MdOutlineMenuBook } from 'react-icons/md'; // Blog icon

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Collapse the navbar when a nav link or logo is clicked
  const collapseNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // This will collapse the navbar
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light fixed-top ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container">
        {/* Left aligned logo and blog icon */}
        <Link className="navbar-brand fs-2 font-weight-bolder fw-bold" to="/" onClick={collapseNavbar}>
          <MdOutlineMenuBook className="me-2" />
          Rec<span className="text-success">ipe</span>
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center aligned nav links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold d-flex align-items-center ${
                  location.pathname === '/' ? 'border-start border-4 rounded border-success' : ''
                }`}
                to="/"
                style={{ paddingLeft: '1rem' }} // Adjust padding to align with the thicker border
                onClick={collapseNavbar}
              >
                <FaHome className="me-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold d-flex align-items-center ${
                  location.pathname === '/create' ? 'border-start rounded border-4 border-success' : ''
                }`}
                to="/create"
                style={{ paddingLeft: '1rem' }}
                onClick={collapseNavbar}
              >
                <FaPlusCircle className="me-2" /> Create Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-bold d-flex align-items-center ${
                  location.pathname === '/myblogs' ? 'border-start rounded border-4 border-success' : ''
                }`}
                to="/myblogs"
                style={{ paddingLeft: '1rem' }}
                onClick={collapseNavbar}
              >
                <FaBook className="me-2" /> My Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Right aligned login button */}
        <div className="d-flex">
          <Link className="btn btn-success rounded-pill" to="/login" onClick={collapseNavbar}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
