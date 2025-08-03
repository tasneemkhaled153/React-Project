import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-teal-500 flex items-center justify-center">
      <div className="text-center text-white">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">😊</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl font-bold uppercase mb-4">Start Framework</h1>
        
        {/* Separator */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-0.5 bg-white"></div>
          <div className="mx-4 text-white">★</div>
          <div className="w-16 h-0.5 bg-white"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
};

export default Home; 