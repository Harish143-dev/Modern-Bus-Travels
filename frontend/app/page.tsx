"use client";
import React, { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import TourPackages from "../components/traelPackages/TourPackages";
import Feedbacks from "../components/feedback/Feedbacks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollUpButton from "@/components/ScrollUpButton";
import { useGSAP } from "@gsap/react";
import Services from "../components/our Services/Services";

gsap.registerPlugin(ScrollTrigger);

const StickySections = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const stickyCards =
        containerRef.current.querySelectorAll<HTMLDivElement>(
          ".sticky-section"
        );

      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
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
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden">
      <div className="sticky-section section bg-background">
        <HeroSection />
      </div>
      <div className="sticky-section section bg-background">
        <Services />
      </div>
      <div className="sticky-section section bg-card">
        <TourPackages />
      </div>
      <div className="sticky-section section bg-background">
        <Feedbacks />
      </div>
      <ScrollUpButton />
    </div>
  );
};

export default StickySections;
