"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicesCard from "./ServicesCard";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "back.inOut",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 80,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="py-16 px-5 flex flex-col items-center justify-center w-full h-full">
      {/* Header */}
      <div className="text-center mb-3">
        <h1 ref={titleRef} className="text-3xl font-bold">
          Our Services
        </h1>
        <p ref={subtitleRef} className="text-sm text-gray-600 max-w-lg mx-auto">
          Discover our Services and book your next adventure with BSK Travels.
        </p>
      </div>

      {/* Cards */}
      <ServicesCard />
    </div>
  );
};

export default Services;
