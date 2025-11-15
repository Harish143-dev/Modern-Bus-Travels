import Heading from "../Heading";
import { SERVICES } from "@/constants";
import Cards from "../Cards";
import { StaticImageData } from "next/image";

interface ServicesTypes {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}
const Services = () => {
  return (
    <div className="py-16 px-5 flex flex-col items-center justify-center w-full h-full">
      {/* Header */}
      <div className="text-center mb-3">
        <Heading
          title="Our Services"
          subtitle="Discover our Services and book your next adventure with BSK Travels."
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full py-5">
        {SERVICES.map((service, index) => (
          <Cards
            key={service.id}
            card={service}
            animationType="flip"
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
