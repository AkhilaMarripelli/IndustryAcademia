import React from 'react';
import { useLocation } from 'react-router-dom';

const DonationConfirmation = () => {
    const location = useLocation();
    const { amount } = location.state || {};

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-success">Thank You for Your Donation!</h1>
            <p className="text-center">You have successfully donated Rs.{amount}.</p>
        </div>
    );
};

export default DonationConfirmation;
