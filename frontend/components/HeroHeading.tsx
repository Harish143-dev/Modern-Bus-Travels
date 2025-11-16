"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import BasicEnquiries from "./BasicEnquiries";

interface HeroHeadingType {
  title: string;
  subTitle: string;
  para?: string;
}

gsap.registerPlugin(SplitText);
const HeroHeading = ({ title, subTitle, para }: HeroHeadingType) => {
  const HeadingRef = useRef<HTMLHeadingElement | null>(null);
  const subTitleRef = useRef<HTMLParagraphElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const splitTitle = new SplitText(HeadingRef.current, {
      type: "chars words lines",
    });
    const splitSubTitle = new SplitText(subTitleRef.current, {
      type: "chars words lines",
    });
    const splitPara = new SplitText(paraRef.current, {
      type: "chars words lines",
    });

    gsap.from(splitTitle.chars, {
      y: 50,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      stagger: {
        amount: 0.8,
        from: "random",
      },
      ease: "expo.out",
    });

    gsap.from(splitSubTitle.lines, {
      y: 50,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      delay: 1.5,
      ease: "expo.out",
    });

    gsap.from(splitPara.lines, {
      y: 50,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      delay: 1.5,
      ease: "expo.out",
    });

    gsap.from(buttonRef.current, {
      y: 50,
      scale: 0.7,
      opacity: 0,
      duration: 1,
      delay: 1.8,
      ease: "expo.out",
    });
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <h1
        ref={HeadingRef}
        className="text-4xl md:text-5xl lg:text-6xl text-muted-foreground font-extrabold drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
      >
        {title}
      </h1>

      <p
        ref={subTitleRef}
        className="text-md md:text-xl lg:text-2xl font-medium text-muted-foreground drop-shadow-2xl"
      >
        {subTitle}
      </p>

      {para && (
        <p
          ref={paraRef}
          className="max-w-2xl text-sm md:text-base text-muted-foreground font-semibold leading-relaxed"
        >
          {para}
        </p>
      )}
      <div ref={buttonRef}>
        <BasicEnquiries />
      </div>
    </div>
  );
};

export default HeroHeading;
