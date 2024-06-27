import React, { useEffect, useState } from 'react';

const JobPostings = () => {
    const [jobPostings, setJobPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobPostings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/job-postings'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setJobPostings(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobPostings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Job Postings</h1>
            <div className="row">
                {jobPostings.map((job) => (
                    <div className="col-md-4 mb-4" key={job.id}>
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{job.title}</h5>
                                <p className="card-text">{job.description}</p>
                                <p className="card-text"><strong>Role:</strong> {job.role}</p>
                                <p className="card-text"><strong>End Date:</strong> {job.endDate}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobPostings;
