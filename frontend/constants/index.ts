"use client";
import Chennai_central from "../assets/featureRoutesImg/Chennai_Central.jpg";
// Hills Stations Images
import munnar from "../assets/tourPackage/munnar.jpg";
import ooty from "../assets/tourPackage/ooty.jpg";
import kodaikanal from "../assets/tourPackage/kodaikanal.jpg";
import kerala from "../assets/tourPackage/kerala.jpg";
import hills from "../assets/tourPackage/hills.jpg";
import costal from "../assets/tourPackage/costal.jpg";
import yercaud from "../assets/tourPackage/yercard.jpg";
import coonoor from "../assets/tourPackage/coonoor.jpg";
import valparai from "../assets/tourPackage/valparai.jpg";
import kotagiri from "../assets/tourPackage/kotagiri.jpg";

// costal Images
import dhanuskodi from "../assets/tourPackage/dhanuskodi.jpg";
import goa from "../assets/tourPackage/goa.jpeg";
import kanyakumari from "../assets/tourPackage/kanyakumari.jpg";
import mahabalipuram from "../assets/tourPackage/mahabalipuram.jpeg";
import puducherry from "../assets/tourPackage/puducherry.jpeg";
import varkala from "../assets/tourPackage/varkala.jpg";
import Tharangambadi from "../assets/tourPackage/tharangambadi.jpeg";

// Temple Images
import thiruchendur from "../assets/tourPackage/thiruchendur.jpg";
import Srirangam from "../assets/tourPackage/Srirangam.jpg";
import sabarimalai from "../assets/tourPackage/sabarimalai.jpg";
import rameswaram from "../assets/tourPackage/rameswaram.jpg";
import palani from "../assets/tourPackage/palani.jpg";
import meenakshi from "../assets/tourPackage/meenakshi.jpg";
import arunachalam from "../assets/tourPackage/arunachalam.jpg";

// Buses Images
import eicher1 from "@assets/busesImg/eicher-1.jpg";
import eicher2 from "@assets/busesImg/eicher-2.jpg";
import eicher3 from "@assets/busesImg/eicher-3.jpg";
import eicher4 from "@assets/busesImg/eicher-4.jpg";
import cruzio1 from "@assets/busesImg/cruzio-1.jpg";
import cruzio2 from "@assets/busesImg/cruzio-2.jpg";
import cruzio3 from "@assets/busesImg/cruzio-3.jpg";
import cruzio4 from "@assets/busesImg/cruzio-4.jpg";

