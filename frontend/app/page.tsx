import HomeSections from "@/components/home/HomeSection";
import ScrollUpButton from "@/components/ScrollUpButton";

// Example: Fetch data on server (when ready)
async function getHomeData() {
  // In future, fetch from database or API
  // const packages = await fetch('api/packages');
  // const testimonials = await fetch('api/testimonials');
  // return { packages, testimonials };

  return {
    packages: [],
    testimonials: [],
  };
}

export default async function HomePage() {
  // When you're ready to fetch data:
  // const data = await getHomeData();

  return (
    <>
      <HomeSections />
      {/* Pass data when needed: <HomeSections data={data} /> */}
      <ScrollUpButton />
    </>
  );
}
