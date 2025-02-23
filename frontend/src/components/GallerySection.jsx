import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Optional: if you want pagination
import 'swiper/css/navigation'; // Optional: if you want navigation
import { Pagination, Navigation } from 'swiper/modules'; // Import Swiper modules if needed

import g1 from "../assets/gallarySection/g1.jpg"
import g2 from "../assets/gallarySection/g2.jpg"
import g3 from "../assets/gallarySection/g3.jpg"
import g4 from "../assets/gallarySection/g4.jpg"
import g5 from "../assets/gallarySection/g5.jpg"
import g6 from "../assets/gallarySection/g6.jpg"
import g7 from "../assets/gallarySection/g7.jpg"
import g8 from "../assets/gallarySection/g8.jpg"
import g9 from "../assets/gallarySection/g9.jpg"
import g10 from "../assets/gallarySection/g10.jpg"
import g11 from "../assets/gallarySection/g11.jpg"
import g12 from "../assets/gallarySection/g12.jpg"
import g13 from "../assets/gallarySection/g13.jpg"
import g14 from "../assets/gallarySection/g14.jpg"
import g15 from "../assets/gallarySection/g15.jpg"
import g16 from "../assets/gallarySection/g16.jpg"
import g17 from "../assets/gallarySection/g17.jpg"
import g18 from "../assets/gallarySection/g18.jpg"
import g19 from "../assets/gallarySection/g19.jpg"
import g20 from "../assets/gallarySection/g20.jpg"
import g21 from "../assets/gallarySection/g21.jpg"
import g22 from "../assets/gallarySection/g22.jpg"
import g23 from "../assets/gallarySection/g23.jpg"
const GallerySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const galleryImages = [
    {
      imageUrl: g18,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g19,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g17,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g20,
      altText: "Children participating in an activity",
    },
    {
      imageUrl: g21,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g22,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g23,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g17,
      altText: "Children participating in an activity",
    },
    {
      imageUrl: g1,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g2,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g3,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g4,
      altText: "Children participating in an activity",
    },
    {
      imageUrl: g5,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g6,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g7,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g8,
      altText: "Children participating in an activity",
    },
    {
      imageUrl: g9,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g10,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g11,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g12,
      altText: "Children participating in an activity",
    },
    {
      imageUrl: g13,
      altText: "Children learning with volunteers",
    },
    {
      imageUrl: g14,
      altText: "Happy children in an educational program",
    },
    {
      imageUrl: g15,
      altText: "Volunteers assisting children with studies",
    },
    {
      imageUrl: g16,
      altText: "Children participating in an activity",
    },
    // Add more image objects here as needed
  ];

  return (
    <section id="gallery" className={`py-20 bg-orange-50 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`} ref={ref}>
      <div className="container mx-auto px-6 md:px-4">
        <h2 className="text-3xl font-bold text-orange-900 mb-12 text-center">Our Impact in Pictures</h2>

        {/* Swiper for mobile devices (hidden on medium and larger screens) */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={'auto'} // Display as many slides as can fit
            centeredSlides={true} // Center the active slide
            loop={true} // Enable loop for continuous scrolling
            pagination={{
              clickable: true,
            }}
            navigation={true} // Set to true if you want navigation arrows
            modules={[Pagination, Navigation]} // Add modules you want to use
            className="mySwiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="pb-[10%] overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={image.imageUrl}
                    alt={image.altText}
                    className="w-full h-72 object-cover rounded-xl" // Increased image height and rounded corners
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid layout for medium and larger screens (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={image.imageUrl}
                alt={image.altText}
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-300 rounded-xl" // Increased image height and rounded corners
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;