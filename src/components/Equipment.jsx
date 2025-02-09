import React from "react"; 
import "../App.css"; // Updated to a dedicated CSS file

const Equipment = () => {
  const equipmentList = [
    {
      name: "Large Loader",
      description: "Handles heavy-duty tasks with a 10-yard bucket, ideal for large-scale projects.",
      image: "large-loader.jpg",
    },
    {
      name: "Small Loader",
      description: "Compact and efficient with a 1-yard bucket for versatile usage.",
      image: "small-loader.jpg",
    },
    {
      name: "Skid Steer",
      description: "Highly maneuverable for small-to-medium projects, perfect for tight spaces.",
      image: "skid-steer.jpg",
    },
    {
      name: "Excavator",
      description: "Excels in trenching, digging, and large-scale excavation with precision.",
      image: "excavator.jpg",
    },
    {
      name: "Backhoe Loader",
      description: "Dual-purpose functionality for digging, trenching, and backfilling.",
      image: "backhoe.jpg",
    },
    {
      name: "Dump Truck",
      description: "Transports large loads efficiently, ensuring materials are delivered on time.",
      image: "dump-truck.jpg",
    },
    {
      name: "Deck Screener",
      description:"Screens the rocks/dirt to get the best quality mix.",
      image: "screener.jpg",
    }
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
            <img
              src={equipment.image}
              alt={equipment.name}
              className="equipment-image"
            />
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
