"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import ScrollDownIcons from "@/components/ScrollDownIcons";
import HeroHeading from "../HeroHeading";

export default function AboutHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      // Hero animations
      if (bgRef.current) {
        gsap.from(bgRef.current, {
          opacity: 0,
          scale: 1.1,
          duration: 1.5,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) {
    return <div className="w-full h-screen bg-gray-100 dark:bg-gray-900" />;
  }

  const bgImage =
    resolvedTheme === "dark" ? "/bg/eicherDarkBg.jpg" : "/bg/eicherLightBg.jpg";

  return (
    <section className="sticky-card relative w-full h-screen flex items-center justify-center">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-no-repeat bg-center scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center gap-5 px-6 text-center">
        <HeroHeading
          title="Experience the journey with BSK Travels"
          subTitle="Discover a new era of bus travels in India, where luxury, comfort, and safety are paramount"
        />
      </div>

      <ScrollDownIcons />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
}
