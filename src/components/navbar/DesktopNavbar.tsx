"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import MaxwidthWrapper from "../Min_Max_Width_Wrapper";

const DesktopNavbar: FC = () => {
  const navbarItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "about-us" },
    { text: "Installations", link: "installation" },
    { text: "Services", link: "services" },
    { text: "Onboard", link: "onboard" },
  ];

  return (
    <nav className="w-full bg-primarycol shadow-lg">
      <MaxwidthWrapper>
        <div className="flex justify-between items-center h-20 px-29">
          {/* Logo */}
          <div>
            <Image
              src="/assets/globalLogo.png"
              alt="Logo"
              height={190}
              width={190}
              className="object-contain"
            />
          </div>

          {/* Navbar Links */}
          <div className="flex items-center space-x-8">
            {navbarItems.map((item, index) => (
              <Link
                key={`${item.text}-${index}`}
                href={`/${item.link}`}
                className="text-white hover:text-gray-300 transition duration-300 text-lg uppercase"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Navbar Button */}
          <div className="flex items-center">
            <button className="flex flex-col justify-center items-center text-white text-2xl">
              <span className="block w-6 h-1 bg-white mb-1"></span>
              <span className="block w-6 h-1 bg-white"></span>
            </button>
          </div>
        </div>
      </MaxwidthWrapper>
    </nav>
  );
};

export default DesktopNavbar;