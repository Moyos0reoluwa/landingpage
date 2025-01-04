import type { Metadata } from "next";
import "./globals.css"; 
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Word Sanctuary Central Systems",
  description: "A Church that is Heaven. We have a mandate to take the World!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-roboto m-0 p-0 antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
