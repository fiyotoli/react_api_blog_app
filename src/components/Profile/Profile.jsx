import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import profileImage from '../../assets/profile.jpg'; // Adjust the path as necessary

const Profile = () => {
  return (
    <div className="p-3">
      {/* Header with border */}
      <div className="text-center border-bottom border-top pb-2 my-3">
        <h4 className="mb-0">About <span className='text-success'>Me</span></h4>
      </div>

      {/* Profile Image */}
      <div className="text-center my-3">
        <img 
          src={profileImage} // Imported profile image
          alt="Profile"
          className=""
          style={{ width: '300px', height: 'auto', objectFit: 'cover' }} // Rectangle form
        />
      </div>

      {/* Profile Description */}
      <div className="text-center mb-3">
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
      </div>

      {/* Category Subtitle with border */}
      <h5 className="border-bottom border-top py-2 text-center">Categories</h5>
      
      {/* Categories in two columns */}
      <div className="row text-center">
        <div className="col-6">
          <p>Category 1</p>
          <p>Category 2</p>
        </div>
        <div className="col-6">
          <p>Category 3</p>
          <p>Category 4</p>
        </div>
      </div>

      {/* Follow Us Title with border */}
      <h5 className="border-bottom border-top py-2 text-center mt-4">Follow Us</h5>
      
      {/* Social Media Icons in the same row */}
      <div className="text-center mt-3 d-flex justify-content-center">
        <a href="#" className="me-3">
          <div className="bg-success rounded-circle shadow-sm p-2">
            <FaFacebook className="text-white" size={24} />
          </div>
        </a>
        <a href="#" className="me-3">
          <div className="bg-success rounded-circle shadow-sm p-2">
            <FaTwitter className="text-white" size={24} />
          </div>
        </a>
        <a href="#" className="me-3">
          <div className="bg-success rounded-circle shadow-sm p-2">
            <FaInstagram className="text-white" size={24} />
          </div>
        </a>
        <a href="#">
          <div className="bg-success rounded-circle shadow-sm p-2">
            <FaLinkedin className="text-white" size={24} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Profile;
