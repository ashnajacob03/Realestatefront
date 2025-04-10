import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from '../Components/Navbar';
import "../Pages/Plot.css";
import { Link, useNavigate } from "react-router-dom";
function Plot() {
  // useState hook
  const [property, setProperty] = useState({
    title: "",
    description: "",
    location: "",
    price: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-5tvh.onrender.com/itemInserting", property);
      
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Property added successfully",
        confirmButtonColor: "#3085d6"
      });
      navigate("/Plot"); // Redirect after successful login
      setProperty({
        title: "",
        description: "",
        location: "",
        price: ""
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Property not added",
        confirmButtonColor: "#d33"
      });
    }
  };

  return (
    <div>
      <Navbar />
      <section className="plot-form">
        <h2>Add a New Property</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={property.title} onChange={handleChange} placeholder="Title" required />
          
          <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" value={property.description} onChange={handleChange} placeholder="Description" required></textarea>
          
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={property.location} onChange={handleChange} placeholder="Location" required />
          
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" value={property.price} onChange={handleChange} placeholder="Price" required />
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Plot;
