"use client";

import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FormDailog from "../FormDailog";

gsap.registerPlugin(ScrollTrigger);

interface SubPackage {
  id: number;
  title: string;
  duration: string;
  image: string | StaticImageData;
  description: string;
}

interface PackageCardProps {
  subPkg: SubPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ subPkg }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, scale: 0.6 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          end: "bottom 60%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, {});

  return (
    <div
      ref={cardRef}
      className="
        flex-shrink-0 w-xs md:w-sm lg:w-md 
        rounded-2xl overflow-hidden shadow-lg bg-card
        hover:shadow-xl transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative h-62 md:h-46 lg:h-46 w-full">
        <Image
          src={subPkg.image}
          alt={subPkg.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h4 className="text-lg font-semibold mb-1">{subPkg.title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{subPkg.duration}</p>
        <p className="text-sm mb-4 line-clamp-3">{subPkg.description}</p>

        <div className="w-full">
          <FormDailog subPkg={subPkg} />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
