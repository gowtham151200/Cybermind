import React, { useState } from "react";
import "./JobFilters.css";

const JobFilters = () => {
  const [salaryRange, setSalaryRange] = useState([30000, 100000]);

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    setSalaryRange([value, Math.max(value, salaryRange[1])]);
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    setSalaryRange([Math.min(value, salaryRange[0]), value]);
  };
 
  return (
    <div className="job-search-bar">
      <input
        type="text"
        placeholder="Search by job title, role"
        className="search-input"
      />

      <select className="dropdown">
        <option>Preferred Location</option>
        <option>Remote</option>
        
        <option>Chennai</option>
        <option>Bangalore</option>
      </select>

      <select className="dropdown">
        <option>Job Type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Internship</option>
        <option>Contract</option>
      </select>

      <div className="salary-filter">
        <label>Salary Per Month</label>
        <div className="slider-wrapper">
          <input
            type="range"
            min="10000"
            max="100000"
            step="5000"
            value={salaryRange[0]}
            onChange={handleMinChange}
          />
           
        </div>
        <div className="salary-range">
          ₹{salaryRange[0] / 1000}k - ₹{salaryRange[1] / 1000}k
        </div>
      </div>
    </div>
 );
};

export default JobFilters;