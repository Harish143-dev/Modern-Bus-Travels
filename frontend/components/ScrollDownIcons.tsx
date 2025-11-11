import { faArrowDownLong, faMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ScrollDownIcons = () => {
  const scrollIconRed = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!scrollIconRed.current) return;
    gsap.fromTo(
      scrollIconRed.current,
      { opacity: 1, y: -100 }, // starting state
      {
        y: 0, // end state
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: scrollIconRed.current,
          start: "bottom 90%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, {});
  return (
    <div
      ref={scrollIconRed}
      className="absolute bottom-5 m-auto flex flex-col items-center justify-center gap-2"
    >
      <FontAwesomeIcon icon={faMouse} className="text-xl" />
      <FontAwesomeIcon icon={faArrowDownLong} />
    </div>
  );
};

export default ScrollDownIcons;
