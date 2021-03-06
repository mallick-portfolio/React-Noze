import React, { useState } from "react";
import data from "../../utilities/faq.js";

const Faq = () => {
  const [active, setActive] = useState(null);
  return (
    <div
      id="faq"
      className="accordion flex flex-col items-center justify-center px-12 py-6  mx-auto"
    >
      <h2 className="text-center text-5xl text-primary font-medium py-8">
        FAQs
      </h2>
      {data.map((faq, i) => (
        <div
          key={faq.id}
          className="border hover:shadow-lg transition-all duration-1000 w-full border-primary my-2 rounded-3xl pl-4"
        >
          <input type="checkbox" name="panel" id={`${i}`} className="hidden" />
          <label
            onClick={() => (i === active ? setActive(10) : setActive(i))}
            htmlFor={`${i}`}
            className={`relative after:absolute ${
              active === i ? "after:content-['-']" : "after:content-['+']"
            } after:right-4 block py-6 font-medium text-xl text-primary cursor-pointer`}
          >
            {faq.title}
          </label>
          <div
            className={`${
              active === i ? "" : "max-h-0"
            } overflow-hidden duration-1000 transition-all ease-in-out`}
          >
            <p className=" p-4 text-secondary" id="panel1">
              {faq.des}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
