import React from "react";
import wonder from "../../assets/images/wonder.png";
const Wonder = () => {
  return (
    <div className="xl:px-12 px-8 my-24 mx-auto flex flex-col sm:flex-row items-center justify-between gap-16">
      <div className="sm:w-1/2 w-full sm:pl-24">
        <img
          className="rounded-full lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px]"
          src={wonder}
          alt="Banner"
        />
      </div>
      <div className="sm:w-1/2 w-full sm:pr-16">
        <h1 className="lg:text-4xl xl:text-5xl font-medium text-primary">
          Wondering if <br /> you should get <br /> a NOZE?
        </h1>
        <div className="text-secondary my-6 text-lg">
          <h4 className="mb-4">Any way you slice it, it’s a no brainer.</h4>
          <ol className="text-[#373f41]">
            <li className="my-1">1. Reduce Virus spread</li>
            <li className="my-1">2. Watch out for Mold</li>
            <li className="my-1">3. Keep Asthma in check</li>
            <li className="my-1">4. Avoid Allergy flare ups</li>
            <li className="my-1">5. Improve your Sleep</li>
            <li className="my-1">6. Boost Productivity & Focus</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Wonder;
