"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import FormDailog from "../FormDailog";

interface SubPackage {
  id: number;
  title: string;
  duration: string;
  img: string | StaticImageData;
  description: string;
}

interface PackageCardProps {
  subPkg: SubPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ subPkg }) => {
  return (
    <div
      className="
        flex-shrink-0   w-60 md:w-72 lg:w-80 
        packageCard rounded-2xl overflow-hidden 
        shadow-lg bg-card hover:shadow-xl 
        transition-all duration-300 hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 lg:h-36 w-full">
        <Image
          src={subPkg.img}
          alt={subPkg.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h4 className="text-lg font-semibold mb-1">{subPkg.title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{subPkg.duration}</p>
        <p className="text-sm mb-4 line-clamp-3">{subPkg.description}</p>

        <div className="w-full">
          <FormDailog subPkg={subPkg} />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
