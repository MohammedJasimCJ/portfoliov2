import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div className="text-2xl font-bold text-gray-800">
            Mohammed Jasim CJ
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
