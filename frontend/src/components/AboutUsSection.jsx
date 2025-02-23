import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 bg-orange-100"> {/* Default Tailwind Orange */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-orange-900 mb-6">About Us</h2> {/* Default Tailwind Orange */}
          <p className="text-gray-700 leading-relaxed mb-6">
            The Happy Talent Foundation is dedicated to empowering students with essential study skills, fostering confidence, and driving academic excellence. We believe every student has unique talents waiting to be unlocked.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through our holistic approach to education, we not only focus on academic skills but also nurture crucial values and emotional intelligence, shaping well-rounded individuals ready to make a positive impact on society.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bmdvfHx8fHx8MTY5NzY9Mzg5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_content=credit_attribution&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt="Foundation Team or Mission"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;