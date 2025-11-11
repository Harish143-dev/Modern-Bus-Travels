"use client";
import React, { useEffect, useRef } from "react";
import { BUSES } from "@/constants";
import BusesCard from "@/components/BusesCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Buses = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current || !subtitleRef.current) return;
    gsap.from(titleRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(subtitleRef.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.in",
    });
  }, {});
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 px-10 w-full">
      <section className="text-center">
        <h1 ref={titleRef} className="text-3xl font-bold">
          Explore Our Modern Fleet
        </h1>
        <p
          ref={subtitleRef}
          className="text-sm text-muted-foreground max-w-lg mx-auto"
        >
          Travel in style and comfort with our state-of-the-art buses
        </p>
      </section>

      <BusesCard />
    </main>
  );
};

export default Buses;
