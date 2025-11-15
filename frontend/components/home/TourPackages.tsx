import Cards from "../Cards";
import Heading from "../Heading";
import { TOUR_PACKAGES } from "@/constants";
import { Button } from "../ui/button";
import Link from "next/link";
const TourPackages = () => {
  return (
    <div className="py-16 px-5 h-full flex items-center justify-center flex-col w-full">
      <div className="text-center">
        <Heading
          title=" Tour Package"
          subtitle="  Experience the charm of South India with our handpicked travel routes."
        />
      </div>

      {/* Each card should have className="package-card" */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full py-5">
        {TOUR_PACKAGES.map((tour, index) => (
          <Cards key={tour.id} card={tour} animationType="slide"  index={index}/>
        ))}
      </div>

      <div>
        <Link href="/packages">
          <Button>More Packages</Button>
        </Link>
      </div>
    </div>
  );
};

export default TourPackages;
