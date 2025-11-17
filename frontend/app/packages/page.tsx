import { PACKAGES } from "@/constants";
import ScrollUpButton from "@/components/ScrollUpButton";
import PackagesList from "@/components/all packages/packagesList";
import { ParallaxHero } from "@/components/ParallaxHero";
import HeroHeading from "@/components/HeroHeading";

// Server Component - fetches data, composes layout
export default function PackagesPage() {
  // You could also fetch from database here:
  // const packages = await fetchPackages();

  return (
    <main>
      <ParallaxHero
        lightBgImage="/bg/parallaxDay2.jpg"
        darkBgImage="/bg/parallaxNight2.jpg"
        animations={{
          bgParallaxDistance: 150, // More dramatic parallax
          staggerDelay: 0.2,
        }}
      >
        <HeroHeading
          title="Our Travel Packages"
          subTitle="Explore Tamil Nadu's beauty through customized travel experiences."
        />
      </ParallaxHero>
      <PackagesList packages={PACKAGES} />
      <ScrollUpButton />
    </main>
  );
}
