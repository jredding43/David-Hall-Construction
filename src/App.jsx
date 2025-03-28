import React from "react";
import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Equipment from "./components/Equipment";
import Project from "./components/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"; 
import "./App.css";

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-3HEM34EFB3", {
        page_path: window.location.pathname + window.location.search + window.location.hash,
      });
    }
  }, [location]);
};

const GoogleAnalyticsTracker = () => {
  useGoogleAnalytics();
  return null;
};

const App = () => {
  return (
    <Router>
      <GoogleAnalyticsTracker />
      {/* Hero Section at the very top of all pages */}
      <HeroSection />

      {/* Navigation Bar below the header */}
      <Navbar />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Project />} />  
          <Route path="equipment" element={<Equipment />} /> 
          <Route path="services" element={<Services />} /> 
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </Router>
  );
};

export default App;
