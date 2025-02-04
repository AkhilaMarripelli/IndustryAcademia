import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DonationForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        Description: '',
        RollNumber: '',
    });

    const [formErrors, setFormErrors] = useState({
        title: '',
        Description: '',
        RollNumber: '',
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
                await axios.post('http://localhost:5000/api/donate', formData);
                // Navigate to confirmation page with amount as state
                navigate('/confirmation', { state: { title: formData.title } });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Project Submission Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Project-Title</label>
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
                    <label className="form-label">Roll Number</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.RollNumber && 'is-invalid'}`}
                        placeholder="Enter Roll Number"
                        name="RollNumber"
                        value={formData.RollNumber}
                        onChange={handleChange}
                    />
                    {formErrors.RollNumber && <div className="invalid-feedback">{formErrors.RollNumber}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                    UPLOAD
                </button>
            </form>
        </div>
    );
};

export default DonationForm;
