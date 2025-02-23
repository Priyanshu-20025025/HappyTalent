import React from 'react';

const JoinUsSection = () => {
  return (
    <section
      id="join"
      className="py-20 text-center"
      data-aos="fade-in" // Suggested animation: zoom-out to draw attention
    >
      <h2 className="text-2xl font-bold text-orange-900 mb-10">Join Us NOW!</h2>
      <a
        href="#"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full transition-colors duration-200 shadow-md hover:shadow-lg font-medium text-lg"
      >
        Login to create your profile
      </a>
    </section>
  );
};

export default JoinUsSection;