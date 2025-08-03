import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a server
    alert('Message sent!');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-8 py-16">
        {/* Title */}
        <h1 className="text-4xl font-bold uppercase text-center text-gray-700 mb-6">Contact Section</h1>
        
        {/* Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-0.5 bg-gray-700"></div>
          <div className="mx-4 text-gray-700">★</div>
          <div className="w-16 h-0.5 bg-gray-700"></div>
        </div>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              userName:
            </label>
            <input
              type="text"
              name="userName"
              placeholder="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              userAge:
            </label>
            <input
              type="number"
              name="userAge"
              placeholder="userAge"
              value={formData.userAge}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              userEmail:
            </label>
            <input
              type="email"
              name="userEmail"
              placeholder="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              userPassword:
            </label>
            <input
              type="password"
              name="userPassword"
              placeholder="userPassword"
              value={formData.userPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-gray-300 focus:border-teal-500 focus:outline-none text-gray-700"
              required
            />
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact; 