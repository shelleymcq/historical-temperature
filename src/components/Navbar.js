import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-slate-300 text-black relative shadow-sm" role="navigation">
      <div className="pl-8 text-lg">
        HISTORICAL TEMPERATURE DATA
      </div>
      {/* menu icon from https://heroicons.dev/ be sure to click for jsx*/}
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink className="p-4" to="/">Home</NavLink>
        <NavLink className="p-4" to="/city-data">City Data</NavLink>
        <NavLink className="p-4" to="/palette">Palette</NavLink>
        <NavLink className="p-4" to="/about">About</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
