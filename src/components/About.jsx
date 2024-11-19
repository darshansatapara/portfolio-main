import React from "react";
import CallToAction from "../components/CallToAction";
import { useTheme } from "../context/ThemeContext"; // Import useTheme context

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      id="about"
      className={`about-container ${
        isDarkMode ? "bg-[#10172a] text-white" : "bg-[#f9f9f9] text-gray-800"
      }`}
    >
      <section
        className={`min-h-screen flex items-center justify-center transition duration-300 ${
          isDarkMode ? "bg-[#10172a]" : "bg-[#f9f9f9]"
        }`}
      >
        <div
          className={`max-w-2xl mx-auto p-3 text-center ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          <div>
            <h1
              className={`text-3xl font-semibold text-center my-7 ${
                isDarkMode ? "text-yellow-300" : "text-blue-600"
              }`}
            >
              About{" "}
              <span
                className={`${
                  isDarkMode ? "text-yellow-300 font-bold" : "text-blue-500"
                }`}
              >
                Darshan Satapara
              </span>
            </h1>
            <div
              className={`text-md text-gray-200 flex flex-col gap-6 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <p>
                Welcome to my portfolio! I'm{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  Darshan Satapara
                </span>
                , a{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  Computer Engineering
                </span>{" "}
                student with a passion for backend development and data
                analytics. I specialize in the{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  MERN Stack
                </span>{" "}
                and love solving problems using Python and Excel.
              </p>

              <p>
                On this portfolio, you'll find various projects I've worked on,
                ranging from web development applications to{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  data analysis{" "}
                </span>
                projects. I'm always eager to learn new technologies and share
                my knowledge with others. My focus is on{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  collaboration
                </span>{" "}
                and continuous learning.
              </p>

              <p>
                I believe in the power of collaboration and{" "}
                <span
                  className={`${
                    isDarkMode ? "text-yellow-300" : "text-blue-600"
                  } font-bold`}
                >
                  community
                </span>
                . Feel free to browse my work, and connect with me. I'm always
                open to new opportunities and collaborations!
              </p>
            </div>
          </div>
          <div className="my-7">
            <CallToAction />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
