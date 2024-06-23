import React from 'react';
import './Home.css'; // Ensure this file is imported to use the CSS styles

function Home() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 light-blue-background">
            <div className="text-center">
                <h1 className="text-primary professional-font mb-4">JALDHAARA FOUNDATION</h1>
                <p className="professional-font">
                    Our NGO is dedicated to making the world a better place. We focus on various
                    initiatives that support the underprivileged and work towards sustainable development.
                </p>
            </div>
        </div>
    );
}

export default Home;
