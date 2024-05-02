// HomePage.jsx
import React, { useEffect, useState } from "react";
import FilterLayout from "../components/FilterLayout";
import JobCard from "../components/JobCard";

function HomePage() {
  const [filters, setFilters] = useState({
    minExp: "",
    companyName: "",
    location: "",
    isRemote: null,
    techStack: "",
    role: "",
    minBasePay: "",
  });

  // Dummy data for jobs
  const jobs = [
    {
      id: "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
      jobTitle: "Tech Lead",
      companyName: "Some Company",
      location: "Chennai",
      jobDescription:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      experience: "5+ years",
      isRemote: false,
      techStack: "Java",
      role: "Tech Lead",
      minBasePay: 150000,
    },
    {
      id: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
      jobTitle: "Frontend Developer",
      companyName: "Another Company",
      location: "Delhi NCR",
      jobDescription:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      experience: "3-5 years",
      isRemote: false,
      techStack: "React",
      role: "Frontend Developer",
      minBasePay: 100000,
    },
    {
      id: "cfff35ba-053c-11ef-83d3-06301d0a7178-92012",
      jobTitle: "iOS Developer",
      companyName: "Tech Corp",
      location: "Mumbai",
      jobDescription:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      experience: "4-6 years",
      isRemote: true,
      techStack: "iOS",
      role: "iOS Developer",
      minBasePay: 120000,
    },
    {
      id: "cfff35c7-053c-11ef-83d3-06301d0a7178-92014",
      jobTitle: "Backend Developer",
      companyName: "Tech Solutions",
      location: "Bangalore",
      jobDescription:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      experience: "3-7 years",
      isRemote: false,
      techStack: "Node.js",
      role: "Backend Developer",
      minBasePay: 110000,
    },
    {
      id: "cfff35d4-053c-11ef-83d3-06301d0a7178-92016",
      jobTitle: "Android Developer",
      companyName: "Mobile Technologies",
      location: "Remote",
      jobDescription:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      experience: "2-4 years",
      isRemote: true,
      techStack: "Android",
      role: "Android Developer",
      minBasePay: 90000,
    },
  ];

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  // Apply filters to jobs
  const filteredJobs = jobs.filter((job) => {
    const titleMatch =
      job.jobTitle.includes(filters.jobTitle) || filters.jobTitle === "";
    const companyMatch =
      job.companyName.includes(filters.companyName) ||
      filters.companyName === "";
    const locationMatch =
      job.location.includes(filters.location) || filters.location === "";
    const remoteMatch = filters.isRemote ? job.isRemote : true;
    const techStackMatch =
      job.techStack.includes(filters.techStack) || filters.techStack === "";
    const roleMatch = job.role.includes(filters.role) || filters.role === "";
    const minBasePayMatch =
      job.minBasePay >= parseInt(filters.minBasePay) ||
      filters.minBasePay === "";

    return !(
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
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
