"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

interface WhyChooseItem {
  id: number;
  icon: any;
  title: string;
  description: string;
}

interface AboutContentProps {
  whyChooseData: WhyChooseItem[];
}

export default function AboutContent({ whyChooseData }: AboutContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate content blocks
      const contentBlocks =
        containerRef.current!.querySelectorAll<HTMLDivElement>(
          ".content-block"
        );
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
          },
        });
      });

      // Sticky card animations
      const stickyCards =
        containerRef.current!.querySelectorAll<HTMLDivElement>(
          ".sticky-card-about"
        );
        ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {}});
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          // Pin card
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            scrub: true,
          });

          // Scale effect
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

      // Animate why choose cards
      cardsRef.current.filter(Boolean).forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          x: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [whyChooseData]);

  return (
    <div ref={containerRef}>
      {/* Our Story Section */}
      <section className="sticky-card-about relative flex flex-col items-center justify-center bg-card text-card-foreground min-h-screen w-full px-10 py-20">
        <div className="content-block text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed">
            Founded with a passion for travel and a vision to redefine the bus
            travel industry in India, BSK Travels has been connecting people and
            places for over a decade. What started as a small fleet of buses has
            grown into one of the most trusted names in travel, serving
            thousands of happy customers across the country.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="sticky-card-about relative flex flex-col items-center justify-center min-h-screen w-full bg-muted text-muted-foreground px-10 py-20">
        <div className="content-block text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to make every journey a memorable experience. We
            believe that travel should be more than just getting from point A to
            point B—it should be an adventure filled with comfort, safety, and
            joy. We are committed to providing top-notch service while
            maintaining affordability and accessibility for all.
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="sticky-card-about relative min-h-screen flex flex-col justify-center items-center gap-10 py-20 px-6 w-full bg-background text-foreground">
        <div className="content-block text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose BSK Travels?
          </h2>
          <p className="text-muted-foreground text-lg">
            We are committed to providing a premium travel experience that goes
            beyond expectations. Here's what sets us apart:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
          {whyChooseData.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex flex-col items-center justify-start p-6 rounded-2xl gap-4 bg-card text-card-foreground shadow-lg border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-500/10">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl text-yellow-600"
                />
              </div>
              <h3 className="text-xl font-bold text-center">{item.title}</h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="sticky-card-about relative min-h-screen px-10 flex flex-col justify-center items-center text-center gap-6 bg-accent text-accent-foreground">
        <div className="content-block max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to embark on your next adventure?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book your tickets today and experience the difference with BSK
            Travels. Your journey of comfort and luxury awaits!
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-6 text-lg"
          >
            Book Now
          </Button>
        </div>
      </section>
    </div>
  );
}
