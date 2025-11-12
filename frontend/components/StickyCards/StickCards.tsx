"use client";

import React, { useEffect, useRef } from "react";
import { SERVICES } from "@/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickCards = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    const stickyCards =
      container.current.querySelectorAll<HTMLDivElement>(".sticky-card");

    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        // Pin the current card
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: stickyCards[stickyCards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });

        // Animate scale, rotation, after-opacity when next card scrolls over
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.25;
            const rotation = (index % 2 === 0 ? 5 : -5) * progress;

            gsap.set(card, {
              scale,
              rotation,
              "--after-opacity": progress,
            });
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={container}>
      {SERVICES.map((route) => (
        <div
          key={route.id}
          className="sticky-card relative w-full bg-gray-500 h-screen flex p-5 gap-3 will-change-transform"
        >
          <div className="flex-4 pt-2">
            <div className="flex w-[75%] flex-col gap-2">
              <h1 className="text-2xl font-bold">{route.title}</h1>
              <p>{route.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StickCards;
