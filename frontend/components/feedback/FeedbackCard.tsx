"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = () => {
  const feedbackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".feedback-card") as HTMLElement[];

    gsap.from(cards, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: feedbackRef.current,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={feedbackRef}
      className="flex max-md:flex-col p-5 justify-between items-center gap-5"
    >
      <Card className="feedback-card w-full max-w-md h-fit shadow-lg hover:shadow-xl transition-shadow">
        <CardContent>
          <p className="text-gray-700">
            “Our family trip with BSK Travels was absolutely amazing! The bus
            was clean and comfortable, and the driver was friendly and
            professional. Everything from hotel booking to sightseeing was
            perfectly organized. We can’t wait to travel with them again!”
          </p>
        </CardContent>
        <CardFooter>
          <p className="font-semibold text-gray-600">Priya R., Chennai</p>
        </CardFooter>
      </Card>

      <Card className="feedback-card w-full max-w-md h-fit shadow-lg hover:shadow-xl transition-shadow">
        <CardContent>
          <p className="text-gray-700">
            “BSK Travels offered a great mix of spiritual and scenic
            destinations. The bus was comfortable, and our guide was very
            knowledgeable. It felt safe, relaxed, and enjoyable from start to
            finish.”
          </p>
        </CardContent>
        <CardFooter>
          <p className="font-semibold text-gray-600">
            Rajesh K., Tiruchirappalli
          </p>
        </CardFooter>
      </Card>

      <Card className="feedback-card w-full max-w-md h-fit shadow-lg hover:shadow-xl transition-shadow">
        <CardContent>
          <p className="text-gray-700">
            “Excellent travel experience! Our group tour was handled very
            smoothly — good communication, friendly staff, and timely pickups.
            Totally worth the price. Highly recommended for anyone planning a
            vacation.”
          </p>
        </CardContent>
        <CardFooter>
          <p className="font-semibold text-gray-600">Arun S., Madurai</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeedbackCard;
