import React from "react";
import "../App.css"; // Updated to a dedicated CSS file

const Equipment = () => {
  const equipmentList = [
    {
      name: "Large Loader",
      description: "Handles heavy-duty tasks with a 3-yard bucket, ideal for large-scale projects.",
    },
    {
      name: "Small Loader",
      description: "Compact and efficient with a 1-yard bucket for versatile usage.",
    },
    {
      name: "Skid Steer",
      description: "Highly maneuverable for small-to-medium projects, perfect for tight spaces.",
    },
    {
      name: "Excavator",
      description: "Excels in trenching, digging, and large-scale excavation with precision.",
    },
    {
      name: "Backhoe Loader",
      description: "Dual-purpose functionality for digging, trenching, and backfilling.",
    },
    {
      name: "Dump Truck",
      description: "Transports large loads efficiently, ensuring materials are delivered on time.",
    },
    {
      name: "Deck Screener",
      description: "Screens the rocks/dirt to get the best quality mix.",
    },
  ];

  const equipmentAccess = [
    {
      name: "Grader",
      description: "A precision earthmoving machine with a long blade used to create a smooth, level surface, essential for road construction, site preparation, and fine grading.",
    },
    {
      name: "Cat",
      description: "Heavy-duty construction machinery known for durability and power, used for earthmoving, excavation, and site preparation.",
    },
    {
      name: "Roller",
      description: "A compaction machine used to flatten surfaces, ensuring stability for roads, foundations, and construction sites.",
    },
  ];

  return (
    <section className="equipment">
      <div className="equipment-header">
        <h2>Our Equipment</h2>
        <p>
          We take pride in our fleet of modern, reliable equipment, ensuring efficient and effective project execution.
        </p>
      </div>

      <div className="equipment-grid">
        {equipmentList.map((equipment, index) => (
          <div key={index} className="equipment-card">
            <div className="equipment-info">
              <h3>{equipment.name}</h3>
              <p>{equipment.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="equipment-header">
        <h2>Additional Access To</h2>
      </div>

      <div className="equipment-grid">
        {equipmentAccess.map((equipment, index) => (
          <div key={index} className="equipment-card">
            <div className="equipment-info">
              <h3>{equipment.name}</h3>
              <p>{equipment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipment;
