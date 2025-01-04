"use client";

import React, { FC } from "react";
import Image from "next/image";
import MaxwidthWrapper from "./Min_Max_Width_Wrapper";

const AboutSection: FC = () => {
  return (
    <section className="bg-white py-10 px-5 w-full overflow-hidden">
      <MaxwidthWrapper>
        {/* Top Section */}
        <div className="text-purple-950 flex flex-col sm:flex-row justify-between items-center mb-8 w-full gap-4">
          {/* Left Content */}
          <div className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left flex-1">
            {/* Welcome Text */}
            <div className="mb-4">
              <h2 className="text-[24px] sm:text-[37.5px] font-normal uppercase">
                Welcome To
              </h2>
              <h2 className="text-[24px] sm:text-[37.5px] font-bold uppercase">
                Mount Zion!
              </h2>
            </div>

            {/* Description Text */}
            <div>
              <p className="text-base sm:text-lg font-medium leading-relaxed">
                The Heavenly Jerusalem
                <br />
                A church that is heaven
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 flex-1">
            <Image
              src="/assets/about0.png" // Replace with your image path
              alt="Top Section Image"
              className="object-contain w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
              width={192} // Placeholder
              height={192} // Placeholder
            />
          </div>
        </div>
      </MaxwidthWrapper>

      {/* Image Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center w-full overflow-hidden">
        {/* First Image */}
        <div className="relative overflow-hidden rounded-lg w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72">
          <Image
            src="/assets/about1.jpg"
            alt="Who We Are"
            layout="fill"
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <h3 className="text-sm sm:text-xl text-center uppercase">Who We Are</h3>
            <p className="text-xs sm:text-lg flex items-center">
              Learn more <span className="ml-2">&rarr;</span>
            </p>
          </div>
        </div>

        {/* Second Image */}
        <div className="relative overflow-hidden rounded-lg w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72">
          <Image
            src="/assets/about2.jpg"
            alt="Connect With Us"
            layout="fill"
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <h3 className="text-sm sm:text-xl text-center uppercase">
              Connect <br /> With Us
            </h3>
            <p className="text-xs sm:text-lg flex items-center">
              Learn more <span className="ml-2">&rarr;</span>
            </p>
          </div>
        </div>

        {/* Third Image */}
        <div className="relative overflow-hidden rounded-lg w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72">
          <Image
            src="/assets/about3.jpg"
            alt="Our Celebration"
            layout="fill"
            className="object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
            <h3 className="text-sm sm:text-xl text-center uppercase">
              Our <br /> Celebration
            </h3>
            <p className="text-xs sm:text-lg flex items-center">
              Learn more <span className="ml-2">&rarr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
