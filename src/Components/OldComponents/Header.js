import React from "react";
import "./Background.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <NavLink to="/students" style={({ isActive }) => {return {color: isActive ? "yellow" : "white",textDecoration: "none"}}}> Students </NavLink>

    </div>
  );
};

export default Header;
