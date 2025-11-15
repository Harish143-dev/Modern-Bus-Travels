import Image, { StaticImageData } from "next/image";
import React from "react";
import BasicEnquiries from "./BasicEnquiries";

interface ServicesTypes {
  id: number;
  img: StaticImageData;
  title: string;
  description: string;
}
const Cards = ({ card }: any) => {
  return (
    <div
      className="flex-shrink-0 w-xs
         rounded-2xl overflow-hidden shadow-lg bg-card flex flex-col justify-between items-baseline
        hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-62 md:h-46 lg:h-46 w-full">
        <Image
          src={card.img}
          alt={card.title}
          fill
          className="object-cover hover:scale-105 duration-300 transition-all"
        />
      </div>

      {/* Details */}
      <div className="p-3">
        <p className="text-lg font-bold">{card.title}</p>
        {card.description ? (
          <p className="text-muted-foreground text-sm p-3">
            {card.description}
          </p>
        ) : (
          <p className="text-muted-foreground text-sm ">{card.place}</p>
        )}
      </div>
      <div className="w-full text-center mb-2">
        <BasicEnquiries />
      </div>
      <div></div>
    </div>
  );
};

export default Cards;
