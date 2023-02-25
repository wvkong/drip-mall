import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <nav className="text-xl flex items-center font-serif justify-evenly text-gray-500">
      <NavLink
        className="category"
        to="/"
        exact
        activeClassName="current"
      >
        Home
      </NavLink>
      <NavLink
        className="category"
        to="/electronics"
        activeClassName="current"
      >
        Electronics
      </NavLink>
      <NavLink
        className="category"
        to="/fashion"
        activeClassName="current"
      >
        Fashion
      </NavLink>
      <NavLink
        className="category"
        to="/shoes"
        activeClassName="current"
      >
        Shoes
      </NavLink>
      <NavLink
        className="category"
        to="/groceries"
        activeClassName="current"
      >
        Groceries
      </NavLink>
    </nav>
  );
}

export default Categories;
