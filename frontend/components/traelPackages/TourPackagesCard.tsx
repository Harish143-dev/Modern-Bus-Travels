"use client";

import React, { useEffect, useRef } from "react";
import { TOUR_PACKAGES } from "@/constants";
import Image from "next/image";
import { Button } from "../ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const TourPackagesCard = () => {
  // Array of refs
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play reverse play reverse", // replays on every scroll
            // scrub: false, // keep disabled for discrete animation
            markers: false,
          },
        }
      );
    });

    // optional cleanup (useGSAP already handles this, but safe to include)
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 pt-8 w-full">
      {TOUR_PACKAGES.map((tour, i) => (
        <div
          key={tour.id}
          // assign each card to the array
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="mx-auto shadow-lg hover:shadow-xl transition-shadow rounded-2xl max-w-md w-full overflow-hidden flex flex-col bg-background text-foreground package-card"
        >
          <div className="relative w-full h-42">
            <Image
              src={tour.img}
              alt={tour.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-semibold">{tour.title}</h1>
              <p className="text-sm">{tour.place}</p>
            </div>
            <Link href={"/packages"} className="mt-2 text-center w-full">
              <Button className="w-full">More packages</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourPackagesCard;
