import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Drawer } from "antd";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // Initial active section

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const handleSetActive = (section) => {
    setActiveSection(section); // Update active section
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } py-3 md:py-4 fixed top-0 left-0 w-full z-50 shadow-lg transition duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1
          className={`text-2xl ml-3 sm:text-xl md:text-3xl font-extrabold ${
            isDarkMode
              ? "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-400"
              : "text-gray-800"
          }`}
        >
          Darshan
          <span
            className={` ${isDarkMode ? "text-yellow-400" : "text-blue-600"}`}
          >
            Satapara
          </span>
        </h1>

        {/* Links and Dark Mode Toggle for Large Screens */}
        <div className="hidden md:flex items-center space-x-6">
          {["home", "projects", "skills", "about", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => handleSetActive(section)} // Update state on click
              className={`cursor-pointer pb-2 ${
                activeSection === section
                  ? `border-b-2 ${
                      isDarkMode ? "border-yellow-400" : "border-yellow-400"
                    }`
                  : ""
              } ${
                isDarkMode ? "hover:text-yellow-400" : "hover:text-blue-600"
              } transition duration-300`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}

          {/* Dark Mode Toggle */}
          <button
            className={`flex items-center justify-center w-10 h-10 rounded-full shadow-md ${
              isDarkMode
                ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                : "bg-gray-700 text-white hover:bg-gray-800"
            } transition duration-300`}
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>
        </div>

        {/* Hamburger Menu and Dark Mode Toggle for Small Screens */}
        <div className="flex md:hidden items-center space-x-3">
          {/* Dark Mode Toggle */}
          <button
            className={`flex items-center justify-center w-8 h-8 rounded-full shadow-md ${
              isDarkMode
                ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                : "bg-gray-700 text-white hover:bg-gray-800"
            } transition duration-300`}
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <span className="text-xl">☀️</span>
            ) : (
              <span className="text-xl">🌙</span>
            )}
          </button>

          {/* Hamburger Menu */}
          <button
            className={`flex items-center justify-center w-8 h-8 ${
              isDarkMode ? "bg-yellow-400" : "bg-gray-800 text-white"
            } rounded-full shadow-md transition duration-300 ease-in-out`}
            onClick={toggleDrawer}
            aria-label="Toggle Navigation"
          >
            <span className="text-xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title={
          <span
            className={`text-lg md:text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Menu
          </span>
        }
        placement="right"
        width="75%"
        onClose={toggleDrawer}
        open={isDrawerOpen}
        bodyStyle={{
          padding: 0,
          background: isDarkMode
            ? "linear-gradient(to right, #4a4a4a, #282828)"
            : "linear-gradient(to right, #ffffff, #f7f7f7)",
        }}
        headerStyle={{
          background: isDarkMode
            ? "linear-gradient(to right, #4a4a4a, #282828)"
            : "linear-gradient(to right, #ffffff, #f7f7f7)",
        }}
      >
        <div className="p-3">
          {["home", "projects", "skills", "about", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={800}
              offset={-70}
              onClick={() => {
                handleSetActive(section);
                toggleDrawer();
              }} // Update state and close drawer on click
              className={`block py-2 px-3 text-base md:text-lg ${
                activeSection === section
                  ? `border-b-2 ${
                      isDarkMode ? "border-yellow-400" : "border-yellow-400"
                    }`
                  : ""
              } ${
                isDarkMode ? "text-white" : "text-gray-800"
              } hover:bg-blue-600 hover:shadow-lg rounded-md transition duration-200 ease-in-out`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
