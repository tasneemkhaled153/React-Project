import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold uppercase mb-4">Location</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          
          {/* Around the Web Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold uppercase mb-4">Around the Web</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-gray-800 transition-colors">
                <span className="text-lg">🌐</span>
              </a>
            </div>
          </div>
          
          {/* About Freelancer Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold uppercase mb-4">About Freelancer</h3>
            <p>Freelance is a free to use, licensed Bootstrap</p>
            <p>theme created by Route</p>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="bg-gray-700 py-6">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p>Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 