import React, { useState } from "react";
import matter1 from "../../assets/images/matters1.png";
import matter2 from "../../assets/images/matters2.png";
import matter3 from "../../assets/images/matters3.png";
import matter4 from "../../assets/images/matters4.png";
import matter5 from "../../assets/images/matters10.png";
import matter6 from "../../assets/images/matters6.png";
import matter7 from "../../assets/images/matters7.png";
import matter8 from "../../assets/images/matters8.png";
import matter9 from "../../assets/images/matters9.png";
const Monitor = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="px-24 mx-auto">
      <div className="text-center py-16">
        <h1 className="text-5xl text-primary mb-12 font-medium">
          What's more important, form <br />
          or function?
        </h1>
        <p className="text-secondary">
          We didn’t think it was fair to have to choose.
        </p>
      </div>
      <div className="flex items-center ">
        <div className="basis-1/4">
          <ul>
            {data.map((d) => (
              <li
                onClick={() => setActive(d.id)}
                className={`${
                  active === d.id ? "text-[#2c0a59]" : "text-[#d0cbe6]"
                } text-xl font-medium mb-2`}
                key={d.id}
              >
                <a href={`#id${d.id}`}>{d.headline}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="basis-3/4 snap-y snap-mandatory h-[554px] overflow-scroll no-scrollbar">
          {data.map((d) => (
            <div key={d.id} id={`id${d.id}`} className="snap-start relative">
              <img className="rounded-full" src={matter1} alt="" />
              <div className="absolute left-0 right-0 top-[20%] w-2/3 text-center mx-auto">
                <h2 className="text-4xl text-white">{d.title}</h2>
                <p className="text-lg mt-32 text-white">{d.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    headline: "Carbon Dioxide",
    title: "Clouds our thinking, lowers productivity & affects our sleep",
    img: matter1,
    des: "Exhaled breath from people & pets and open flames are the most common sources.",
  },
  {
    id: 2,
    headline: "Ammonia",
    title:
      "Irritates our noses and throats, amplifies allergies & triggers asthma.",
    img: matter2,
    des: "Cleaning products are the most common sources.",
  },
  {
    id: 3,
    headline: "Formaldehyde",
    title:
      "Irritates the eyes, nose, throat & skin - and is often linked to cancer.",
    img: matter3,
    des: "Pressed wood products like easy-to-assemble furniture are the most common sources.",
  },
  {
    id: 4,
    headline: "Nitrogen Dioxide",
    title: "Causes permanent damage to our respiratory system.",
    img: matter4,
    des: "Wood fireplaces & fuel powered appliances are the most common sources.",
  },
  {
    id: 5,
    headline: "Butanal",
    title: "Irritates our lungs causing coughing and shortness of breath.",
    img: matter5,
    des: "Garbage, scented candles & cigarette smoke are the most common sources.",
  },
  {
    id: 6,
    headline: "Particulate Matter",
    title:
      "Irritates our lungs, aggravates allergies & can increase virus spread.",
    img: matter6,
    des: "Cooking, cleaning & particles coming from the outdoors are the most common sources.",
  },
  {
    id: 7,
    headline: "Ethanol",
    title: "Causes headaches, nausea & irritates our lungs.",
    img: matter7,
    des: "Cleaning detergents & hand sanitizers are the most common sources.",
  },
  {
    id: 8,
    headline: "Tobacco Odour",
    title: "Seeps into furniture and can linger in a space for a long time.",
    img: matter8,
    des: "If smoking is not allowed in your space, keep an eye behind closed doors.",
  },
  {
    id: 9,
    headline: "Humidity",
    title:
      "Causes mold growth that triggers asthma & irritates our ears, nose and throat.",
    img: matter9,
    des: "If humidity is too low, viruses can more easily survive and be transmitted.",
  },
];
export default Monitor;
