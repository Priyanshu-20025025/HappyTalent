import React from 'react';
import bgCourse from "../assets/bgCourse.jpg"
import c1 from "../assets/courseSection/c1.jpg"
import c2 from "../assets/courseSection/c2.jpg"
import c3 from "../assets/courseSection/c3.jpg"
const CoursesSection = () => {
  const courses = [
    {
      title: "Memory Training",
      description: "Boost your memory and learning speed with proven techniques.",
      price: "2999",
      imageUrl: c1,
    },
    {
      title: "Study Skills Mastery",
      description: "Learn effective study strategies to excel in your academics.",
      price: "1999",
      imageUrl: c2,
    },
    {
      title: "Mind Mapping Techniques",
      description: "Organize your thoughts and ideas visually for better understanding.",
      price: "1499",
      imageUrl: c3,
    },
  ];

  return (
    <section id="courses" className="py-16  bg-gray-50"> {/* Default Tailwind Gray */}
      <div className="container mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-orange-900 mb-10 text-center">Our Courses</h2> {/* Default Tailwind Orange */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 hover:scale-120 transition-all duration-300 object-contain" />
              <div className="p-6 ">
                <h3 className="text-xl font-semibold text-orange-700 mb-2">{course.title}</h3> {/* Default Tailwind Orange */}
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-700">₹{course.price}</span> {/* Default Tailwind Gray */}
                  <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md">Enroll Now</a> {/* Default Tailwind Orange */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;