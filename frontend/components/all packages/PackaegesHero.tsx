"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import gsap from "gsap";
import ScrollDownIcons from "@/components/ScrollDownIcons";
import HeroHeading from "../HeroHeading";

export default function PackagesHero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !titleRef.current || !subtitleRef.current) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.from(bgRef.current, {
          opacity: 0,
          scale: 1.05,
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
    resolvedTheme === "dark" ? "/bg/cruzioDarkBg.jpg" : "/bg/cruzioLightBg.jpg";

  return (
    <section className="w-full relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        ref={bgRef}
        style={{ backgroundImage: `url(${bgImage})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        aria-hidden="true"
      />

      <div className="relative z-20 text-center px-4">
        <HeroHeading
          title=" Our Travel Packages"
          subTitle="Explore Tamil Nadu's beauty through customized travel experiences."
        />
      </div>

      <ScrollDownIcons />

      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
}
