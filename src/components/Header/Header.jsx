import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <NavLink className="nav-link" activeClassName="selected" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" activeClassName="selected" to="/search">
        Search
      </NavLink>
    </div>
  );
};

export default Header;
