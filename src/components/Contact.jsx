import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Importing the useTheme context

const Contact = () => {
  const { isDarkMode } = useTheme(); // Get the current theme state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    try {
      // Send form data to the backend API
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } else {
        console.error("Error sending email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div
      id="contact"
      className={`contact-container ${
        isDarkMode
          ? "bg-[#10172a] text-white"
          : "bg-gradient-to-r from-blue-100 to-green-100 text-gray-800"
      }`}
    >
      <section
        className={`py-16 ${
          isDarkMode
            ? "bg-gradient-to-r from-purple-600 to-blue-500"
            : "bg-gradient-to-r from-indigo-100 to-teal-100"
        }`}
      >
        <div className="container mx-auto text-center px-4">
          <h2
            className={`text-5xl font-bold mb-8 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className={`${isDarkMode ? "text-red-400" : "text-red-600"}`}>
              Contact
            </span>{" "}
            Me
          </h2>

          {/* Contact Info Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {/* Phone */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300 hover:scale-105">
              <a href="tel:9429468900" className="cursor-pointer">
                <div
                  className={`${
                    isDarkMode ? "bg-blue-500" : "bg-blue-600"
                  } p-6 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(59,130,246,0.8)]`}
                >
                  <FaPhoneAlt size={32} className="text-white" />
                </div>
              </a>
              <p className="mt-4 font-semibold">Phone:</p>
              <p>+91 94294 68900</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300 hover:scale-105">
              <a
                href="mailto:jay1904prajapati@gmail.com"
                className="cursor-pointer"
              >
                <div
                  className={`${
                    isDarkMode ? "bg-green-500" : "bg-green-600"
                  } p-6 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(34,197,94,0.8)]`}
                >
                  <FaEnvelope size={32} className="text-white" />
                </div>
              </a>
              <p className="mt-4 font-semibold">Email:</p>
              <p>jay1904prajapati@gmail.com</p>
            </div>

            {/* City */}
            <div className="flex flex-col items-center p-6 rounded-lg transition-transform transform duration-300 hover:scale-105">
              <a
                href="https://www.google.com/maps?q=Ahmedabad, Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDarkMode ? "bg-purple-600" : "bg-purple-700"
                } p-6 rounded-full transform transition duration-300 hover:scale-125 hover:shadow-[0_4px_20px_4px_rgba(120,71,239,0.8)]`}
              >
                <FaMapMarkerAlt size={32} className="text-white" />
              </a>
              <p className="mt-4 font-semibold">City:</p>
              <p>Ahmedabad, Gujarat</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-semibold mb-6">
              <span
                className={`${
                  isDarkMode ? "text-yellow-500" : "text-yellow-600"
                }`}
              >
                Get
              </span>{" "}
              in{" "}
              <span
                className={`${isDarkMode ? "text-pink-500" : "text-pink-600"}`}
              >
                Touch
              </span>
            </h3>
            <form
              className="max-w-lg mx-auto space-y-6"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className={`w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } ${
                  formErrors.name ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className={`w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } ${
                  formErrors.email ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className={`w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } ${
                  formErrors.subject ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none`}
              />
              {formErrors.subject && (
                <p className="text-red-500 text-sm">{formErrors.subject}</p>
              )}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className={`w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } ${
                  formErrors.message ? "border-red-500" : "border-gray-700"
                } text-white placeholder-gray-400 focus:outline-none`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}

              <button
                type="submit"
                className={`w-full py-3 rounded-lg text-white shadow-lg transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-green-400"
                    : "bg-gradient-to-r from-yellow-500 to-pink-500"
                } hover:opacity-90 focus:ring-2 focus:ring-blue-400`}
              >
                SEND MESSAGE
              </button>

              {formSubmitted && (
                <div className="mt-8 px-6 py-4 sm:px-8 sm:py-6 md:mt-10 md:px-12 md:py-8 lg:mt-12 lg:px-16 lg:py-10 text-xl font-semibold text-green-400 bg-green-900 bg-opacity-10 rounded-lg shadow-md">
                  <p className="text-center leading-relaxed">
                    Thank you for reaching out! Your message has been received.
                    I’ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
