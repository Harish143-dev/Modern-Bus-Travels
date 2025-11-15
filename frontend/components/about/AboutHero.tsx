"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import ScrollDownIcons from "@/components/ScrollDownIcons";

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
    resolvedTheme === "dark"
      ? "/bg/eicherDarkBg.jpg"
      : "/bg/eicherLightBg.jpg";

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
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-muted-foreground"
        >
          Experience the journey with BSK Travels
        </h1>
        <p ref={subtitleRef} className="text-muted-foreground max-w-2xl">
          Discover a new era of bus travels in India, where luxury, comfort,
          and safety are paramount
        </p>
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