import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Components/Style1.css"
function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/List" ? "active" : ""} to="/List">List</Link>
        <Link className={location.pathname === "/Plot" ? "active" : ""} to="/Plot">Plot</Link>
        <Link className={location.pathname === "/Signup" ? "active" : ""} to="/Signup">SignUp/Login</Link>
    </div>
  );
}

export default Navbar;
