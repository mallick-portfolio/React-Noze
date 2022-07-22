import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const TheMold = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = videoRef.current;
    ScrollTrigger.create({
      trigger: el,
      start: "top center",
      end: "bottom center",
      onEnter: () => el.play(),
      onEnterBack: () => el.play(),
    });
  }, []);
  return (
    <div className="xl:px-12 px-8 py-24 mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="sm:w-1/2 w-auto sm:pr-24">
        <h1 className="text-primary lg:text-4xl xl:text-5xl md:text-3xl font-medium mb-12">
          Break the Mold
        </h1>
        <p className="text-secondary lg:text-lg text-sm">
          NOZE monitors the air for spores and other markers associated with the
          most common types of indoor mold. Our mold index will tell you if it's
          likely that there’s mold around and whether your space is in danger of
          being a breeding ground.
        </p>
      </div>
      <div className="sm:w-1/2 w-auto">
        <video
          ref={videoRef}
          src={
            "https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout2.mp4"
          }
          width={"100%"}
          height={"100px"}
          playsInline={true}
          preload="auto"
          muted="muted"
        ></video>
      </div>
    </div>
  );
};

export default TheMold;
