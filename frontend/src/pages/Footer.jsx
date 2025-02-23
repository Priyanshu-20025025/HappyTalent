import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center">
      <div className="container mx-auto px-4">
        <nav>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-2">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-2">Terms and Conditions</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-2">Refund Policy</a>
        </nav>
        <p className="text-gray-500 text-sm mt-2">© 2025 Happy Talent Foundation. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;