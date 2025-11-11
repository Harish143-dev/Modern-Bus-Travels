"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FEATURE_ROUTES } from "@/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureRoutesCard = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 25%",
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="flex justify-between items-center max-md:flex-col max-md:justify-center gap-6 px-5 pt-8 w-full">
      {FEATURE_ROUTES.map((route, i) => (
        <div
          key={route.id}
          ref={(el) => {
            if (el) cardsRef.current[i] = el;
          }}
          className="shadow-lg bg-card text-card-foreground hover:shadow-xl hover:-translate-y-1 transition-all rounded-2xl max-w-md w-full overflow-hidden flex flex-col"
        >
          {/* Image */}
          <div className="relative w-full h-52">
            <Image
              src={route.img}
              alt={route.place}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Card content */}
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-lg font-semibold">{route.place}</h1>
              <p className="text-sm">{`From ₹${route.price}`}</p>
            </div>

            <Accordion type="single" collapsible className="mt-1">
              <AccordionItem value={`details-${route.id}`}>
                <AccordionTrigger>
                  <p className="w-full cursor-pointer">View</p>
                </AccordionTrigger>

                <AccordionContent className="text-gray-700 mt-2">
                  <p className="mb-2">{route.description}</p>
                  <Button className="w-full">Enquire</Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureRoutesCard;
