"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface HeadingType {
  title: string;
  subtitle: string;
}

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ title, subtitle }: HeadingType) => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
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
      scale: 0.8,
      ease: "power3.out",
      duration: 0.8,
    });

    tl.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      scale: 0.9,
      ease: "power3.out",
      duration: 0.8,
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
