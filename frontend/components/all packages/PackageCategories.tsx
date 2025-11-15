"use client";

import React, { useEffect, useRef } from "react";
import { StaticImageData } from "next/image";
import PackageCard from "./PackageCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface PackageCategoriesProps {
  pkgCategory: {
    id: number;
    category: string;
    subPackages?: {
      id: number;
      title: string;
      duration: string;
      img: string | StaticImageData;
      description: string;
    }[];
  };
}

const PackageCategories: React.FC<PackageCategoriesProps> = ({
  pkgCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<number | null>(null);

  // Title animation
  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, {});

  // Horizontal auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        scrollContainer.scrollBy({
          left: scrollContainer.clientWidth,
          behavior: "smooth",
        });
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 8000);
    };

    startAutoScroll();

    const handleMouseEnter = () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
    const handleMouseLeave = () => startAutoScroll();

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Manual scroll buttons
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount =
      direction === "right" ? container.clientWidth : -container.clientWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Card animation on load (staggered)
  useEffect(() => {
    const cards = scrollRef.current?.children;
    if (!cards) return;

    gsap.from(cards, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full relative h-full flex justify-center items-baseline flex-col">
      {/* Category Title */}
      <h3
        ref={textRef}
        className="text-2xl font-semibold border-l-4 border-primary pl-3 z-30 mb-5"
      >
        {pkgCategory.category} Packages
      </h3>

      {/* Left Scroll Button */}
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 p-2 rounded-full bg-background/50 hover:bg-background/80 transition"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="p-5 flex w-full overflow-x-auto rounded-2xl scroll-smooth gap-6 pb-4 relative z-20 scrollbar-hide"
      >
        {pkgCategory.subPackages?.map((subPkg) => (
          <PackageCard key={subPkg.id} subPkg={subPkg} />
        ))}
      </div>

      {/* Left Gradient Overlay */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-20 bg-gradient-to-r from-muted via-muted/50 to-transparent" />

      {/* Right Gradient Overlay */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-20 bg-gradient-to-l from-muted via-muted/50 to-transparent" />
    </div>
  );
};

export default PackageCategories;