import {
  faWifi,
  faTv,
  faSnowflake,
  faBusAlt,
  faChair,
  faShield,
  faMusic,
  faBox,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface BusFeature {
  icon: IconDefinition;
  title: string;
}

interface Bus {
  id: number;
  title: string;
  img: any;
  bus: string;
  seatCapacity: string;
  features: BusFeature[];
}

interface Choose {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

export const NAV_LINKS = [
  { title: "Home", href: "/", key: "home" },
  { title: "Buses", href: "/buses", key: "buses" },
  { title: "Packages", href: "/packages", key: "packages" },
  { title: "About", href: "/about", key: "about" },
  { title: "Contact", href: "/contact", key: "contact" },
];

export const SERVICES = [
  {
    id: 1,
    img: munnar,
    title: "Tours and Trips",
    description:
      "Experience the joy of exploration with BSK Travels.Journey with comfort and style. BSK Travels ensures every tour is packed with adventure, fun, and unforgettable memories.",
  },
  {
    id: 2,
    img: ooty,
    title: "Corporates",
    description:
      "Elevate your business travel experience with BSK Travels. Our efficient corporate transport solutions keep you on schedule and stress-free.",
  },
  {
    id: 3,
    img: kodaikanal,
    title: "Events",
    description:
      "BSK Travels ensures your events run smoothly with reliable and spacious transport options. Let us handle the logistics while you enjoy the moment.",
  },
];

export const TOUR_PACKAGES = [
  {
    id: 1,
    img: hills,
    title: "Hill Station Getaway",
    place: "Coimbatore - Ooty - Kodaikanal,..",
  },
  {
    id: 2,
    img: thiruchendur,
    title: "Tamil Nadu Temples",
    place:
      "Meenakshi Amman - Thiruchendur Murugan - Arunachaleswarar Temple,..",
  },
  {
    id: 3,
    img: costal,
    title: "Coastal Bliss",
    place: "Rameswaram - Kanyakumari - Puducherry,..",
  },
  {
    id: 4,
    img: yercaud,
    title: "Comnination Package",
    place: "Ooty - Yercaud - Coonoor - Kotagiri,..",
  },
];

export const BUSES: Bus[] = [
  {
    id: 1,
    title: "Luxury Class",
    bus: "Volvo AC Coach",
    seatCapacity: "21",
    img: [
      {
        src: "/assets/busesImg/eicher-1.jpg",
      },
      {
        src: "/assets/busesImg/eicher-2.jpg",
      },
      {
        src: "/assets/busesImg/eicher-3.jpg",
      },
      {
        src: "/assets/busesImg/eicher-4.jpg",
      },
    ],
    features: [
      { title: "Wi-Fi", icon: faWifi },
      { title: "Entertainment System", icon: faTv },
      { title: "Reclining Seats", icon: faTv },
      { title: "Air Conditioning", icon: faSnowflake },
    ],
  },
  {
    id: 2,
    title: "Comfort Class",
    bus: "Eicher",
    seatCapacity: "19",
    img: [
      {
        src: "/assets/busesImg/eicher-1.jpg",
      },
      {
        src: "/assets/busesImg/eicher-2.jpg",
      },
      {
        src: "/assets/busesImg/eicher-3.jpg",
      },
      {
        src: "/assets/busesImg/eicher-4.jpg",
      },
    ],
    features: [
      { title: "Wi-Fi", icon: faWifi },
      { title: "Entertainment System", icon: faTv },
      { title: "Reclining Seats", icon: faChair },
      { title: "DJ Light", icon: faMusic },
    ],
  },
  {
    id: 3,
    title: "Economy Class",
    bus: "Mahindra Cruzio",
    seatCapacity: "19",
    img: [
      {
        src: "/assets/busesImg/cruzio-1.jpg",
      },
      {
        src: "/assets/busesImg/cruzio-2.jpg",
      },
      {
        src: "/assets/busesImg/cruzio-3.png",
      },
      {
        src: "/assets/busesImg/cruzio-4.jpg",
      },
    ],
    features: [
      { title: "Wi-Fi", icon: faWifi },
      { title: "Entertainment System", icon: faTv },
      { title: "Reclining Seats", icon: faChair },
      { title: "Overhead Storage", icon: faBox },
    ],
  },
];

export const PACKAGES = [
  {
    id: 1,
    category: "Hill Side",
    subPackages: [
      {
        id: 1,
        title: "Ooty – Nilgiri Hills",
        duration: "2 Days / 1 Night",
        image: ooty,
        description:
          "Breathe in the cool mountain air of Ooty — the Queen of Hills. Enjoy misty valleys, tea gardens, and a tranquil boat ride on Ooty Lake.",
      },
      {
        id: 2,
        title: "Kodaikanal – Dindigul District",
        duration: "2 Days / 1 Night",
        image: kodaikanal,
        description:
          "Unwind in the romantic charm of Kodaikanal with its serene lake, pine forests, waterfalls, and breathtaking viewpoints like Coaker’s Walk.",
      },
      {
        id: 3,
        title: "Munnar – Kerala",
        duration: "2 Days / 1 Night",
        image: munnar,
        description:
          "Explore the rolling green tea estates, misty mountains, and peaceful charm of Kerala’s famous hill station — Munnar.",
      },
      {
        id: 4,
        title: "Yercaud – Salem District",
        duration: "2 Days / 1 Night",
        image: yercaud,
        description:
          "Enjoy Yercaud’s calm weather, emerald lake views, and coffee-scented air — a hidden gem among Tamil Nadu’s hill retreats.",
      },
      {
        id: 5,
        title: "Coonoor – Nilgiri Hills",
        duration: "2 Days / 1 Night",
        image: coonoor,
        description:
          "Discover Coonoor’s scenic charm through its lush tea gardens, toy train rides, and the picturesque Dolphin’s Nose viewpoint.",
      },
      {
        id: 6,
        title: "Valparai – Coimbatore District",
        duration: "2 Days / 1 Night",
        image: valparai,
        description:
          "Escape into the unspoiled beauty of Valparai — a serene hill station surrounded by dense forests, waterfalls, and tea plantations.",
      },
      {
        id: 7,
        title: "Kotagiri – Nilgiris",
        duration: "2 Days / 1 Night",
        image: kotagiri,
        description:
          "Experience the peace and scenic trails of Kotagiri, one of the oldest hill stations in the Nilgiris, perfect for nature lovers and trekkers.",
      },
    ],
  },
  {
    id: 2,
    category: "Sea Side",
    subPackages: [
      {
        id: 1,
        title: "Dhanuskodi Beach Tour",
        duration: "1 Day",
        image: dhanuskodi,
        description:
          "Explore the pristine sands and serene surroundings of Dhanuskodi, a historic coastal town at the tip of Rameswaram.",
      },
      {
        id: 2,
        title: "Kanyakumari Coastal Tour",
        duration: "2 Days / 1 Night",
        image: kanyakumari,
        description:
          "Witness the meeting point of the Arabian Sea, Bay of Bengal, and Indian Ocean, along with vibrant sunrise and sunset views.",
      },
      {
        id: 3,
        title: "Puducherry Coastal Tour",
        duration: "1 Day",
        image: puducherry,
        description:
          "Experience the French colonial charm, serene beaches, and spiritual ambiance of Puducherry's coastline.",
      },
      {
        id: 4,
        title: "Varkala Beach Tour",
        duration: "1 Day",
        image: varkala,
        description:
          "Relax on Varkala's cliff-top beaches and enjoy panoramic views of the Arabian Sea along with natural springs.",
      },
      {
        id: 5,
        title: "Goa Beach Tour",
        duration: "2 Days / 1 Night",
        image: goa,
        description:
          "Discover the vibrant beaches, lively nightlife, and Portuguese heritage of Goa for a fun-filled coastal getaway.",
      },
      {
        id: 6,
        title: "Mahabalipuram Coastal Getaway",
        duration: "2 Days / 1 Night",
        image: mahabalipuram,
        description:
          "Explore ancient rock-cut temples and UNESCO heritage monuments along with scenic East Coast beaches.",
      },
      {
        id: 7,
        title: "Tharangambadi (Tranquebar)",
        duration: "2 Days / 1 Night",
        image: Tharangambadi,
        description:
          "Step back in time at Tranquebar with its Danish forts, colonial architecture, and pristine coastal views.",
      },
    ],
  },
  {
    id: 3,
    category: "Temple",
    subPackages: [
      {
        id: 1,
        title: "Meenakshi Amman Temple – Madurai",
        duration: "1 Days",
        image: meenakshi,
        description:
          "Marvel at the Dravidian architecture, ornate gopurams, and vibrant rituals of Madurai's famous Meenakshi Amman Temple.",
      },
      {
        id: 2,
        title: "Thiruchendur Murugan Temple – Thoothukudi",
        duration: "1 Days",
        image: thiruchendur,
        description:
          "Visit the coastal shrine of Lord Murugan, known for its historic significance and stunning seaside location.",
      },
      {
        id: 3,
        title: "Sabari Malai - Kerala",
        duration: "2 Days / 1 Night",
        image: sabarimalai,
        description:
          "Embark on a spiritual journey to the sacred hilltop shrine of Lord Ayyappa amidst serene forested surroundings.",
      },
      {
        id: 4,
        title: "Ramanathaswamy Temple – Rameswaram",
        duration: "2 Days / 1 Night",
        image: rameswaram,
        description:
          "Experience the sacred corridors, holy water tanks, and spiritual ambiance of one of India's most revered temples.",
      },
      {
        id: 5,
        title: "Arunachaleswarar Temple – Thiruvannamalai",
        duration: "1 Days / 1 Night",
        image: arunachalam,
        description:
          "Discover the grandeur of the hill temple dedicated to Lord Shiva, set against the scenic backdrop of Thiruvannamalai hills.",
      },
      {
        id: 6,
        title: "Palani Murugan Temple – Dindigul",
        duration: "1 Days / 1 Night",
        image: palani,
        description:
          "Visit the hilltop Murugan temple in Palani with panoramic views, spiritual rituals, and a ropeway experience.",
      },
      {
        id: 7,
        title: "Srirangam Ranganathaswamy Temple – Tiruchirapalli",
        duration: "1 Days / 1 Night",
        image: Srirangam,
        description:
          "Explore the world's largest functioning temple complex, known for its intricate carvings and spiritual energy.",
      },
    ],
  },
  {
    id: 4,
    category: "Connected",
    subPackages: [
      {
        id: 1,
        title: "South Heritage Circuit",
        place: "Coimbatore → Ooty → Kodaikanal",
        duration: "6 Days / 5 Nights",
        image: ooty,
        description:
          "Experience the cultural and natural heritage of South India — from Coimbatore’s temples to Ooty’s misty hills and Kodaikanal’s tranquil lakes. A perfect blend of nature and tradition.",
      },
      {
        id: 2,
        title: "Nilgiris Circuit",
        place: "Ooty → Coonoor → Kotagiri",
        duration: "5 Days / 4 Nights",
        image: kotagiri,
        description:
          "Discover the charm of the Nilgiri Mountains — scenic drives, lush tea estates, and heritage train rides await as you journey through Ooty, Coonoor, and Kotagiri.",
      },
      {
        id: 3,
        title: "Western Ghats Getaway",
        place: "Munnar → Valparai",
        duration: "5 Days / 4 Nights",
        image: munnar,
        description:
          "Explore the untouched beauty of the Western Ghats. From Munnar’s tea valleys to Valparai’s waterfalls, this road trip offers pure tranquility and adventure.",
      },
      {
        id: 4,
        title: "Spiritual Heritage Trail",
        place: "Madurai → Rameswaram → Thiruchendur → Kanyakumari",
        duration: "6 Days / 5 Nights",
        image: rameswaram,
        description:
          "Embark on a soul-soothing pilgrimage through Tamil Nadu’s divine temples and coastal shrines — ending at the sacred confluence of the three seas in Kanyakumari.",
      },
      {
        id: 5,
        title: "Coastal Discovery Drive",
        place: "Chennai → Mahabalipuram → Pudhucherry → Tharangambadi",
        duration: "5 Days / 4 Nights",
        image: mahabalipuram,
        description:
          "Travel along Tamil Nadu’s Coromandel Coast — explore UNESCO sites in Mahabalipuram, the French charm of Pondicherry, and the colonial beauty of Tharangambadi.",
      },
      {
        id: 6,
        title: "Temple Triangle Tour",
        place: "Madurai → Palani → Srirangam",
        duration: "4 Days / 3 Nights",
        image: meenakshi,
        description:
          "Witness architectural brilliance and divine devotion across Tamil Nadu’s most sacred temples — from Meenakshi Amman to Lord Murugan’s Palani Hills.",
      },
      {
        id: 7,
        title: "Eco Escape Adventure",
        place: "Pollachi → Valparai → Athirapally",
        duration: "5 Days / 4 Nights",
        image: valparai,
        description:
          "Reconnect with nature on this scenic trail through lush forests, wildlife-rich hills, and the majestic Athirapally Waterfalls on the Tamil Nadu–Kerala border.",
      },
    ],
  },
];

export const WHY_CHOOSE = [
  {
    id: 1,
    icon: faBusAlt,
    title: "Modern Fleet",
    description:
      "Travel in our state of the art buses equipped with the latest amenities",
  },
  {
    id: 2,
    icon: faChair,
    title: "Unmatched Comfort",
    description:
      "Relax in our spacious, ergonomic seats and enjoy a smooth journey.",
  },
  {
    id: 3,
    icon: faShield,
    title: "Safety First",
    description:
      "Our buses are maintained to the highest standards, and our drivers are trained to prioritize your safety.",
  },
];
