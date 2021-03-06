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
  const [active, setActive] = useState(1);

  return (
    <>
      <div className="xl:px-12 px-8 my-12 mx-auto">
        <div className="text-center lg:py-16 md:py-8">
          <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-primary lg:mb-12 mb-4 font-medium">
            What's more important, form <br />
            or function?
          </h1>
          <p className="text-secondary">
            We didn’t think it was fair to have to choose.
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center ">
          <div className="lg:basis-1/4">
            <ul>
              {data.map((d) => (
                <li
                  onClick={() => setActive(d.id)}
                  className={`${
                    active === d.id
                      ? "text-[#2c0a59] active"
                      : "text-[#d0cbe6] lg:block hidden"
                  } text-xl font-medium mb-2`}
                  key={d.id}
                >
                  <a className="lg:block hidden" href={`#${d.dataName}`}>
                    {d.headline}
                  </a>
                  <a
                    className="block lg:hidden w-4 h-4 bg-red-500 rounded-full mt-4"
                    href={`#${d.dataName}`}
                  >
                    {""}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:basis-3/4 snap-y snap-mandatory h-[230px] md:h-[460px] lg:h-[445px] xl:h-[590px] overflow-hidden">
            {data.map((d) => (
              <div
                key={d.id}
                id={`${d.dataName}`}
                className="snap-start relative"
              >
                <img className="rounded-full" src={d.img} alt="" />
                <div className="absolute left-0 right-0 top-[20%] w-2/3 text-center mx-auto">
                  <h2 className="xl:text-4xl lg:text-3xl text-xl text-white">{d.title}</h2>
                  <p className="sm:text-lg text-xs mt-2 lg:mt-32 md:mt-12 text-white">{d.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    id: 1,
    dataName: "first",
    headline: "Carbon Dioxide",
    title: "Clouds our thinking, lowers productivity & affects our sleep",
    img: matter1,
    des: "Exhaled breath from people & pets and open flames are the most common sources.",
  },
  {
    id: 2,
    dataName: "two",
    headline: "Ammonia",
    title:
      "Irritates our noses and throats, amplifies allergies & triggers asthma.",
    img: matter2,
    des: "Cleaning products are the most common sources.",
  },
  {
    id: 3,
    dataName: "three",
    headline: "Formaldehyde",
    title:
      "Irritates the eyes, nose, throat & skin - and is often linked to cancer.",
    img: matter3,
    des: "Pressed wood products like easy-to-assemble furniture are the most common sources.",
  },
  {
    id: 4,
    dataName: "four",
    headline: "Nitrogen Dioxide",
    title: "Causes permanent damage to our respiratory system.",
    img: matter4,
    des: "Wood fireplaces & fuel powered appliances are the most common sources.",
  },
  {
    id: 5,
    dataName: "five",
    headline: "Butanal",
    title: "Irritates our lungs causing coughing and shortness of breath.",
    img: matter5,
    des: "Garbage, scented candles & cigarette smoke are the most common sources.",
  },
  {
    id: 6,
    dataName: "six",
    headline: "Particulate Matter",
    title:
      "Irritates our lungs, aggravates allergies & can increase virus spread.",
    img: matter6,
    des: "Cooking, cleaning & particles coming from the outdoors are the most common sources.",
  },
  {
    id: 7,
    dataName: "seven",
    headline: "Ethanol",
    title: "Causes headaches, nausea & irritates our lungs.",
    img: matter7,
    des: "Cleaning detergents & hand sanitizers are the most common sources.",
  },
  {
    id: 8,
    dataName: "eight",
    headline: "Tobacco Odour",
    title: "Seeps into furniture and can linger in a space for a long time.",
    img: matter8,
    des: "If smoking is not allowed in your space, keep an eye behind closed doors.",
  },
  {
    id: 9,
    dataName: "nine",
    headline: "Humidity",
    title:
      "Causes mold growth that triggers asthma & irritates our ears, nose and throat.",
    img: matter9,
    des: "If humidity is too low, viruses can more easily survive and be transmitted.",
  },
];
export default Monitor;
