"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  const sectionIds = [
    "home",
    "company",
    "services",
    "contact",
    "whatWeDo",
    "whyUs",
    "investments",
    "news",
  ];

  const pageRoutes: Record<string, string> = {
    about: "/about",
    board_of_directors: "/board_of_directors",
    management_team: "/management_team",
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const handleScrollOrNavigate = (id: string) => {
    // If it's a homepage section
    if (sectionIds.includes(id)) {
      if (pathname === "/") {
        scrollToSection(id); // scroll smoothly
      } else {
        router.push(`/#${id}`); // go to homepage, browser will auto-scroll
      }
      return;
    }

    // If it's a standalone page
    if (pageRoutes[id]) {
      router.push(pageRoutes[id]);
      return;
    }
  };

  return (
    <nav
      className={`fixed top-0  w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Slogan */}
          <div className="flex flex-col items-start">
            <Image
              src="/images/logo.jpeg"
              width={150}
              height={40}
              alt="Marvik Logo"
              className="object-contain cursor-pointer"
              onClick={() => handleScrollOrNavigate("home")}
            />
            <span className="text-xs text-green-800 uppercase tracking-wide mt-1 font-bold">
              Smart Investments, Impactful Returns
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={() => handleScrollOrNavigate("home")}
              className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold"
            >
              HOME
            </button>

            {/* COMPANY Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleScrollOrNavigate("company")}
                className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold"
              >
                COMPANY
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link
                  href="/about"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/board_of_directors"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                >
                  BOARD OF DIRECTORS
                </Link>
                <Link
                  href="/management_team"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                >
                  MANAGEMENT TEAM
                </Link>
              </div>
            </div>

            <button
              onClick={() => handleScrollOrNavigate("services")}
              className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold"
            >
              WHY US
            </button>

            {/* SERVICES Dropdown */}
            <div className="relative group">
              <button className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">
                SERVICES
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <button
                  onClick={() => handleScrollOrNavigate("whatWeDo")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600"
                >
                  WHAT WE DO
                </button>
                <Link href="/investments" className="block">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600">
                    INVESTMENTS
                  </button>
                </Link>
              </div>
            </div>
            {/* PARTNER WITH US Dropdown */}
            <div className="relative group">
              <button className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold">
                PARTNER WITH US
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                <Link href={"/entrepreneurs"}>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600">
                    FOR ENTREPRENEURS
                  </button>
                </Link>
                <Link href={"/limited-partners"} className="block">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-blue-600">
                    FOR LIMITED PARTNERS
                  </button>
                </Link>
              </div>
            </div>

            <Link href={"/news"}>
              <button
                onClick={() => handleScrollOrNavigate("news")}
                className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold"
              >
                NEWS & ARTICLES
              </button>
            </Link>

            <button
              onClick={() => handleScrollOrNavigate("contact")}
              className="border-2 border-transparent hover:border-[#6610F2] p-2 rounded-3xl transition-all duration-500 text-gray-600 hover:text-blue-600 cursor-pointer font-bold"
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col space-y-2 ">
            <Link href={"/"} className="py-2 text-gray-700 mx-auto">
              <button>Home</button>
            </Link>

            {/* COMPANY Mobile Dropdown */}
            <div className="flex flex-col">
              <Link
                href="/investments"
                className="pl-4 py-1 text-gray-600 mx-auto"
              >
                <button>Investment</button>
              </Link>
              {/* <Link href="/about" className="py-2 text-gray-600">
                                About Us
                            </Link>
                            <Link href="/board_of_directors" className="py-2 text-gray-600">
                                Board of Directors
                            </Link>
                            <Link href="/management_team" className="py-2 text-gray-600">
                                Management Team
                            </Link> */}
            </div>

            {/* PARTNER WITH US Mobile Dropdown */}
            <div className="flex flex-col">
              <Link
                href={"/entrepreneurs"}
                className="pl-4 py-1 text-gray-600 mx-auto"
              >
                <button>For Entrepreneurs </button>
              </Link>
              <Link
                href={"/limited-partners"}
                className="py-2 text-gray-600 mx-auto"
              >
                <button>For Limited Partners</button>
              </Link>
            </div>
            <Link href={"/news"} className="pl-4 py-1 text-gray-600 mx-auto">
              <button>News & Article</button>
            </Link>
            <button
              onClick={() => handleScrollOrNavigate("contact")}
              className="py-2 text-gray-600"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
