import { useState } from "react";
import React from "react"; 
import "../App.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setSubmitted(true); 

    // Clear the form fields
    event.target.reset();

    setTimeout(() => setSubmitted(false), 10000);
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p>Have a question or want to get in touch? Fill out the form below!</p>

      {/* Success message */}
      {submitted && <p className="success-message">Message received! We will get back to you in 24-48 hours.</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="text" id="phone" name="phone" placeholder="Your Phone Number" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
