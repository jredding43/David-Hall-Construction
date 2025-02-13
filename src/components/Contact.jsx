<div className="contact-form">
  <h1>Contact Us</h1>
  <p>Have a question or want to get in touch? Fill out the form below!</p>

  <form action="https://formspree.io/f/xzzdakqz" method="POST">
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
