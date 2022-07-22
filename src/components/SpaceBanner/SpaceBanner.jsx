import React from "react";
import outline from "../../assets/images/Outline-768x561.png";
import SpaceFaq from "./SpaceFaq.jsx";
const SpaceBanner = () => {
  return (
    <div className="">
      <img className="w-full h-[calc(100vh_-_4rem)]" src={outline} alt="" />
      <div className="flex flex-col lg:flex-row justify-between items-center px-12 mx-auto">
        <div className="lg:w-1/3 w-full">
          <h1 className="text-5xl text-primary font-medium">Specifications</h1>
        </div>
        <div className="lg:w-2/3 w-full">
          <SpaceFaq />
        </div>
      </div>
    </div>
  );
};

export default SpaceBanner;
