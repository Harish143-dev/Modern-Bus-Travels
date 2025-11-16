"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollDownIcons from "../ScrollDownIcons";
import { useTheme } from "next-themes";
import BasicEnquiries from "../BasicEnquiries";
import Image from "next/image";
import HeroHeading from "../HeroHeading";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useGSAP(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background animation on load
      if (bgRef.current) {
        gsap.from(bgRef.current, {
          opacity: 0,
          scale: 1.2,
          duration: 1.5,
          ease: "power2.out",
        });
      }

      // Content fade in
      if (contentRef.current) {
        const elements = contentRef.current.children;
        gsap.from(elements, {
          opacity: 0,
          y: 60,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Parallax scroll effect
      gsap.to(bgRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" />
    );
  }

  const bgImage =
    resolvedTheme === "dark" ? "/bg/parallaxNight.jpg" : "/bg/parallaxDay.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[130vh] flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute h-[120%] w-full will-change-transform pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center gap-5 px-6 max-w-5xl will-change-transform"
      >
        <HeroHeading
          title="Explore Tamil Nadu with BSK Travels"
          subTitle=" Your journey to unforgettable experiences begins here"
          para=" Discover the rich culture, breathtaking landscapes, and hidden gems of
          Tamil Nadu. From serene beaches to majestic temples — every trip is
          crafted for memories that last a lifetime."
        />
        <BasicEnquiries />
      </div>

      <ScrollDownIcons />
    </section>
  );
}
