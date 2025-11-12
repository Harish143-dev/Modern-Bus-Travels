"use client";

import React, { useEffect, useRef } from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import FollowIcons from "./FollowIcons";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!footerRef.current) return;

    gsap.from(footerRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div
      ref={footerRef}
      className="bg-card text-card-foreground border-t px-6 pt-12 pb-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
        {/* Brand Info */}
        <div>
          <h1 className="text-2xl font-bold text-primary mb-2">BSK Travels</h1>
          <p className="text-sm opacity-80">
            Life is an Adventure Just Enjoy the Ride
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm opacity-90">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-sm opacity-90">
            <span className="pr-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            saravananharish143@gmail.com
          </p>
          <p className="text-sm opacity-90">
            <span className="pr-2">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            +91 8056503191
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <FollowIcons />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-full text-center border-t mt-8 pt-4 text-sm opacity-80">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">BSK Travels</span>. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
