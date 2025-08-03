import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-teal-500 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8 text-white">
        {/* Title */}
        <h1 className="text-4xl font-bold uppercase text-center mb-6">About Component</h1>
        
        {/* Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-0.5 bg-white"></div>
          <div className="mx-4 text-white">★</div>
          <div className="w-16 h-0.5 bg-white"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 