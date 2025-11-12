"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import ScrollDownIcons from "./ScrollDownIcons";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import BasicEnquiries from "./BasicEnquiries";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Delay fade-in slightly for smoother theme transition
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!heroRef.current || !bgRef.current) return;

    // Hero content animation
    const elements = gsap.utils.toArray(heroRef.current.children);
    gsap.from(elements, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: "power3.out",
    });

    // Background animation
    gsap.from(bgRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1.5,
      ease: "power2.out",
    });
  }, [mounted]);

  // Avoid SSR mismatch by rendering a neutral background before mount
  if (!mounted) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" />
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
  const bgImage =
    currentTheme === "dark" ? "/bg/eicherDarkBg.jpg" : "/bg/eicherLightBg.jpg";

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className={
          "absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        }
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative z-20 flex flex-col items-center justify-center gap-5 px-6"
      >
        <h1 className="text-4xl md:text-5xl text-muted-foreground font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
          Explore Tamil Nadu with BSK Travels
        </h1>

        <p className="text-lg md:text-xl font-medium text-muted-foreground drop-shadow-2xl">
          Your journey to unforgettable experiences begins here
        </p>

        <p className="max-w-2xl text-sm md:text-base text-muted-foreground font-semibold leading-relaxed">
          Discover the rich culture, breathtaking landscapes, and hidden gems of
          Tamil Nadu. From serene beaches to majestic temples — every trip is
          crafted for memories that last a lifetime.
        </p>

        <BasicEnquiries />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>
      <ScrollDownIcons />
    </section>
  );
};

export default HeroSection;
