"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FEEDBACKS = [
  {
    id: 1,
    name: "Kavya R",
    location: "Chennai",
    feedback:
      "Our trip to Ooty was perfectly organized by BSK Travels! The bus was comfortable and the staff were friendly throughout the journey.",
  },
  {
    id: 2,
    name: "Arjun M",
    location: "Madurai",
    feedback:
      "Fantastic experience! Great communication, comfortable ride, and amazing tourist spots. Highly recommend BSK Travels!",
  },
  {
    id: 3,
    name: "Priya S",
    location: "Coimbatore",
    feedback:
      "Very professional team. Our family trip to Kodaikanal was smooth and well-planned. Will definitely book again!",
  },
];

const Feedbacks = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    gsap.from(subtitleRef.current, {
      opacity: 0,
      y: 80,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    // Animate each feedback card
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-center mb-10">
        <h2 ref={titleRef} className="text-3xl font-bold">
          What Our Customers Say
        </h2>
        <p ref={subtitleRef} className="text-sm text-gray-600 max-w-lg mx-auto">
          Hear from those who have traveled with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 pt-8">
        {FEEDBACKS.map((f, i) => (
          <div
            key={f.id}
            ref={(el) => {
              if (el) cardsRef.current[i] = el;
            }}
            className="bg-card text-card-foreground rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center"
          >
            <p className="text-gray-700 italic mb-3">“{f.feedback}”</p>
            <h3 className="font-semibold text-lg">{f.name}</h3>
            <span className="text-sm text-gray-500">{f.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
