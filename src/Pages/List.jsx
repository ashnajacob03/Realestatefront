import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Pages/List.css";
import Navbar from "../Components/Navbar";

const List = () => {
  const [properties, setProperties] = useState([]);

  // Define the function BEFORE using it in useEffect
  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:3002/itemInserting");
      console.log("Fetched properties:", response.data); // Debugging
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []); // Run only once when the component mounts
  const deleteProperty = (index) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  const editProperty = (index) => {
    console.log("Editing property:", properties[index]); // Debugging
    // Implement your edit functionality here
  };
  return (
    <div>
      <Navbar />
      <section className="listings">
        <h2>Available Properties</h2>
        <div className="listing-container">
          {properties.length === 0 ? (
            <p>No properties found.</p>
          ) : (
            properties.map((property, index) => (
              <div key={index} className="listing-card">
                <div className="listing-details">
                  <h3>{property.title}</h3>
                  <p>{property.description ? property.description : "No description available."}</p>
                  <p><strong>Location:</strong> {property.location}</p>
                  <p className="price"><strong>Price:</strong> ${property.price}</p>
                  <button className="edit" onClick={() => editProperty(index)}>Edit</button>
                  <button className="delete" onClick={() => deleteProperty(index)}>Delete</button>


                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default List;
