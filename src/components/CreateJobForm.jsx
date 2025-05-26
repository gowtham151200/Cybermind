import React from 'react';
import './CreateJobForm.css';

const CreateJobModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal-title">Create Job Opening</h2>
        <form className="form">
          <div className="form-row">
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" placeholder="Full Stack Developer" />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Amazon, Microsoft, Swiggy" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Location</label>
             <select>
  <option value="">Choose Preferred Location</option>
  <option value="chennai">Chennai</option>
  <option value="bangalore">Bangalore</option>
  <option value="Remote">Remote</option>
</select>

            </div>
            <div className="form-group">
              <label>Job Type</label>
             <select>
  <option value="fulltime">Full Time</option>
  <option value="parttime">Part Time</option>
  <option value="contract">Contract</option>
</select>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label> Salary</label>
              <input type="number" placeholder="₹0" />
            </div>
           
            <div className="form-group">
              <label>Application Deadline</label>
              <input type="date" />
            </div>
          </div>

          <div className="form-group full">
            <label>Job Description</label>
            <textarea placeholder="Please share a description to let the candidate know more about the job role" rows="4"></textarea>
          </div>

          <div className="form-buttons">
            <button type="button" className="save-btn">Save Draft</button>
            <button type="submit" className="publish-btn">Publish &raquo;</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJobModal;