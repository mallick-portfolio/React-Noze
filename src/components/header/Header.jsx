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
        <div className="relative h-full">
          <button className="bg-[#654a9b] text-white px-6 py-3 font-bold rounded-md">
            Pre Order
          </button>
          <div className="absolute -right-12 -top-2 px-4 py-2 bg-white w-80">
            <div className="flex justify-between items-center text-xl font-semibold">
              <h3>Cart</h3>
              <button>X</button>
            </div>
            <div className="flex justify-between flex-col h-[calc(100vh_-_2rem)] py-4">
              <div className="flex justify-between items-start">
                <img
                  className="w-16"
                  src="https://cdn.shopify.com/s/files/1/0572/5369/1554/products/NOZE-Front_180x180.png?v=1628274438"
                  alt=""
                />
                <div>
                  <h3 className="text-sm">Noze | Smart Air Quality Monitor</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      <button className="text-xl font-bold px-2 border">
                        -
                      </button>
                      <button className="border pt-1 px-3">{1}</button>
                      <button className="text-xl font-bold px-2 border">
                        +
                      </button>
                    </div>
                    <p>price</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm text-secondary">
                  <h5 className="">SUBTOTAL</h5>
                  <p>Price</p>
                </div>
                <p className="text-[10px] py-3">
                  Shipping and discount codes are added at checkout.
                </p>
                <button className="bg-[#654a9b] w-full text-white px-6 py-3 font-bold rounded-md">
                  Pre Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
