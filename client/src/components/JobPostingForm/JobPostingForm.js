import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobPostingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        Description: '',
        Role: '',
        endDate:''
    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        Description: '',
        Role: '',
        endDate:''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' }); // Clear any previous errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
                // Submit to server
                await axios.post('http://localhost:5000/api/jobpost', formData);
                // Navigate to confirmation page with amount as state
                navigate('/confirmation', { state: { title: formData.title } });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Job Posting Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Job-Title</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.amount && 'is-invalid'}`}
                        placeholder="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    {formErrors.title && <div className="invalid-feedback">{formErrors.title}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.Description && 'is-invalid'}`}
                        placeholder="Description"
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                    />
                    {formErrors.Description && <div className="invalid-feedback">{formErrors.Description}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Role</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.Role && 'is-invalid'}`}
                        placeholder="Enter Role"
                        name="Role"
                        value={formData.Role}
                        onChange={handleChange}
                    />
                    {formErrors.Role && <div className="invalid-feedback">{formErrors.Role}</div>}
                    <label className="form-label">End Date</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.endDate && 'is-invalid'}`}
                        placeholder="Enter End Date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    UPLOAD
                </button>
            </form>
        </div>
    );
};

export default JobPostingForm;
