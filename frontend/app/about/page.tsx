import { WHY_CHOOSE } from "@/constants";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import ScrollUpButton from "@/components/ScrollUpButton";

// Metadata for SEO (only works in Server Components)
export const metadata = {
  title: "About Us - BSK Travels",
  description:
    "Experience the journey with BSK Travels. Discover a new era of bus travels in India with luxury, comfort, and safety.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full h-full overflow-x-hidden">
      <AboutHero />
      <AboutContent whyChooseData={WHY_CHOOSE} />
      <ScrollUpButton />
    </main>
  );
}
