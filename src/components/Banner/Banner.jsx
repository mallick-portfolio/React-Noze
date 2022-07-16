import React from "react";
import banner from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="px-12 py-8 mx-auto flex justify-between gap-16">
      <div className="w-1/2 px-8 mt-24">
        <h1 className="text-5xl font-medium text-primary">There’s something <br /> new in the air</h1>
        <p className="text-secondary my-8 text-lg">
          NOZE is an AI powered air quality monitor that works to keep you safe.
          Breathe easy.
        </p>
        <button className="bg-[#654a9b] text-sm text-white px-6 py-3 rounded-md">
        Join the waitlist
        </button>
      </div>
      <div className="w-1/2">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
