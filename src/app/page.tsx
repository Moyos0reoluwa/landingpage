import React from "react";
import Head from "next/head";
import DesktopNavbar from "@/components/navbar/DesktopNavbar";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import Installation from "@/components/Installation";
import Footer from "@/components/footer/Footer";

const HomePage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="font-roboto">
        <main className="overflow-hidden">
          <DesktopNavbar />
          <Navbar />
          <Hero />
          <AboutSection />
          <VisionSection />
          <Installation />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
