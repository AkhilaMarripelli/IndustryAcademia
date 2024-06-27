import React from 'react';
import { useLocation } from 'react-router-dom';

const DonationConfirmation = () => {
    const location = useLocation();
    const { title } = location.state || {};

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-success">Submitted!</h1>
            <p className="text-center">You have successfully Uploaded {title}.</p>
        </div>
    );
};

export default DonationConfirmation;
