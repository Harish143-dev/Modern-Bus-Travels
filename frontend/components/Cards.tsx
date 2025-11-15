"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import BasicEnquiries from "./BasicEnquiries";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ServicesTypes {
  id: number;
  img: StaticImageData;
  title: string;
  description?: string;
  place?: string;
}

interface CardProps {
  card: ServicesTypes;
  animationType?: "fade" | "flip" | "slide" | "zoom";
  index?: number; // For stagger animations
}

export default function Cards({
  card,
  animationType = "fade",
  index = 0,
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (!cardRef.current) return;

    const animations = {
      // Smooth fade with slight movement
      fade: {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
      },

      // 3D flip effect (improved from your original)
      flip: {
        opacity: 0,
        rotateY: -45, // Reduced from -90 for smoother effect
        transformOrigin: "center center",
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.2)",
      },

      // Slide from side
      slide: {
        opacity: 0,
        x: -100,
        duration: 0.7,
        ease: "power3.out",
      },

      // Zoom in effect
      zoom: {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        ease: "back.out(1.5)",
      },
    };

    // Main card animation
    gsap.from(cardRef.current, {
      ...animations[animationType],
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        end: "top 60%",
        toggleActions: "play none none none",
        // Remove scrub for snappier animation
      },
    });

    // Image reveal animation
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        clipPath: "inset(0 100% 0 0)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Content stagger animation
    if (contentRef.current) {
      const elements = contentRef.current.children;
      gsap.from(elements, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  }, [animationType]);

  // Hover animation
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: -10,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        y: 0,
        scale: 1,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="rounded-2xl overflow-hidden shadow-lg bg-card flex flex-col justify-between transition-all duration-300 [transform-style:preserve-3d] will-change-transform"
    >
      {/* Image Container */}
      <div
        ref={imageRef}
        className="relative h-48 md:h-56 lg:h-44 w-full overflow-hidden"
      >
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 ease-out"
          style={{
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="p-4 flex-grow">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{card.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {card.description || card.place}
        </p>
      </div>

      {/* Button */}
      <div className="w-full px-4 pb-4">
        <BasicEnquiries />
      </div>
    </div>
  );
}
