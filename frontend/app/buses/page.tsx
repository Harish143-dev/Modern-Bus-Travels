import BusesCard from "@/components/BusesCard";
import Heading from "@/components/Heading";

const Buses = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 px-5 md:px-10 w-full">
      <section className="text-center my-5">
        <Heading
          title=" Explore Our Modern Fleet"
          subtitle="Travel in style and comfort with our state-of-the-art buses"
        />
      </section>
      <BusesCard />
    </main>
  );
};

export default Buses;
