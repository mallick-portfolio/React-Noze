import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Reality() {
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
      onLeave: () => el.pause(),
      onLeaveBack: () => el.pause(),
    });
  }, []);
  return (
    <>
      <div className="text-center py-8">
        <h1 className="lg:text-4xl xl:text-5xl text-3xl text-primary mb-12 font-medium">
          What's more important, form <br />
          or function?
        </h1>
        <p className="text-secondary">
          We didn’t think it was fair to have to choose.
        </p>
      </div>
      <video
        ref={videoRef}
        src={"https://getnoze.com/wp-content/uploads/2021/08/WALP.mp4"}
        width={"100%"}
        height={"100px"}
        playsInline={true}
        preload="auto"
        muted="muted"
      ></video>
    </>
  );
}

export default Reality;
