import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        {/* Logo/Brand */}
        <NavLink to="/" className="text-xl font-bold uppercase hover:text-teal-400 transition-colors">
          Start Framework
        </NavLink>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors" 
                : "hover:text-teal-400 transition-colors"
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive 
                ? "bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors" 
                : "hover:text-teal-400 transition-colors"
            }
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
                ? "bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors" 
                : "hover:text-teal-400 transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 