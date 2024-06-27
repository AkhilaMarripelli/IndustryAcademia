import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cardData } from '../Data';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleUploadClick = () => {
        navigate('/donation-form');
    };
    const handleClick=()=>{
        navigate('/job-postings');
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Welcome to MyApp</h1>
            <div className="text-center mt-4 ">
                <button className="btn btn-primary" onClick={handleClick}>
                    VIEW JOB POSTINGS
                </button>
            </div>
            <div className="text-center mt-4 ">
                <button className="btn btn-primary" onClick={handleUploadClick}>
                    UPLOAD PROJECT
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
