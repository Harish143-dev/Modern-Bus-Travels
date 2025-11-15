import { PACKAGES } from "@/constants";
import ScrollUpButton from "@/components/ScrollUpButton";
import PackagesHero from "@/components/all packages/PackaegesHero";
import PackagesList from "@/components/all packages/packagesList";

// Server Component - fetches data, composes layout
export default function PackagesPage() {
  // You could also fetch from database here:
  // const packages = await fetchPackages();

  return (
    <main>
      <PackagesHero />
      <PackagesList packages={PACKAGES} />
      <ScrollUpButton />
    </main>
  );
}
