'use client'
import React, { useState } from 'react';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submittedData, setSubmittedData] = useState([]);
  const [showSubmittedData, setShowSubmittedData] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: '', email: '' });
    closeModal();
    setShowSubmittedData(true);
  };

  const handleGoHome = () => {
    setShowSubmittedData(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!showSubmittedData ? (
        <div className="flex flex-col items-center">
          <button
            onClick={openModal}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
          >
            Register
          </button>
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">Enter Personal Details</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-2">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border rounded-md p-1"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border rounded-md p-1"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="date">DOB:</label>
                    <input
                      type="date"
                      id="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full border rounded-md p-1"
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="city">City:</label>
                    <input
                      type="city"
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full border rounded-md p-1"
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={handleGoHome}
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
          >
            Home
          </button>
        </div>
      )}
      {showSubmittedData && (
        <div className="mt-8">
          {submittedData.map((data, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-md shadow-md mb-2"
            >
              <p><strong>Name:</strong> {data.name}</p>
              <p><strong>Email:</strong> {data.email}</p>
              <p><strong>DOB:</strong> {data.date}</p>
              <p><strong>City:</strong> {data.city}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;