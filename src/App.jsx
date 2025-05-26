import React, { useState } from "react";
// This is a test change to check Git

import JobFilters from "./components/JobFilters";
import Navbar from "./components/Navbar";
import JobCard from "./components/JobCard";
import CreateJobForm from "./components/CreateJobForm";
import "./App.css";
import amlogo from "../public/company-logos/amazon.png";
import telogo from "../public/company-logos/tesla.png";
import swlogo from "../public/company-logos/swiggy.png";


  function App() {
  const [showForm, setShowForm] = useState(false);

  const jobs = [
    {
      title: "Full Stack Developer",
      logo: amlogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      title: "Node Js Developer",
      logo: telogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      title: "UX/UI Designer",
      logo:swlogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
     {
      title: "Full Stack Developer",
      logo: amlogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      title: "Node Js Developer",
      logo: telogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
     {
      title: "UX/UI Designer",
      logo:swlogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
    {
      title: "Full Stack Developer",
      logo: amlogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
     {
      title: "Node Js Developer",
      logo: telogo,
      experience: "1–3 yr Exp",
      type: "Onsite",
      salary: "12 LPA",
    },
  ];

  return (
    <div>
      {/* Navbar with create job button */}
      <Navbar onCreateJobClick={() => setShowForm(true)} />

      {/* Job filters UI */}
      <JobFilters />

      {/* Show create job form modal */}
      {showForm && (
        <div className="modal-overlay">
          <CreateJobForm onClose={() => setShowForm(false)} />
        </div>
      )}

      {/* Job listing cards */}
      <div className="job-list-container">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default App;
