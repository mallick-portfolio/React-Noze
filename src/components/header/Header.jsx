import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { NavLink, Link } from "react-router-dom";
import Cart from "../cart/Cart.jsx";
const Header = ({show, setShow}) => {

  const [data, setData] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("item");
    setData(JSON.parse(data));
  }, []);
  let activeStyle = {
    color: "#654a9b",
  };
  const item = {
    title: "Noze | Smart Air Quality Monitor",
    price: 249,
    img: "https://cdn.shopify.com/s/files/1/0572/5369/1554/products/NOZE-Front_180x180.png?v=1628274438",
  };

  const handleClick = () => {
    setData(item);
    localStorage.setItem("item", JSON.stringify(item));
  };

  return (
    <div className="px-12 mx-auto flex justify-between items-center py-2 border-b border-[#b9b0e4] fixed w-full top-0 z-50 bg-white">
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
        <h5 onClick={handleClick} className="mr-6 text-[#6b5a78] text-base">
          Order for $249
        </h5>
        <div className="relative h-full">
          <button
            onClick={() => setShow(true)}
            className="bg-[#654a9b] text-white px-6 py-3 font-bold rounded-md"
          >
            Pre Order
          </button>
          <Cart data={data} show={show} setShow={setShow} />
        </div>
      </div>
    </div>
  );
};

export default Header;
