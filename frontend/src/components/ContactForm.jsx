import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // State for submission status (null, 'success', 'error')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => { // Make handleSubmit async
    e.preventDefault();
    setSubmissionStatus('pending'); // Set status to pending

    try {
      const response = await fetch('http://localhost:8080/api/contact', { // API endpoint URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        setSubmissionStatus('success'); // Set status to success
        console.log("Form Data Submitted successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        // No need for alert anymore, we'll show status in UI
      } else {
        setSubmissionStatus('error'); // Set status to error
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      setSubmissionStatus('error'); // Set status to error on network error
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 bg-gray-100 transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-4">
        <h2 className="text-3xl font-bold text-orange-900 mb-12 text-center">
          Contact Us
        </h2>
        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-6">
              We would love to hear from you! Whether you have questions about
              our programs, want to volunteer, or have any other inquiries,
              please feel free to reach out to us using the form below.
            </p>
            {/* Contact details... */}
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields (Name, Email, Phone, Message) - same as before */}
              
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow-sm p-2 focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>
              </div>
            
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  disabled={submissionStatus === 'pending'} // Disable button during submission
                >
                  {submissionStatus === 'pending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>

              {submissionStatus === 'success' && (
                <p className="text-green-500">Message sent successfully! We'll be in touch soon.</p>
              )}
              {submissionStatus === 'error' && (
                <p className="text-red-500">Oops! Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;