"use client";

import React, { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { BUSES } from "@/constants"; // import your BUSES array
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface BusImage {
  src: string;
}

interface Feature {
  title: string;
  icon: any;
}

interface Bus {
  id: number;
  title: string;
  bus: string;
  img: BusImage[];
  features: Feature[];
}

const BusesCard = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  // Animation
  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      let x = 0;
      let y = 0;

      if (i === 0) x = -100; // left card from left
      if (i === 1) y = 100; // center card from bottom
      if (i === 2) x = 100; // right card from right

      gsap.from(card, {
        opacity: 0,
        x,
        y,
        duration: 2,
        ease: "power3.out",
        delay: i * 0.5,
      });
    });
  }, []);

  // Store current index of each slideshow
  const [indexes, setIndexes] = useState<number[]>(() =>
    Array(BUSES.length).fill(0)
  );

  // Auto-change images every 3 seconds for each bus
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((current, i) => (current + 1) % BUSES[i].img.length)
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-5 w-full">
      {BUSES.map((bus, i) => (
        <div
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          key={bus.id}
          className="rounded-2xl overflow-hidden shadow-xl bg-card w-full text-card-foreground"
        >
          <div className="relative w-full h-48 overflow-hidden">
            {bus.img.map(
              (image: { src: StaticImageData }, imgIndex: number) => (
                <div
                  key={imgIndex}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imgIndex === indexes[i] ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={bus.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )
            )}
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold">{bus.title}</h2>
            <p>{bus.bus}</p>
            <p className="text-sm font-semibold text-muted-foreground mb-3">
              <span className="pr-1 text-sm text-blue-500">
                <FontAwesomeIcon icon={faUser} />
              </span>
              {`Passanger Capacity - ${bus.seatCapacity} Seats`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mb-3">
              {bus.features.map((f, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <FontAwesomeIcon
                    icon={f.icon}
                    className="text-blue-500 text-sm"
                  />
                  <span className="text-sm">{f.title}</span>
                </div>
              ))}
            </div>

            <div className="w-full">
              <Button className="w-full">View Details</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusesCard;
