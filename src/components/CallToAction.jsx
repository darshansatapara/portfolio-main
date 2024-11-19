import { Button } from "flowbite-react";
import { useTheme } from "../context/ThemeContext"; // Importing useTheme context

export default function CallToAction() {
  const { isDarkMode } = useTheme(); // Get the current theme state

  return (
    <div
      className={`flex flex-col sm:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center ${
        isDarkMode
          ? "bg-gradient-to-r from-blue-500 to-teal-600 text-white"
          : "bg-gradient-to-r from-indigo-200 via-blue-300 to-teal-400 text-gray-800"
      }`}
    >
      <div className="flex-1 justify-center flex flex-col">
        <h2
          className={`text-2xl font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Want to learn more about programming?
        </h2>
        <p className={`my-2 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
          Checkout these resources with Projects
        </p>
        <Button
          gradientDuoTone={isDarkMode ? "purpleToPink" : "greenToBlue"} // Different gradient for dark and light mode
          className={`${
            isDarkMode ? "rounded-tl-xl rounded-bl-none" : "rounded-xl"
          }`}
        >
          <a
            href="https://github.com/darshansatapara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Github Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="Programming Resources"
          className="rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-105"
        />
      </div>
    </div>
  );
}
