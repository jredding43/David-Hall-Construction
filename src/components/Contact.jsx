import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xzzdakqz", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        e.target.reset(); // Clear form after submission
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Us</h1>
      <p>Have a question or want to get in touch? Fill out the form below!</p>

      {/* Success message popup */}
      {submitted && (
        <div className="popup-message">
          <p>Thank you! We will get back to you in 24-48 hours.</p>
          <button onClick={() => setSubmitted(false)}>Close</button>
        </div>
      )}

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
};

export default ContactForm;
