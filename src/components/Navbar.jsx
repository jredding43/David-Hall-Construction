import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="tab-nav">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>Home</NavLink></li>
        <li><NavLink to="projects" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>Projects</NavLink></li>
        <li><NavLink to="equipment" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>Equipment</NavLink></li>
        <li><NavLink to="services" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>Services</NavLink></li>
        <li><NavLink to="contact" className={({ isActive }) => isActive ? "tab-item active" : "tab-item"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
