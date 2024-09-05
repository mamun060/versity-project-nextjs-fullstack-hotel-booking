import React from 'react';

const ContactPage = () => {
    return (
        <section>
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                    <p className="text-gray-700 mb-4">
                    We'd love to hear from you! Please fill out the form below to get in touch with us.
                    </p>
                    <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="p-2 border border-gray-300 rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="p-2 border border-gray-300 rounded-md"
                        rows="4"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                    </form>
                </div>
                </div>
        </section>
    );
};

export default ContactPage;