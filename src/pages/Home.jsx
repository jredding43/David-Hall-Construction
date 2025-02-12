import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; 

const Home = () => {
  return (
    <div className="home-page">

      <div className="contractor-license"> 
        <div>WA State Contractor: #DAVIDHC847DT</div>
        </div>

      <div className="contractor-intro">
        <p><i>With decades of hands-on experience in home construction and site development, I’ve mastered every phase of 
          the process—from meticulous site preparation and strategic setup to expert excavation and precision grading. 
          I understand that success starts from the ground up, and my expertise ensures every project is executed with 
          efficiency, quality, and a commitment to excellence. When it comes to getting the job done right, I bring the
           knowledge, skill, and attention to detail that set the foundation for long-term success.</i></p>
      </div>
      {/* What Sets Us Apart */}
      <section className="about-us">
        <h2>Why Choose David Hall Construction?</h2>
        <div className="about-us-content">
          <div className="about-item">
            <h3>✔ Precision & Expertise</h3>
            <p>Years of hands-on experience in excavation, grading, and land development.</p>
          </div>
          <div className="about-item">
            <h3>✔ On-Time & Reliable</h3>
            <p>We meet deadlines without sacrificing quality—because your time matters.</p>
          </div>
          <div className="about-item">
            <h3>✔ Built for Any Project</h3>
            <p>Whether it's residential or commercial, we have the equipment and expertise.</p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
        <section className="how-we-work">
        <h2>Our Work Process</h2>
        <p>At David Hall Construction, we follow a streamlined process to ensure high-quality results on every project.</p>

        <div className="work-steps">
            <div className="work-step">
            <span className="step-number">1</span>
            <h3>Initial Consultation</h3>
            <p>We discuss your project, assess the site, and create a tailored plan.</p>
            </div>

            <div className="work-step">
            <span className="step-number">2</span>
            <h3>Site Preparation</h3>
            <p>Clearing, grading, and setting up the site for efficient work.</p>
            </div>

            <div className="work-step">
            <span className="step-number">3</span>
            <h3>Excavation & Construction</h3>
            <p>Our expert team executes the project using advanced machinery.</p>
            </div>

            <div className="work-step">
            <span className="step-number">4</span>
            <h3>Final Inspection & Handover</h3>
            <p>We ensure the work meets standards before completing the job.</p>
            </div>
        </div>
        </section>


      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Start Your Next Project?</h2>
        <p>Contact us today and let’s bring your vision to life with expert excavation and site prep.</p>
        <Link to="/contact" className="btn cta-btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default Home;
