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
      scroller: ".appVideos",
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
      <div className="appVideos">
        <div className="videoPlayer">
          <video
            ref={videoRef}
            src={vi}
            width={"100%"}
            height={"100px"}
            playsinline="true"
            webkit-playsinline="true"
            preload="auto"
            muted="muted"
          ></video>
        </div>
      </div>
    </>
  );
}

export default Reality;
