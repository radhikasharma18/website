import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="absolute w-full flex justify-between items-center text-white bg-transparent px-6 py-4 z-[100]">
      {/* Logo */}
      <div className="flex-1 font-bold text-3xl">MSFIN</div>
      
      {/* Menu */}
      <div className="flex-1 flex justify-around items-center text-xl font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>isActive ? "text-blue-400" : "text-white"}>About Us</NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-400" : "text-white"
          }>Contact </NavLink>
        <div className="flex space-x-4 text-2xl">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </div> 
      </div>
    </div>
  );
};

export default Navbar;
