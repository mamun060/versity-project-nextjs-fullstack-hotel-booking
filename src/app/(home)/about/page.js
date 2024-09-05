import React from 'react';

const AboutPage = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">About Us</h1>
                    <p className="text-gray-700 mb-4">
                    Welcome to our platform! We are dedicated to providing the best services for our customers.
                    Our team works hard to ensure quality and excellence in every aspect of what we do.
                    </p>
                    <p className="text-gray-700">
                    Founded in 2023, our mission is to make a positive impact in the world through innovative solutions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;