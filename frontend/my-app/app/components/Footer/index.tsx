"use client";
import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Smooth scroll to section if on same page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollOrNavigate = (id: string) => {
    if (pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">

        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-start text-left">
          <img
            src="/images/logo.jpeg"
            alt="logo, marvik"
            className="w-40 h-20 object-contain cursor-pointer"
          />
          <p className="text-gray-400 text-sm mt-2">
            SEBON-licensed Private Equity and <br />
            Venture Capital fund manager
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-1">
            <Link
              href="/about"
              className="border-2 border-transparent  p-2 rounded-3xl transition-all duration-500 text-gray-400 hover:text-white cursor-pointer font-bold"
            >
              ABOUT US
            </Link>

            <Link
              href="/board_of_directors"
              className="border-2 border-transparent  p-2 rounded-3xl transition-all duration-500 text-gray-400 hover:text-white cursor-pointer font-bold"
            >
              BOARD OF DIRECTORS
            </Link>

            <Link
              href="/management_team"
              className="border-2 border-transparent  p-2 rounded-3xl transition-all duration-500 text-gray-400 hover:text-white cursor-pointer font-bold"
            >
              MANAGEMENT TEAM
            </Link>

            <button
              onClick={() => handleScrollOrNavigate("services")}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-3xl font-bold"
            >
              WHAT WE DO
            </button>

            <button
              onClick={() => handleScrollOrNavigate("contact")}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-3xl font-bold"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-end text-right cursor-pointer">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">Lainchaur, Kathmandu</p>
          <p className="text-gray-400 text-sm">9704583930</p>
          <p className="text-gray-400 text-sm">maverickradiant@gmail.com</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Maverick Kautilya Venture Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
