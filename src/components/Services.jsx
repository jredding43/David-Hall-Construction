import React from "react"; 
import "../App.css";

function Services() {
    const services = [
      {
        title: "Site Preparation",
        description: "Prepare land for construction by clearing, grading, and leveling.",
      },
      {
        title: "Land Clearing",
        description: "Efficiently remove trees, stumps, rocks, and debris to make land ready for development.",
      },
      {
        title: "Trenching",
        description: "Digging trenches for utility lines like water, gas, sewer, and electrical systems.",
      },
      {
        title: "Grading and Leveling",
        description: "Ensure land is level or sloped as needed for proper drainage or construction.",
      },
      {
        title: "Foundation Excavation",
        description: "Excavate foundations for homes, buildings, or other structures.",
      },
      {
        title: "Backfilling",
        description: "Fill excavated areas with soil or gravel after construction or installation.",
      },
      {
        title: "Erosion Control",
        description: "Install erosion control measures like silt fences, drainage ditches, or retaining walls.",
      },
      {
        title: "Pond or Retention Basin Excavation",
        description: "Excavate ponds for landscaping, irrigation, or water retention purposes.",
      },
      {
        title: "Stormwater Drainage",
        description: "Install or repair stormwater systems and culverts.",
      },
      {
        title: "Earthmoving",
        description: "Transport soil or debris from one location to another on the site.",
      },
      {
        title: "Septic System Installation",
        description: "Excavate for new septic systems or repair existing ones.",
      },
      {
        title: "Retaining Wall Excavation",
        description: "Prepare land for retaining walls to prevent erosion or create usable space.",
      },
    ];
  
    return (
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>

            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Services;
  