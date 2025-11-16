"use client";

import React, { useRef, lazy, Suspense } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ParallaxHero } from "../ParallaxHero";
import HeroHeading from "../HeroHeading";

// Lazy load sections that aren't immediately visible
const Services = lazy(() => import("@/components/home/Services"));
const TourPackages = lazy(() => import("@/components/home/TourPackages"));
const Feedbacks = lazy(() => import("@/components/home/Feedbacks"));

gsap.registerPlugin(ScrollTrigger);

// Loading fallback component
function SectionLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-pulse text-muted-foreground">Loading...</div>
    </div>
  );
}

export default function HomeSections() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const stickyCards =
        containerRef.current.querySelectorAll<HTMLDivElement>(
          ".sticky-section"
        );

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
              const nextCard = stickyCards[index + 1];

              // Calculate pin duration based on viewport height
              const pinDuration = window.innerHeight * 1; // Pin for 1 full viewport scroll

              ScrollTrigger.create({
                trigger: card,
                start: "top top",
                end: `+=${pinDuration}px`, // Pin for specific pixel amount
                pin: true,
                pinSpacing: false,
                scrub: 1, // Smooth scrub (0-3, higher = smoother but slower)
                // markers: true, // Uncomment to see start/end markers
              });

              // Animation that happens while scrolling through next card
              ScrollTrigger.create({
                trigger: nextCard,
                start: "top bottom",
                end: "top top",
                scrub: 1,
                onUpdate: (self) => {
                  const progress = self.progress;
                  const scale = 1 - progress * 0.15;
                  const rotation = (index % 2 === 0 ? 3 : -3) * progress;

                  gsap.set(card, {
                    scale,
                    rotation,
                    transformOrigin: "center center",
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
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Hero loads immediately */}
      <section className="sticky-section min-h-screen bg-background">
        <ParallaxHero
          lightBgImage="/bg/parallaxDay1.jpg"
          darkBgImage="/bg/parallaxNight1.jpg"
          animations={{
            bgParallaxDistance: 150, // More dramatic parallax
            staggerDelay: 0.2,
          }}
        >
          <HeroHeading
            title="Explore Tamil Nadu with BSK Travels"
            subTitle=" Your journey to unforgettable experiences begins here"
            para=" Discover the rich culture, breathtaking landscapes, and hidden gems of
          Tamil Nadu. From serene beaches to majestic temples — every trip is
          crafted for memories that last a lifetime."
          />
        </ParallaxHero>
      </section>

      {/* Other sections load lazily */}
      <section className="sticky-section min-h-screen bg-background lg:mt-[50vh]">
        <Suspense fallback={<SectionLoader />}>
          <Services />
        </Suspense>
      </section>

      <section className="sticky-section min-h-screen bg-card lg:mt-[50vh]">
        <Suspense fallback={<SectionLoader />}>
          <TourPackages />
        </Suspense>
      </section>

      <section className="sticky-section min-h-screen bg-background lg:mt-[50vh]">
        <Suspense fallback={<SectionLoader />}>
          <Feedbacks />
        </Suspense>
      </section>
    </div>
  );
}
