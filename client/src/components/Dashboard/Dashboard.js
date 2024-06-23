import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cardData } from '../Data';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleDonateClick = () => {
        navigate('/donation-form');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4 text-primary">Welcome to MyApp</h1>
            <div className="row">
                {cardData.map((card) => (
                    <div className="col-md-4 mb-4" key={card.id}>
                        <div className="card border-0 shadow-sm">
                            <img 
                                src={card.imageUrl} 
                                className="card-img-top" 
                                alt={`Card ${card.id} Image`} 
                            />
                            <div className="card-body">
                                <h5 className="card-title text-primary">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4 ">
                <button className="btn btn-primary" onClick={handleDonateClick}>
                    Donate ;
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
