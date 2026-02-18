import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DevFolio Pro - Professional Developer Portfolio",
  description: "A professional online portfolio for software developers and coders, designed to showcase projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>)
{
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased">
        <Navbar />
        <main className="relative overflow-hidden pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
