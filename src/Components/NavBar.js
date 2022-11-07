import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({searchChange}) {
  return (
    <div className="navbar">
        <h1>Vikali</h1>
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => searchChange(e.target.value)}
        />
        <NavLink to="/cart" className="cart">Cart</NavLink>
    </div>
  );
}

export default NavBar;
