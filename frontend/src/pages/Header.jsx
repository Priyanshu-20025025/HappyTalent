import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-6 md:py-4 relative z-10"> {/* Added 'relative' and 'z-10' to header */}
      <div className="container mx-auto px-6 md:px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Happy Talent Foundation Logo" className="h-20 mr-3" />
          <span className="text-xl font-semibold text-orange-700 hidden sm:block">Happy Talent Foundation</span>
        </a>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#courses" className="hover:text-orange-500 transition-colors duration-200 font-medium">Courses</a>
          <a href="#about" className="hover:text-orange-500 transition-colors duration-200 font-medium">About Us</a>
          <a href="#notices" className="hover:text-orange-500 transition-colors duration-200 font-medium">Notices</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors duration-200 font-medium">Contact Us</a>
          <a href="#join" className="bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-5 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md font-medium">Join Us</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="mobile-menu-button">
            <svg className="w-6 h-6 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'} md:hidden absolute top-full left-0 right-0 bg-orange-100 py-2 z-20`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}> {/* Added absolute positioning and styling */}
        <a href="#courses" className="block px-6 py-3 hover:bg-orange-200 transition-colors duration-200 font-medium">Courses</a>
        <a href="#about" className="block px-6 py-3 hover:bg-orange-200 transition-colors duration-200 font-medium">About Us</a>
        <a href="#notices" className="block px-6 py-3 hover:bg-orange-200 transition-colors duration-200 font-medium">Notices</a>
        <a href="#contact" className="block px-6 py-3 hover:bg-orange-200 transition-colors duration-200 font-medium">Contact Us</a>
        <a href="#join" className="block px-6 py-3 hover:bg-orange-200 transition-colors duration-200 font-medium">Join Us</a>
      </div>
    </header>
  );
};

export default Header;