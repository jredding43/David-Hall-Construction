import React, { useState } from "react";
import "../App.css";

const projects = [
  {
    title: "Land Clearing for Commercial Development",
    description:
      "We successfully cleared 20 acres of land for a large commercial project, ensuring proper grading and soil stabilization.",
    status: "Completed",
  },
  {
    title: "Residential Excavation & Foundation Work",
    description:
      "Excavated and prepared the foundation for multiple residential properties, adhering to strict engineering standards.",
    status: "Completed",
  },
];

const faqs = [
  {
    question: "What types of projects do you handle?",
    answer:
      "We specialize in excavation, land clearing, site preparation, drainage installation, and foundation work for both commercial and residential clients.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope, but smaller jobs take a few days while large-scale excavation can take several weeks.",
  },
  {
    question: "Do you offer site consultations?",
    answer:
      "Yes! We offer free site evaluations to assess project requirements and provide accurate estimates.",
  },
  
];

const Project = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="projects">
      <h1>Our Projects</h1>
      <p className="projects-intro">
        At David Hall Construction, we take pride in our expertise in excavation and land clearing.
        Here are some of our recent projects:
      </p>

      {/* Project List */}
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className={`status ${project.status === "Completed" ? "completed" : "in-progress"}`}>
              {project.status}
            </span>
          </div>
        ))}
      </div>

      {/* Video Section
      <div className="project-videos">
        <h2>See Us In Action</h2>
        <div className="video-gallery">
          <video controls className="project-video">
            <source src="/videos/excavator3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="project-video">
          <video controls width="100%" height="315">
            <source src="/videos/excavator1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div> */}

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
            </button>
            {expandedFaq === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
