import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DonationForm = () => {
    const [formData, setFormData] = useState({
        amount: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const [formErrors, setFormErrors] = useState({
        amount: '',
        nameOnCard: '',
        cardNumber: '',
        expirationDate: '',
        cvv: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: '' }); // Clear any previous errors
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let errors = {};

        // Validate amount (must be more than 3 digits)
        if (formData.amount.length < 3) {
            errors = { ...errors, amount: 'Amount must be more than 3 digits' };
        }

        // Validate other fields (basic required validation)
        Object.keys(formData).forEach((key) => {
            if (formData[key].trim() === '') {
                errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
            }
        });
        

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
        } else {
            try {
                // Submit to server
                await axios.post('http://localhost:5000/api/donate', formData);
                // Navigate to confirmation page with amount as state
                navigate('/confirmation', { state: { amount: formData.amount } });
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Donation Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Enter amount</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.amount && 'is-invalid'}`}
                        placeholder="Amount"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                    {formErrors.amount && <div className="invalid-feedback">{formErrors.amount}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Name on Card</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.nameOnCard && 'is-invalid'}`}
                        placeholder="Enter name on card"
                        name="nameOnCard"
                        value={formData.nameOnCard}
                        onChange={handleChange}
                    />
                    {formErrors.nameOnCard && <div className="invalid-feedback">{formErrors.nameOnCard}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Card Number</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.cardNumber && 'is-invalid'}`}
                        placeholder="Enter card number"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                    />
                    {formErrors.cardNumber && <div className="invalid-feedback">{formErrors.cardNumber}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">Expiration Date</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.expirationDate && 'is-invalid'}`}
                        placeholder="MM/YY"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                    />
                    {formErrors.expirationDate && <div className="invalid-feedback">{formErrors.expirationDate}</div>}
                </div>
                <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.cvv && 'is-invalid'}`}
                        placeholder="Enter CVV"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                    />
                    {formErrors.cvv && <div className="invalid-feedback">{formErrors.cvv}</div>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Donate
                </button>
            </form>
            <div className="mt-3">
                <img
                    src="data:image/jpeg;base64,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"
                    alt="Visa"
                    className="me-2"
                    style={{ width: '100px', height: '100px' }}
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/320px-Mastercard-logo.svg.png"
                    alt="MasterCard"
                    className="me-2"
                    style={{ width: '100px', height: '100px' }}
                />
            </div>
        </div>
    );
};

export default DonationForm;
