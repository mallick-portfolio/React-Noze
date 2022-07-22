import React from "react";
import banner from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <div className="xl:px-12 lg:px-8 md:px-6 sm:px-4 lg:py-16 md:py-12 mx-auto flex flex-col sm:flex-row justify-between gap-16">
      <div className="sm:w-1/2 text-center sm:text-left  w-full px-8 lg:mt-24 md:mt-12 mt-12 pt-4">
        <h1 className="xl:text-5xl lg:text-4xl text-3xl font-medium text-primary">
          There’s something <br /> new in the air
        </h1>
        <p className="text-secondary lg:my-8 my-4 lg:text-lg md:text-sm">
          NOZE is an AI powered air quality monitor that works to keep you safe.
          Breathe easy.
        </p>
        <button className="bg-[#4d2b90] text-sm text-white px-6 py-3 rounded-md">
          Join the waitlist
        </button>
      </div>
      <div className="sm:w-1/2 w-full">
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
