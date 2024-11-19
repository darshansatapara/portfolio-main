import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import emailjs from "emailjs-com"; // Import EmailJS
import config from "../config"; // Import config.js

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

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validate the form fields
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!formData.subject) errors.subject = "Subject is required.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  // Handle form submission
  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // If no errors, send the email
      emailjs
        .sendForm(
          config.emailJSServiceID, // Using imported config values
          config.emailJSTemplateID,
          e.target,
          config.emailJSUserID
        )
        .then(
          (result) => {
            setFormSubmitted(true); // Show success message
            setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
          },
          (error) => {
            console.log("Error:", error.text);
            setFormSubmitted(false); // Show error message if sending fails
          }
        );
    }
  };

  // Inside the JSX part of your component:
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
            <span
              className={`${isDarkMode ? "text-yellow-400" : "text-blue-600"}`}
            >
              Contact
            </span>{" "}
            Me
          </h2>

          <form
            className="max-w-lg mx-auto space-y-6"
            onSubmit={handleFormSubmit}
          >
            {/* Form Inputs */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className={`w-full p-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-400 ${
                isDarkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-white text-gray-900"
              } ${
                formErrors.name ? "border-red-500" : "border-gray-700"
              } placeholder-gray-400 focus:outline-none`}
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
                isDarkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-white text-gray-900"
              } ${
                formErrors.email ? "border-red-500" : "border-gray-700"
              } placeholder-gray-400 focus:outline-none`}
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
                isDarkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-white text-gray-900"
              } ${
                formErrors.subject ? "border-red-500" : "border-gray-700"
              } placeholder-gray-400 focus:outline-none`}
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
                isDarkMode
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-white text-gray-900"
              } ${
                formErrors.message ? "border-red-500" : "border-gray-700"
              } placeholder-gray-400 focus:outline-none`}
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

            {/* Success Message */}
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
      </section>
    </div>
  );
};

export default Contact;
