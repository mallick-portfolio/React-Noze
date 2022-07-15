import React from "react";
import fb from "../../assets/images/fb.svg";
import tw from "../../assets/images/twitter.svg";
import ig from "../../assets/images/ig.svg";
const Footer = () => {
  return (
    <div className="px-12 py-8 mx-auto flex justify-between items-center bg-[#f6f5fa]">
      <div>
        <ul className="flex items-center">
          <li>
            <img src={fb} alt="facebook" />
          </li>
          <li className="ml-6">
            <img src={tw} alt="twitter" />
          </li>
          <li className="ml-6">
            <img src={ig} alt="Instagram" />
          </li>
        </ul>
      </div>
      <div>
        <p className="text-[#210545] text-sm">2021 NOZE</p>
      </div>
      <div>
        <ul className="flex items-center">
          <li className="mr-6 text-[#210545] text-sm">
            <a href="/">Privacy Policy</a>
          </li>
          <li className="mr-6 text-[#210545] text-sm">
            <a href="/">Terms of Use</a>
          </li>
          <li className="text-[#210545] text-sm">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
