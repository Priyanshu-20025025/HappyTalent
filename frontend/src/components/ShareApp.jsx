import React from 'react';

const ShareAppSection = () => {
  return (
    <section
      id="share"
      className="py-20 bg-orange-100"
      data-aos="flip-left" // Suggested animation: flip-left for a playful effect
    >
      <div className="container mx-auto px-6 md:px-4 text-center">
        <h2 className="text-2xl font-bold text-orange-900 mb-10">Share app with friends</h2>
        <p className="text-gray-700 mb-8 text-lg">Enjoying the application?</p>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white py-2.5 px-5 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md font-medium text-lg"
        >
          Share with your friends
        </button>
      </div>
    </section>
  );
};

export default ShareAppSection;