import React from "react";
import phone1 from "../../assets/images/phone1.png";
import phone2 from "../../assets/images/phone2.png";
import phone3 from "../../assets/images/phone3.png";
const Incredible = () => {
  return (
    <div className="xl:px-12 lg:px-8 md:px-6 sm:px-4 my-8 mx-auto lg:flex items-center justify-between gap-16">
      <div className="w-2/5 scroll-smooth">
        <h1 className="text-5xl font-medium text-primary">
          Incredible <br /> power, right <br /> under your <br /> NOZE
        </h1>
      </div>

      <div className="w-3/5 flex flex-col gap-5 h-[600px] overflow-auto no-scrollbar">
        <div className="rounded-full text-center w-[330px] h-[350px]  bg-[#d0cbe6] mb-8">
          <img
            className="py-8 w-[250px] h-[330px] mx-auto"
            src={phone1}
            alt="Banner"
          />
          <div className="mt-8">
            <h4 className="text-xl font-bold text-black">Check in</h4>
            <p>
              Keep an eye on things in real- <br /> time so you can have peace
              of <br /> mind all the time.
            </p>
          </div>
        </div>
        <div className="rounded-full text-center w-[330px] h-[350px]  bg-[#d0cbe6] mt-16 lg:ml-36 xl:ml-64">
          <img
            className="py-8 w-[250px] h-[330px] mx-auto"
            src={phone2}
            alt="Banner"
          />
          <div className="mt-8">
            <h4 className="text-xl font-bold text-black">Track it.</h4>
            <p>
              Dive into the details to <br />
              understand exactly what’s going <br />
              on so you can take action in the <br /> moment.
            </p>
          </div>
        </div>
        <div className="rounded-full text-center w-[330px] h-[350px]  bg-[#d0cbe6] my-24">
          <img
            className="py-8 w-[250px] h-[330px] mx-auto"
            src={phone3}
            alt="Banner"
          />
          <div className="mt-8">
            <h4 className="text-xl font-bold text-black">Share it.</h4>
            <p>
              Let others see what’s in the air
              <br />
              before they come inside by
              <br />
              sharing access to your Noze.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incredible;
