import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUsDetailSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">About Happy Talent Foundation</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Happy Talent Foundation is a beacon of hope and transformation, inspired by the divine teachings of Lord ShriRam. 
            Our mission is to create a harmonious society where cultural values, spiritual growth, and community service thrive hand-in-hand.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <p className="text-lg leading-relaxed text-center">
            With unwavering dedication, we strive to preserve our rich heritage, uplift the underprivileged, and inspire individuals to lead lives filled with compassion, purpose, and integrity. 
            Through our collective efforts, we aim to bring a "Navyug" (a new era) where every individual contributes to a more vibrant, united, and prosperous society.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-12" data-aos="fade-up">Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Faith and Spirituality</h3>
              <p className="text-gray-600 text-center">Anchored in the values of Lord ShriRam, we promote spiritual growth and moral integrity.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Compassion</h3>
              <p className="text-gray-600 text-center">We believe in serving humanity with love, empathy, and a genuine commitment to making lives better.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Integrity</h3>
              <p className="text-gray-600 text-center">Trust and transparency guide every decision and action we take.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Empowerment</h3>
              <p className="text-gray-600 text-center">Enabling individuals and communities to realize their potential and lead dignified lives.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="500">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Preservation of Heritage</h3>
              <p className="text-gray-600 text-center">Nurturing and celebrating the timeless traditions and culture of India.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-12" data-aos="fade-up">Our Work</h2>
        <p className="text-center text-lg mb-12" data-aos="fade-up">Happy Talent Foundation works across various dimensions to build a stronger and more connected society:</p>
        
        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right">
            <div className="md:flex">
              <div className="bg-orange-500 text-white md:w-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Education and Awareness</h3>
              </div>
              <div className="p-6 md:w-2/3">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Organizing spiritual and cultural workshops for all age groups.</li>
                  <li>Conducting seminars on life lessons inspired by the Ramayana and other scriptures.</li>
                  <li>Supporting underprivileged children by providing access to education and learning materials.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-left">
            <div className="md:flex">
              <div className="md:order-2 bg-orange-500 text-white md:w-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Social Welfare Initiatives</h3>
              </div>
              <div className="p-6 md:w-2/3 md:order-1">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Distributing food, clothes, and essential items to those in need.</li>
                  <li>Arranging health camps and medical support for underprivileged communities.</li>
                  <li>Extending disaster relief during emergencies and natural calamities.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right">
            <div className="md:flex">
              <div className="bg-orange-500 text-white md:w-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Cultural and Spiritual Events</h3>
              </div>
              <div className="p-6 md:w-2/3">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Celebrating festivals and hosting religious gatherings to keep traditions alive.</li>
                  <li>Organizing kirtans, bhajans, and yagnas to spread spiritual awareness and devotion.</li>
                  <li>Promoting Indian arts, crafts, and heritage through fairs and exhibitions.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-left">
            <div className="md:flex">
              <div className="md:order-2 bg-orange-500 text-white md:w-1/3 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-2">Youth and Community Empowerment</h3>
              </div>
              <div className="p-6 md:w-2/3 md:order-1">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Inspiring youth to lead by example and engage in social service.</li>
                  <li>Offering vocational training programs to enhance skills and employment opportunities.</li>
                  <li>Building community centers to foster togetherness and collaboration.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-600 text-center mb-12" data-aos="fade-up">Our Impact</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowered Communities</h3>
              <p className="text-gray-600">Improved the lives of countless individuals through our education, health, and welfare programs.</p>
            </div>
            </div>
            </div>
            </section>
{/*             
            <div className="bg-white p-6 rounded-lg shadow-md text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 */}
                  </div>)
}

export default AboutUsDetailSection