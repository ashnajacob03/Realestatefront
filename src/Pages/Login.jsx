import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Pages/Login.css";
import Swal from "sweetalert2";

function Login() {
  const [property, setProperty] = useState({
    email: "",
    pwd: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3002/login", property);
      
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Login Successful..Redirecting to Home",
          confirmButtonColor: "#3085d6"
        });
        navigate("/"); // Redirect after successful login
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
        confirmButtonColor: "#d33"
      });
    }
  };
  
  return (
    <div>
      <section className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={property.email} onChange={handleChange} placeholder="Enter your email" required />
          
          <label htmlFor="pwd">Password:</label>
          <input type="password" id="pwd" name="pwd" value={property.pwd} onChange={handleChange} placeholder="Enter your password" required />
          
          <button type="submit">Login</button>
        </form>

        <p className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>

        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    </div>
  );
}

export default Login;
