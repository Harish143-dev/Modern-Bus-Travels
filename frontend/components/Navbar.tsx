"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import ThemeSwitch from "./ThemeSwitcher";
import { NAV_LINKS } from "../constants/index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import FormDailog from "./FormDailog";
import BasicEnquiries from "./BasicEnquiries";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  // Slide down navbar on page load
  useGSAP(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, {});

  // Mobile menu animation
  useGSAP(() => {
    const el = menuRef.current;
    if (!el) return;

    if (isOpen) {
      // make sure menu is visible
      gsap.set(el, { display: "flex" });

      gsap.to(el, {
        clipPath: "inset(0 0 0% 0)", // fully visible
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.fromTo(
        el.children,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, stagger: 0.05, delay: 0.15, duration: 0.3 }
      );
    } else {
      // close animation
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)", // hide upwards
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(el, { display: "none" }); // hide after animation
        },
      });
    }
  }, [isOpen]);

  return (
    <nav className="fixed flex items-center justify-center z-50 w-full p-2">
      <div
        ref={navRef}
        className="w-full md:w-[80%] backdrop-blur-sm bg-background/20 backdrop-brightness-95 text-card-foreground shadow-xl rounded-xl"
      >
        <div className="flex justify-between items-center px-6 lg:px-10 py-3">
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="BSK Travels"
                width={90}
                height={10}
              />
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex justify-center items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className=" transition-all text-sm hover:scale-105 hover:drop-shadow-2xl font-semibold"
              >
                {link.title}
              </Link>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            <ThemeSwitch />
            <div className="hidden lg:block">
              <BasicEnquiries />
            </div>
            <div
              className="lg:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>
          </div>
        </div>

        {/* Mobile Menu (always rendered) */}
        <ul
          ref={menuRef}
          className="lg:hidden flex flex-col items-center space-y-4 bg-card/50 w-full backdrop-blur-md py-6 overflow-hidden opacity-0 rounded-xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="transition-all text-sm hover:font-semibold hover:drop-shadow-2xl"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <div>
            <BasicEnquiries />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
