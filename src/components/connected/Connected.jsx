import React from "react";

const Connected = () => {
  return (
    <div className="px-12 py-28 mx-auto text-center">
      <h2 className="text-primary text-5xl font-medium">
        Stay connected with NOZE
      </h2>
      <p className="text-secondary mt-6 mb-8 text-lg">
        NOZE is an AI powered air quality monitor that <br /> works to keep you
        safe. Breathe easy.
      </p>
      <button className="hover:bg-[#4d2b90] bg-[#654a9b] text-sm text-white px-6 py-3 duration-300 transition-all rounded-md">
        Join the waitlist
      </button>
    </div>
  );
};

export default Connected;
