"use client";
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollUpButton = () => {
  const handleTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const btnRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, y: 100 }, // starting state
      {
        opacity: 1,
        y: 0, // end state
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btnRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, {});
  return (
    <div ref={btnRef} className="fixed right-5 bottom-5 inline-block z-20">
      <button
        className="h-10 w-10 bg-primary/40 backdrop-blur-sm text-primary-foreground rounded-full  hover:bg-primary/60 transtion-all"
        onClick={handleTopScroll}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
};

export default ScrollUpButton;
