"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import BasicEnquiries from "./BasicEnquiries";

gsap.registerPlugin(ScrollTrigger);

// Types for the component props
interface ParallaxHeroProps {
  // Background images
  lightBgImage: string;
  darkBgImage: string;
  bgAlt?: string;

  // Section styling
  height?: string;
  className?: string;

  // Animation configuration
  animations?: {
    bgInitialScale?: number;
    bgParallaxDistance?: number;
    contentFadeDistance?: number;
    staggerDelay?: number;
  };

  // Gradient overlay
  showGradient?: boolean;
  gradientClassName?: string;

  // Content
  children: React.ReactNode;

  // Additional elements
  showScrollIndicator?: boolean;
  scrollIndicator?: React.ReactNode;

  // Loading state
  loadingComponent?: React.ReactNode;
}

export function ParallaxHero({
  lightBgImage,
  darkBgImage,
  bgAlt = "Background",
  height = "h-[130vh]",
  className = "",
  animations = {},
  showGradient = true,
  gradientClassName = "bg-gradient-to-t from-black/80 via-black/60 to-transparent",
  children,
  showScrollIndicator = false,
  scrollIndicator,
  loadingComponent,
}: ParallaxHeroProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animation defaults
  const {
    bgInitialScale = 1.2,
    bgParallaxDistance = 100,
    contentFadeDistance = -50,
    staggerDelay = 0.15,
  } = animations;

  useEffect(() => setMounted(true), []);

  useGSAP(() => {
    if (!mounted || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Background animation on load
      if (bgRef.current) {
        gsap.from(bgRef.current, {
          opacity: 0,
          scale: bgInitialScale,
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
          stagger: staggerDelay,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Parallax scroll effect
      gsap.to(bgRef.current, {
        y: bgParallaxDistance,
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
        y: contentFadeDistance,
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
  }, [
    mounted,
    bgInitialScale,
    bgParallaxDistance,
    contentFadeDistance,
    staggerDelay,
  ]);

  // Loading state
  if (!mounted) {
    return (
      loadingComponent || (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" />
      )
    );
  }

  const bgImage = resolvedTheme === "dark" ? darkBgImage : lightBgImage;

  return (
    <section
      ref={sectionRef}
      className={`relative w-full ${height} flex flex-col items-center justify-center text-center overflow-hidden ${className}`}
    >
      {/* Parallax Background */}
      <div
        ref={bgRef}
        className="absolute h-[120%] w-full will-change-transform pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={bgImage}
          alt={bgAlt}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      {showGradient && (
        <div
          className={`absolute inset-0 z-10 ${gradientClassName}`}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center gap-5 px-6 max-w-5xl will-change-transform"
      >
        {children}
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && scrollIndicator}
    </section>
  );
}
