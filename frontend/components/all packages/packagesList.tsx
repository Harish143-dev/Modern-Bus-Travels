"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PackageCategories from "@/components/all packages/PackageCategories";

gsap.registerPlugin(ScrollTrigger);

interface Package {
  id: number;
  category: string;
  subPackages?: any[];
}

interface PackagesListProps {
  packages: Package[];
}

export default function PackagesList({ packages }: PackagesListProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const stickyCards =
        containerRef.current!.querySelectorAll<HTMLDivElement>(".sticky-card");

      stickyCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
        });

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.05;
              const rotation = (index % 2 === 0 ? 2 : -2) * progress;
              gsap.set(card, { scale, rotation });
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [packages]);

  return (
    <section className="relative w-full" ref={containerRef}>
      {packages.map((pkgCategory) => (
        <div
          key={pkgCategory.id}
          className="sticky-card relative pt-16 w-full min-h-screen flex items-center justify-center bg-muted will-change-transform"
        >
          <PackageCategories pkgCategory={pkgCategory} />
        </div>
      ))}
    </section>
  );
}
