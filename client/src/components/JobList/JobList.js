// src/components/JobList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">Job Listings</h1>
      <div className="row">
        {jobs.map((job) => (
          <div className="col-md-4 mb-4" key={job._id}>
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <p className="card-text"><strong>Role:</strong> {job.role}</p>
                <p className="card-text"><strong>End Date:</strong> {new Date(job.endDate).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
