"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TourPackagesCard from "./TourPackagesCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const TourPackages = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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
    <div className="py-16 px-5 h-full flex items-center justify-center flex-col w-full">
      <div className="text-center">
        <h1 ref={titleRef} className="text-3xl font-bold">
          Tour Package
        </h1>
        <p ref={subtitleRef} className="text-sm text-gray-600 max-w-lg mx-auto">
          Experience the charm of South India with our handpicked travel routes
        </p>
      </div>

      {/* Each card should have className="package-card" */}
      <TourPackagesCard />
    </div>
  );
};

export default TourPackages;
