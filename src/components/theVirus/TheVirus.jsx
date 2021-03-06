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
    <div className="xl:px-12 px-8 gap-6 py-24 mx-auto flex flex-col sm:flex-row justify-between items-center">
      <div className="sm:w-1/2 w-full">
        <video
          ref={videoRef}
          src={
            "https://getnoze.com/wp-content/themes/twentytwentyone/noze/assets/movies/NOZEabout1.mp4"
          }
          width={"100%"}
          height={"100px"}
          playsInline={true}
          preload="auto"
          muted="muted"
        ></video>
      </div>
      <div className="sm:w-1/2 w-full">
        <h1 className="text-primary text-3xl lg:text-4xl xl:text-5xl font-medium mb-12">
          Сonquer the Virus
        </h1>
        <p className="text-secondary lg:text-lg text-sm">
          Noze tracks the airborne markers (VOCs) associated with the
          Coronavirus family. Our AI uses that information to deliver a
          real-time risk index that will not only tell you if your space is
          prone to spreading the virus, but whether there’s a chance the virus
          is actually in the air.
        </p>
      </div>
    </div>
  );
};

export default TheMold;
