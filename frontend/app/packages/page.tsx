"use client";

import React, { useEffect, useRef, useState } from "react";
import { PACKAGES } from "@/constants";
import PackageCategories from "@/components/all packages/PackageCategories";
import ScrollUpButton from "@/components/ScrollUpButton";
import ScrollDownIcons from "@/components/ScrollDownIcons";
import { useTheme } from "next-themes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!titleRef.current || !subtitleRef.current || !containerRef.current)
      return;

    // Hero Title / Subtitle Animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.3,
      ease: "power3.out",
    });

    // Background fade-in
    if (bgRef.current) {
      gsap.from(bgRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.5,
        ease: "power2.out",
      });
    }

    // Sticky Cards
    const stickyCards =
      containerRef.current.querySelectorAll<HTMLDivElement>(".sticky-card");
    stickyCards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        scrub: true,
      });

      // Optional subtle scale/rotation effect
      if (index < stickyCards.length - 1) {
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const scale = 1 - progress * 0.05; // smaller scale effect
            const rotation = (index % 2 === 0 ? 2 : -2) * progress; // subtle rotation
            gsap.set(card, { scale, rotation });
          },
        });
      }
    });

    // Clean up ScrollTriggers on unmount
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [mounted]);

  // Avoid SSR mismatch by rendering a neutral background before mount
  if (!mounted) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" />
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
  const bgImage =
    currentTheme === "dark" ? "/bg/cruzioDarkBg.jpg" : "/bg/cruzioLightBg.jpg";
  if (!mounted) return null;

  return (
    <main>
      {/* Hero Section */}
      <section className="w-full relative h-screen flex flex-col items-center justify-center">
        <div
          ref={bgRef}
          style={{ backgroundImage: `url(${bgImage})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full z-0 will-change-transform"
        ></div>

        <div className="z-20 text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl text-muted-foreground font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
          >
            Our Travel Packages
          </h2>
          <p
            ref={subtitleRef}
            className="font-semibold max-w-lg mx-auto max-sm:px-5 text-muted-foreground"
          >
            Explore Tamil Nadu’s beauty through customized travel experiences.
          </p>
        </div>

        <ScrollDownIcons />

        {/* Gradient overlays */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-card/0 via-card/10 to-transparent z-10" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>
      </section>

      {/* Packages Section */}
      <section className="relative w-full" ref={containerRef}>
        {PACKAGES.map((pkgCategory) => (
          <div
            key={pkgCategory.id}
            className="sticky-card relative pt-16 w-full min-h-screen flex items-center justify-center bg-muted will-change-transform"
          >
            <PackageCategories pkgCategory={pkgCategory} />
          </div>
        ))}
      </section>

      <ScrollUpButton />
    </main>
  );
};

export default Packages;
