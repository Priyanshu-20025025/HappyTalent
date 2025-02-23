import React from 'react';

const ContactUsSection = () => {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Contact Us</h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-700">everywhere, Bangalore, Karnataka</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-700">8209730346</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <p className="text-gray-700">happytalentfoundation@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;