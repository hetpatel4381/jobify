// HomePage.jsx
import React, { useState } from "react";
import FilterLayout from "../components/FilterLayout";
import JobCard from "../components/JobCard";

function HomePage() {
  const [filters, setFilters] = useState({
    minExp: "5",
    companyName: "Google",
    location: "Bangalore",
    isRemote: false,
    techStack: "Python",
    role: "Data Science",
    minBasePay: "$120k",
  });

  // Dummy data for jobs
  const jobs = [
    {
      jobTitle: "React Developer",
      companyName: "ABC Inc.",
      location: "New York",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      experience: "2-5 years",
    },
    {
      jobTitle: "Node.js Developer",
      companyName: "XYZ Ltd.",
      location: "San Francisco",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      experience: "3-7 years",
    },
    // Add more dummy job data as needed
  ];

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters to jobs
  const filteredJobs = jobs.filter((job) => {
    const titleMatch = job.jobTitle && job.jobTitle.includes(filters.jobTitle);
    const companyMatch =
      job.companyName && job.companyName.includes(filters.companyName);
    const locationMatch =
      job.location && job.location.includes(filters.location);
    const remoteMatch = filters.isRemote ? true : !job.isRemote;
    const techStackMatch =
      job.techStack && job.techStack.includes(filters.techStack);
    const roleMatch = job.role && job.role.includes(filters.role);
    const minBasePayMatch =
      job.minBasePay &&
      (parseInt(job.minBasePay) >= parseInt(filters.minBasePay) ||
        !filters.minBasePay);

    return (
      titleMatch &&
      companyMatch &&
      locationMatch &&
      remoteMatch &&
      techStackMatch &&
      roleMatch &&
      minBasePayMatch
    );
  });

  return (
    <div className="container mx-auto p-6">
      <FilterLayout filters={filters} onChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
