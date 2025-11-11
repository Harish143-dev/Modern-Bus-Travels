import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const FollowIcons = () => {
  return (
    <div className="flex justify-center lg:justify-start gap-4 text-lg">
      <Link
        href="#"
        className="hover:text-primary transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Link>
      <Link
        href="#"
        className="hover:text-primary transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </Link>
      <Link
        href="#"
        className="hover:text-primary transition-transform duration-300 hover:scale-110"
      >
        <FontAwesomeIcon icon={faXTwitter} />
      </Link>
    </div>
  );
};

export default FollowIcons;
