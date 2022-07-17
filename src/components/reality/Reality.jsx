import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import vi from "../../assets/video/WALP.mp4";
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
        <h1 className="text-5xl text-primary mb-12 font-medium">
          What's more important, form <br />
          or function?
        </h1>
        <p className="text-secondary">
          We didn’t think it was fair to have to choose.
        </p>
      </div>
      <video
        ref={videoRef}
        src={vi}
        width={"100%"}
        height={"100px"}
        playsinline={true}
        preload="auto"
        muted="muted"
      ></video>
    </>
  );
}

export default Reality;
