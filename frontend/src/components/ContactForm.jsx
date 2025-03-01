import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { API } from "../helper";

const ContactForm = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name) newErrors.name = "Name is required!";
    else if (name.length < 3) newErrors.name = "Name must be at least 3 characters.";

    if (!email) newErrors.email = "Email is required!";
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = "Invalid email format!";

    if (!phone) newErrors.phone = "Phone number is required!";
    else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone must be 10 digits.";

    // if (!message) newErrors.message = "Message is required!";
    // else if (message.length < 10) newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setSubmissionStatus("pending");

    try {
      const response = await fetch(API.contact.url, {
        method: API.contact.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
          message: messageRef.current.value,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        messageRef.current.value = "";
        setErrors({});
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`p-20 bg-gray-100 transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}
      ref={ref}
    >
      <div className="container mx-auto px-6 md:px-4">
        <h2 className="text-3xl font-bold text-orange-900 mb-12 text-center">Contact Us</h2>

        <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-16 items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-6">We'd love to hear from you! Use the form below to reach out.</p>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  ref={nameRef}
                  className="p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  ref={emailRef}
                  className="p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  ref={phoneRef}
                  className="p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  ref={messageRef}
                  rows={4}
                  className="p-2 border rounded w-full focus:ring-orange-500 focus:border-orange-500"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="p-2 px-4 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
                  disabled={submissionStatus === "pending"}
                >
                  {submissionStatus === "pending" ? "Sending..." : "Send Message"}
                </button>
              </div>

              {submissionStatus === "success" && <p className="text-green-500">Message sent successfully!</p>}
              {submissionStatus === "error" && <p className="text-red-500">Something went wrong. Try again!</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
