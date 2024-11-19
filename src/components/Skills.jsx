import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext"; // Importing the useTheme context
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGithub,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase } from "react-icons/si";

const Skills = () => {
  const { isDarkMode } = useTheme(); // Getting the current theme state

  const skills = [
    {
      icon: <FaReact className="w-8 h-8 text-blue-700" />,
      percentage: 90,
      colors: "from-blue-300 to-blue-700",
    },
    {
      icon: <FaNodeJs className="w-8 h-8 text-yellow-500" />,
      percentage: 85,
      colors: "from-green-300 to-green-500",
    },
    {
      icon: <FaPython className="w-8 h-8 text-yellow-500" />,
      percentage: 80,
      colors: "from-yellow-300 to-yellow-500",
    },
    {
      icon: <SiMongodb className="w-8 h-8 text-green-700" />,
      percentage: 80,
      colors: "from-green-400 to-green-700",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-blue-400" />,
      percentage: 95,
      colors: "from-blue-200 to-blue-600",
    },
    {
      icon: <SiFirebase className="w-8 h-8 text-yellow-400" />,
      percentage: 70,
      colors: "from-yellow-200 to-yellow-400",
    },
    {
      icon: <FaGithub className="w-8 h-8 text-gray-800" />,
      percentage: 95,
      colors: "from-gray-500 to-gray-800",
    },
    {
      icon: <FaJava className="w-8 h-8 text-red-600" />,
      percentage: 70,
      colors: "from-orange-300 to-orange-500",
    },
  ];

  return (
    <div
      id="skills"
      className={` ${
        isDarkMode ? "bg-[#10172a] text-white" : "bg-transparent"
      } `}
    >
      <section>
        <h2
          className={`text-3xl font-bold mb-10 text-center ${
            isDarkMode ? "text-yellow-300" : "text-blue-600"
          }`}
        >
          My{" "}
          <span
            className={`ml-2 ${
              isDarkMode ? "text-yellow-300" : "text-gray-700"
            } font-bold`}
          >
            Skills
          </span>
        </h2>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isDarkMode={isDarkMode} />
          ))}
        </div>
      </section>
    </div>
  );
};

const SkillBar = ({ skill, isDarkMode }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    const increment = skill.percentage / 50; // Speed: Higher divisor = slower animation
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev >= skill.percentage) {
          clearInterval(interval);
          return skill.percentage;
        }
        return Math.min(prev + increment, skill.percentage);
      });
    }, 100); // Update every 100ms
    return () => clearInterval(interval);
  }, [skill.percentage]);

  return (
    <div
      className={`flex items-center rounded-lg p-6 shadow-lg transition duration-300 ${
        isDarkMode
          ? "bg-gradient-to-r from-pink-500 to-blue-400"
          : "bg-gradient-to-r from-indigo-200 to-teal-400"
      }`}
    >
      {/* Skill Icon */}
      <div className="flex-shrink-0 mr-4">{skill.icon}</div>

      {/* Percentage Scale */}
      <div className="flex-grow">
        <div
          className={`w-full bg-gray-300 rounded-full h-3 transition-all duration-500 ${
            isDarkMode ? "bg-gray-600" : "bg-gray-200"
          }`}
        >
          <div
            className={`h-3 rounded-full bg-gradient-to-r ${skill.colors}`}
            style={{ width: `${currentPercentage}%` }}
          ></div>
        </div>
        <p
          className={`font-medium mt-2 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {Math.round(currentPercentage)}%
        </p>
      </div>
    </div>
  );
};

export default Skills;
