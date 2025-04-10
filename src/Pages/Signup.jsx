import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import "../Pages/Plot.css";
import Swal from "sweetalert2";

function Signup() {
  const [property, setProperty] = useState({
    fullname: "",
    email: "",
    address: "",
    phone: "",
    pwd: ""
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://backend-5tvh.onrender.com/userinsert", property);
Swal.fire({
        icon: "success",
        title: "Success!",
        text: "SignUp Successfull..Redirecting to SignIn",
        confirmButtonColor: "#3085d6"
      }); 
      setProperty({
        fullname: "",
        email: "",
        address: "",
        phone: "",
        pwd: ""
      });

      navigate("/login"); // Redirect to login page after signup
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
      <section className="plot-form">
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fullname">Full Name:</label>
          <input type="text" id="fullname" name="fullname" value={property.fullname} onChange={handleChange} placeholder="Fullname" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={property.email} onChange={handleChange} placeholder="Email" required />
          
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={property.address} onChange={handleChange} placeholder="Address" required />
          
          <label htmlFor="phone">Phone:</label>
          <input type="text" id="phone" name="phone" value={property.phone} onChange={handleChange} placeholder="Phone" required />
          
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" name="pwd" value={property.pwd} onChange={handleChange} placeholder="Password" required />
          
          <button type="submit">Submit</button>
        </form>
        
        <p className="login-link">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </section>
    </div>
  );
}

export default Signup;
