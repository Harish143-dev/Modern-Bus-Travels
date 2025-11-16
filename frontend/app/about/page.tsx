import { WHY_CHOOSE } from "@/constants";
import AboutContent from "@/components/about/AboutContent";
import ScrollUpButton from "@/components/ScrollUpButton";
import { ParallaxHero } from "@/components/ParallaxHero";
import HeroHeading from "@/components/HeroHeading";

// Metadata for SEO (only works in Server Components)
export const metadata = {
  title: "About Us - BSK Travels",
  description:
    "Experience the journey with BSK Travels. Discover a new era of bus travels in India with luxury, comfort, and safety.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full h-full overflow-x-hidden">
      <ParallaxHero
        lightBgImage="/bg/parallaxDay.jpg"
        darkBgImage="/bg/parallaxNight.jpg"
        animations={{
          bgParallaxDistance: 150, // More dramatic parallax
          staggerDelay: 0.2,
        }}
      >
        <HeroHeading
          title="Experience the journey with BSK Travels"
          subTitle="Discover a new era of bus travels in India, where luxury, comfort, and safety are paramount"
        />
      </ParallaxHero>
      <AboutContent whyChooseData={WHY_CHOOSE} />
      <ScrollUpButton />
    </main>
  );
}
