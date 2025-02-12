import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../App.css";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetQuoteClick = () => {
    navigate("/contact");
  };

  return (
    <div className="hero">
      <h1>David Hall Construction LLC</h1>

      {/* Subheader */}
      <div className="subheader">
        <p>With over 30 years of experience, we bring expertise, reliability, and dedication to every project.</p>
      </div>

      {/* Button with navigation */}
      <button className="cta-button" onClick={handleGetQuoteClick}>
        Get a Quote
      </button>
    </div>
  );
}

export default HeroSection;
