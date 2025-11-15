"use client";

import ScrollDownIcons from "@/components/ScrollDownIcons";
import ScrollUpButton from "@/components/ScrollUpButton";
import { Button } from "@/components/ui/button";
import { WHY_CHOOSE } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Heading } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (!containerRef.current) return;

    const container = containerRef.current;

    // === Animate Hero Section ===
    const heroTitle =
      container.querySelector<HTMLHeadingElement>(".hero-title");
    const heroSubtitle =
      container.querySelector<HTMLParagraphElement>(".hero-subtitle");
    const heroBg = container.querySelector<HTMLDivElement>(".bg-hero");

    if (heroTitle) {
      gsap.from(heroTitle, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
      });
    }

    if (heroSubtitle) {
      gsap.from(heroSubtitle, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }

    if (heroBg) {
      gsap.from(heroBg, {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
      });
    }

    // === Animate Content Blocks (.Content-animation) independently ===
    const contentBlocks =
      container.querySelectorAll<HTMLDivElement>(".Content-animation");
    contentBlocks.forEach((block) => {
      gsap.from(block, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });
    });

    // === Sticky cards ===
    const stickyCards =
      container.querySelectorAll<HTMLDivElement>(".sticky-card");
    stickyCards.forEach((card, index) => {
      if (index < stickyCards.length - 1) {
        // Pin parent
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: true, // keep layout spacing
          scrub: true,
        });

        // Animate scale when next card scrolls into view
        ScrollTrigger.create({
          trigger: stickyCards[index + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
          onUpdate: (self) => {
            const scale = 1 - self.progress * 0.15;
            gsap.set(card, { scale });
          },
        });
      }
    });

    // Animate WHY_CHOOSE cards independently
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900" />
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
  const bgImage =
    currentTheme === "dark" ? "/bg/eicherDarkBg.jpg" : "/bg/eicherLightBg.jpg";

  return (
    <main
      ref={containerRef}
      className="relative w-full h-full overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="sticky-card relative w-full h-screen flex items-center justify-center">
        <div
          className="bg-hero absolute inset-0 bg-cover bg-no-repeat bg-center scale-105"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="relative z-20 flex flex-col items-center justify-center gap-5 px-6 text-center text-foreground">
          <h1 className="hero-title text-4xl md:text-5xl font-extrabold drop-shadow-lg text-muted-foreground">
            Experience the journey with BSK Travels
          </h1>
          <p className="hero-subtitle text-muted-foreground">
            Discover a new era of bus travels in India, where luxury, comfort,
            and safety are paramount
          </p>
        </div>
        <ScrollDownIcons />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-10"></div>
      </section>

      {/* Our Story Section */}
      <section className="sticky-card relative flex flex-col items-center justify-center bg-card text-card-foreground min-h-screen w-full text-center gap-10">
        <div className="Content-animation">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="lg:px-50 px-10">
            Founded with a passion for travel and a vision to redefine the bus
            travel industry in India, BSK Travels has been connecting people and
            places for over a decade...
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="sticky-card relative flex flex-col items-center justify-center min-h-screen w-full bg-muted text-muted-foreground text-center gap-10">
        <div className="Content-animation">
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p className="lg:px-50 px-10">
            Our mission is to make every journey a memorable experience...
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="sticky-card relative min-h-screen flex flex-col justify-center items-center gap-10 py-10 w-full bg-background text-foreground">
        <div className="text-center Content-animation">
          <h1 className="text-3xl font-bold">Why Choose BSK Travels?</h1>
          <p className="text-muted-foreground lg:px-50">
            We are committed to providing a premium travel experience...
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {WHY_CHOOSE.map((choose) => (
            <div
              key={choose.id}
              ref={(el) => {
                if (el) cardsRef.current[choose.id] = el;
              }}
              className="m-auto h-full flex flex-col items-center justify-center p-5 rounded-2xl gap-2 bg-card text-card-foreground shadow-sm border max-w-sm w-full"
            >
              <FontAwesomeIcon
                icon={choose.icon}
                className="text-2xl text-yellow-600"
              />
              <h1 className="text-xl font-bold">{choose.title}</h1>
              <p className="text-muted-foreground text-sm">
                {choose.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Embark Section */}
      <section className="sticky-card relative min-h-screen px-10 flex flex-col justify-center items-center text-center gap-2 bg-accent text-accent-foreground">
        <div className="Content-animation">
          <h1 className="text-3xl font-bold">
            Ready to embark on your next adventure?
          </h1>
          <p className="text-muted-foreground mb-5">
            Book your tickets today and experience the difference with BSK
            Travels.
          </p>
          <Button className="bg-yellow-500">Book Now</Button>
        </div>
      </section>

      <ScrollUpButton />
    </main>
  );
};

export default About;
