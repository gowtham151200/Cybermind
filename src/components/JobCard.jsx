import React from "react";
import "./JobCard.css";

const JobCard = ({ title, company, logo, experience, type, salary }) => {
  return (
    <div className="job-card">
      <div className="job-top">
        <img src={logo} alt={company} className="company-logo" />
        <span className="time-badge">24h Ago</span>
      </div>

      <h3 className="job-title">{title}</h3>

      <div className="job-info">
        <span>👤 {experience}</span>
        <span>📍 {type}</span>
        <span>💰 {salary}</span>
      </div>

      <ul className="job-description">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style, and create personalized</li>
      </ul>

      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobCard;
