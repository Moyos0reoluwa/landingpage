"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Using Menu for the two-dash icon
import Link from "next/link";
import MaxwidthWrapper from "../Min_Max_Width_Wrapper";

const Navbar: FC = () => {
  const navbarItems = [
    { text: "Home", link: "/" },
    { text: "About", link: "about-us" },
    { text: "Installations", link: "installation" },
    { text: "Services", link: "services" },
    { text: "Sign In", link: "sign-in" }, // Replacing "Onboard" with "Sign In"
  ];

  const [openNavbar, setOpenNavbar] = useState<boolean>(false);

  return (
    <nav className="md:hidden w-full bg-primarycol shadow-lg">
      <MaxwidthWrapper>
        <div className="flex justify-between items-center h-14 px-6">
          {/* logo */}
          <div>
            <Image
              src="/assets/globalLogo.png"
              alt="Logo"
              height={100}
              width={100}
              className="object-contain"
            />
          </div>
          {/* menu icon */}
          <div
            className="flex items-center justify-center mx-4 hover:cursor-pointer text-white"
            onClick={() => {
              setOpenNavbar((v) => !v);
            }}
          >
            {openNavbar ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />} {/* Two dash icon */}
          </div>
        </div>

        {/* Mobile device Menu Items */}
        {openNavbar && (
          <div className="bg-primarycol transition-all duration-500 ease-in-out">
            <div className="flex flex-col items-center py-2">
              {navbarItems.map((item, index) => (
                <Link
                  key={item.link + item.text + index}
                  href={`/${item.link}`}
                  onClick={() => {
                    setOpenNavbar((v) => !v);
                  }}
                  className="text-white hover:bg-secondarycol hover:text-white text-center py-2 w-full transition-all duration-300"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </MaxwidthWrapper>
    </nav>
  );
};

export default Navbar;
