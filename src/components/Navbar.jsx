import React from "react";
import "./Navbar.css";
import img1 from "../images/logo.png";
const Navbar = ({ onCreateJobClick }) => {
  return (
     <nav className="navbar">
      <div className="navbar-left">
        
       <img src={img1} alt="Company Logo" className="navbar-logo" />

      </div>
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Find Jobs</a></li>
        <li><a href="#">Find Talents</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
      <div className="navbar-right">
        <button className="create-job-btn" onClick={onCreateJobClick}>
          Create Jobs
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
