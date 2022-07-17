import React, { useEffect, useState } from "react";
import vi from "../../assets/video/m_about1.mp4";
import about from "../../assets/images/about2.gif";
const Ordinary = () => {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (show1) {
        setShow1(!show1);
        setShow2(!show2);
      }
      if (show2) {
        setShow1(!show1);
        setShow2(!show2);
      }
    }, 5000);
  }, [show1, show2]);
  return (
    <div className="px-12 gap-6 my-24 mx-auto flex justify-between items-center">
      <div className="w-1/2 my-6">
        <h1 className="text-primary text-5xl font-medium ">
          Anything but ordinary.
        </h1>
        <p className="text-secondary text-lg mt-4">
          Some would say it's out of this world. That’s not far off.
        </p>
        <div className="mt-6">
          <div
            onClick={() => {
              setShow1(!show1);
              setShow2(!show2);
            }}
            className={`border-l duration-500 transition-all border-primary pl-6 overflow-hidden ${
              show1 ? "h-32" : "h-8"
            }`}
          >
            <h3 className="text-lg text-primary cursor-pointer font-medium ">
              NASA INSPIRED
            </h3>
            <p className="text-secondary mt-4 text-base">
              NOZE is powered by a single sensor built on years of NASA
              innovation. Our technology raises the bar to new heights by using
              the digital sense of smell to keep track of the air you’re
              breathing.
            </p>
          </div>
          <div
            onClick={() => {
              setShow1(!show1);
              setShow2(!show2);
            }}
            className={`border-l duration-500 transition-all border-primary pl-6 overflow-hidden mt-6 ${
              show2 ? "h-32" : "h-8"
            }`}
          >
            <h3 className="text-lg text-primary cursor-pointer font-medium">
              ENGINEERED TO THINK
            </h3>
            <p className="text-secondary mt-4 text-base">
              NOZE uses artificial intelligence to decode the air around you in
              real-time, all the time. It actively samples the air every second
              and breaks things down into specifics so that you can act while it
              matters.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div>
          {show1 && !show2 ? (
            <div className="duration-500 transition-all">
              <img
                className="rounded-full ml-8 w-[420px] h-[420px]"
                src={about}
                alt=""
              />
            </div>
          ) : (
            <div className="duration-500 transition-all">
              <video
                loop={true}
                src={vi}
                autoPlay={true}
                width={"100%"}
                height={"100px"}
                playsInline={true}
                preload="auto"
                muted="muted"
              ></video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ordinary;
