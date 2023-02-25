import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ searchChange }) {
  return (
    <div className="grid md:grid-cols-3 py-2">
      <div className="col-span-1 flex justify-center md:justify-start ml-4 font-logo text-2xl">
        <h1 className="">DRIP-MALL</h1>
      </div>
      <div className="col-span-1 flex justify-center">
        <input
          className="rounded-full border pl-2"
          type="text"
          placeholder="Search..."
          onChange={(e) => searchChange(e.target.value)}
        />
      </div>
      <div className="col-span-1 grid mr-4 justify-center md:justify-end">
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </div>
  );
}

export default NavBar;
