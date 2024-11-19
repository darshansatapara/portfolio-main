import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      id="home"
      className={`hero-container ${
        isDarkMode ? "bg-[#10172a] text-white" : "bg-[#f9f9f9] text-gray-800"
      }`}
    >
      <section
        className={`min-h-screen flex flex-col md:flex-row justify-center items-center px-4 md:px-16 text-center md:text-left transition duration-300 ${
          isDarkMode ? "bg-[#10172a]" : "bg-[#f9f9f9]"
        }`}
        style={{ marginTop: "55px" }} // Adjust margin based on Navbar height
      >
        {/* Left Content */}
        <div className="flex-1 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm{" "}
            <span
              className={`${
                isDarkMode
                  ? "text-yellow-300"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500"
              }`}
            >
              <Typewriter
                words={[
                  "Darshan Satapara",
                  "A Full Stack Developer",
                  "A Mobile Application Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={2000}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Computer Engineering Student | AWS Club Member | MERN Stack
            Developer | Mobile Application Developer
          </p>
          <Link to="projects" smooth={true} duration={800} offset={-70}>
            <Button
              type="primary"
              size="large"
              className={`px-6 py-3 shadow-lg ${
                isDarkMode
                  ? "bg-yellow-300 text-gray-800 hover:bg-yellow-400"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              icon={<ArrowRightOutlined />}
            >
              View My Work
            </Button>
          </Link>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-8 lg:mt-10">
            {[
              {
                href: "https://www.instagram.com/mrdarshan_28/",
                icon: <FaInstagram size={24} />,
                color: isDarkMode
                  ? "rgba(236, 72, 153, 0.7)"
                  : "rgba(236, 72, 153, 0.9)",
              },
              {
                href: "https://x.com/SataparaDarshan",
                icon: <FaTwitter size={24} />,
                color: isDarkMode
                  ? "rgba(56, 161, 243, 0.7)"
                  : "rgba(56, 161, 243, 0.9)",
              },
              {
                href: "https://www.linkedin.com/in/darshansatapara/",
                icon: <FaLinkedin size={24} />,
                color: isDarkMode
                  ? "rgba(10, 102, 194, 0.7)"
                  : "rgba(10, 102, 194, 0.9)",
              },
              {
                href: "https://github.com/darshansatapara",
                icon: <FaGithub size={24} />,
                color: isDarkMode
                  ? "rgba(203, 213, 225, 0.7)"
                  : "rgba(87, 87, 87, 0.9)",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-3 transition duration-300 transform"
                style={{
                  backgroundColor: item.color,
                  boxShadow: `0px 4px 12px ${item.color}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Content - Circular Illustration */}
        <div className="flex-1 mt-8 md:mt-0 mb-9">
          <div
            className={`animate-border-gradient relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto rounded-full border-4 ${
              isDarkMode
                ? "border-transparent bg-gradient-to-r from-purple-600 to-blue-500"
                : "border-transparent bg-gradient-to-r from-blue-400 to-purple-300"
            } overflow-hidden shadow-xl`}
          >
            {/* Animated Border Container */}
            <div
              className="absolute inset-0 rounded-full "
              style={{
                background:
                  "conic-gradient(from 0deg, #ff6f61, #6f61ff, #61ff9d, #ff6f61)",
                animation: "borderAnimation 5s linear infinite", // Add the border animation
              }}
            ></div>

            {/* Image */}
            <img
              src="/images/_4.jpg"
              alt="Hero Illustration"
              className="relative w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes borderAnimation {
          0% {
            border-color: #ff6f61;
          }
          25% {
            border-color: #6f61ff;
          }
          50% {
            border-color: #61ff9d;
          }
          75% {
            border-color: #ff6f61;
          }
          100% {
            border-color: #6f61ff;
          }
        }
        /* For the animated border effect */
        .animate-border-gradient {
          animation: borderAnimation 5s infinite linear;
          border-radius: 50%;
          border-width: 4px;
        }
      `}</style>
    </div>
  );
};

export default Hero;
