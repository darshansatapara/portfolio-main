import React from "react";
import { useTheme } from "../context/ThemeContext"; // Assuming you have this context for dark mode / light mode toggle

const Footer = () => {
  const { isDarkMode } = useTheme(); // Get the current theme state

  return (
    <footer
      className={`py-4 text-center ${
        isDarkMode
          ? "bg-gray-800 text-gray-200"
          : "bg-gradient-to-r from-indigo-50 to-teal-100 text-gray-800"
      }`}
    >
      <p
        className={`${
          isDarkMode ? "text-gray-300" : "text-gray-800"
        } font-semibold`}
      >
        © 2024 Darshan Satapara. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
