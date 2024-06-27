import React, { useEffect, useState } from 'react';

const DonationPostings = () => {
    const [donationPostings, setDonationPostings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDonationPostings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/donation-postings'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDonationPostings(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDonationPostings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Project Postings</h1>
            <div className="row">
                {donationPostings.map((project) => (
                    <div className="col-md-4 mb-4" key={project._id}>
                        <div className="card border-0 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-primary">{project.title}</h5>
                                <p className="card-text">{project.Description}</p>
                                <p className="card-text"><strong>Roll Number:</strong> {project.RollNumber}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DonationPostings;
