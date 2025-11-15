"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface HeadindType {
  title: string;
  subtitle: string;
}
gsap.registerPlugin(ScrollTrigger);
const Heading = ({ title, subtitle }: HeadindType) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    // gsap.from(".titleHead", {
    //   opacity: 0,
    //   x: 100,
    //   duration: 1,
    //   ease: "power3.in",
    // });
    // gsap.from(subtitleRef.current, {
    //   opacity: 0,
    //   x: -100,
    //   duration: 1,
    //   ease: "power2.in",
    //   delay: 0.5,
    // });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.5,
      ease: "power3.inOut",
      duration: 1,
    });

    tl.from(subtitleRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.5,
      ease: "power3.inOut",
      duration: 1,
      delay: 1,
    });
  }, []);
  return (
    <div className="text-center w-full">
      <h1 ref={titleRef} className="titleHead text-3xl font-bold">
        {title}
      </h1>
      <p ref={subtitleRef} className="px-5 lg-px-50 text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
