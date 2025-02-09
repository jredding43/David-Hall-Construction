import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import Project from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"; // Import HeroSection
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* Hero Section at the very top of all pages */}
      <HeroSection />

      {/* Navigation Bar below the header */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Project />} />  {/* Removed leading `/` */}
          <Route path="equipment" element={<Equipment />} /> {/* Removed leading `/` */}
          <Route path="services" element={<Services />} /> {/* Removed leading `/` */}
          <Route path="contact" element={<Contact />} /> {/* Removed leading `/` */}
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </Router>
  );
};

export default App;
