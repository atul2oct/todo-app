import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] px-10
    bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900">
      {/* logo */}
      <div className="logo">
      
        <Link to="/">
            todo<span>List</span>
        </Link>
      </div>

      <div className="lg:w-1/2 ">
        <div className="nav-list">
          <Link className="nav-list-item" to="/">
            Home
          </Link>
          <Link className="nav-list-item" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-list-item" to="/about">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
