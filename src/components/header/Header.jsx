import React from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  let activeStyle = {
    color: "#654a9b",
  };

  return (
    <div className="px-12 mx-auto flex justify-between items-center py-2 border-b border-[#b9b0e4] sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="ml-8 text-base text-[#b9b0e4]">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              Overview
            </NavLink>
          </li>
          <li className="ml-8 text-base text-[#b9b0e4]">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/space"
            >
              Specs
            </NavLink>
          </li>
          <li className="ml-8 text-base text-[#b9b0e4]">
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/faq"
            >
              FAQs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <h5 className="mr-6 text-[#6b5a78] text-base">Order for $249</h5>
        <button className="bg-[#654a9b] text-white px-6 py-3 font-bold rounded-md">
          Pre Order
        </button>
      </div>
    </div>
  );
};

export default Header;
