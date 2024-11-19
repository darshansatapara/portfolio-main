import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext"; // Importing the useTheme context

const Projects = () => {
  const { isDarkMode } = useTheme(); // Get the current theme state

  const projects = [
    {
      title: "Lumify-LEDServiceWebsite",
      description:
        "Fully responsive LED service website offering end-to-end solutions, including new LED fittings and maintenance services tailored to user requirements.",
      image: "/images/blog.png",
      link: "https://github.com/darshansatapara/Lumify-LEDServiceWebsite",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing my information, skills, projects, and a contact feature via email. Built using React, Node.js, and Context API.",
      image: "/images/portfolio.png",
      link: "https://github.com/jayprajapati1904/portfolio",
    },
    {
      title: "Pepsi",
      description:
        "Mobile app for managing Pepsi business data, offering detailed analysis by year, month, week, and category. Built with React Native and Node.js.",
      image: "/images/DashBoard.png",
      link: "https://github.com/darshansatapara/pepsi",
    },
    {
      title: "Expense-Tracker",
      description:
        "Expense Tracker web app offering online and offline tracking of categorized expenses and income. Provides detailed analysis by time period and category with a secure, well-structured database.",
      image: "/images/sundown.png",
      link: "https://github.com/darshansatapara/expense-tracker",
    },
  ];

  return (
    <div
      id="projects"
      className={` ${
        isDarkMode ? "bg-[#10172a] text-white" : "bg-[#f9f9f9] text-gray-800"
      } projects-container`}
    >
      <section>
        <div className="container mx-auto text-center px-3">
          <h2
            className={`text-3xl font-bold mb-10 ${
              isDarkMode ? "text-yellow-300" : "text-blue-600"
            }`}
          >
            My <span className="text-green-300">Projects</span>
          </h2>
          <div className=" m-4 grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${
                  isDarkMode
                    ? "bg-gradient-to-r from-indigo-600 to-blue-500"
                    : "bg-gradient-to-r from-blue-400 to-green-500"
                } p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-90 hover:shadow-xl`}
              >
                {project.image && (
                  <div className="rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-48 rounded-md md:object-cover transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ${
                        isDarkMode
                          ? "filter brightness-75"
                          : "filter brightness-100"
                      }`}
                    />
                  </div>
                )}

                <h3
                  className={`text-xl font-bold mt-4 mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  } mb-4`}
                >
                  {project.description}
                </p>

                <a
                  href={project.link}
                  className={`flex items-center justify-center ${
                    isDarkMode
                      ? "bg-gradient-to-r from-purple-600 to-blue-500"
                      : "bg-gradient-to-r from-green-400 to-blue-500"
                  } text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore the project on
                  <FaGithub className="ml-2 w-5 h-5" />
                </a>
              </div>
            ))}
          </div>

          <a
            href="https://github.com/darshansatapara"
            className={`mt-10 px-3 flex items-center justify-center w-max mx-auto ${
              isDarkMode
                ? "bg-gradient-to-r from-green-400 to-red-500"
                : "bg-gradient-to-r from-blue-400 to-blue-600"
            } text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore More project on
            <FaGithub className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
