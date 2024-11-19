import React from "react";
import Navbar from "../components/Navber";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import { useTheme } from "../context/ThemeContext"; // Importing the useTheme context

export default function Home() {
  const { isDarkMode } = useTheme(); // Get the current theme state

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#10172a] text-white" : "bg-[#f9f9f9] text-gray-800"
      } min-h-screen transition duration-300`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div>
        {/* Hero Section */}
        <section className="mb-8">
          <Hero />
        </section>

        {/* About Section */}
        <section className="mt-0 mb-8">
          <About />
        </section>

        {/* Skills Section */}
        <section className="mt-0 mb-8">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className="mt-0 mb-8">
          <Projects />
        </section>

        {/* Contact Section */}
        <section className="mt-0 mb-8">
          <Contact />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
