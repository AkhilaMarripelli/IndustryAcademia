import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
      navigate('/job-form');
  };
  const handleClick=()=>{
    navigate('/job-postings');
}
  return (
    <div className="container d-flex flex-column align-items-center vh-100">
    {/* Buttons */}
      <h1 className="text-center mx-auto justify-content-center border-2 p-2 border-cyan-300 mt-4 bg-cyan-100 rounded-lg">
      Industry Academia
      </h1>
      <button className="btn btn-outline-primary text-lg mt-3" onClick={handleButtonClick}>
      Post Jobs
      </button>
      <div className="mt-auto mb-4">
        <button className="btn btn-outline-primary text-lg" onClick={handleClick}>View Projects</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
