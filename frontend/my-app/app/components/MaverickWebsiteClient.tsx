"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Handshake,
  Mail,
  Phone,
  MapPin,
  Shield,
  BookOpen,
  LineChart,
  TrendingUp,
  Briefcase,
  Lightbulb,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import TypingMaveric from "./animation";
import { HeroSection } from "@/utils/slider";
import {
  FaCheckSquare,
  FaRegCheckSquare,
  FaCog,
  FaChartLine,
} from "react-icons/fa";

interface MaverickWebsiteClientProps {
  heroData: HeroSection | null;
}

export default function MaverickWebsiteClient({
  heroData,
}: MaverickWebsiteClientProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroHeading = heroData?.heading;
  const heroParagraph = heroData?.paragraph;
  const sliderImages = heroData?.images ?? [];
  // const heroHeading = "Transforming Nepali Enterprises Through Strategic Investment";
  // const heroParagraph = "SEBON-licensed Private Equity and Venture Capital fund manager committed to empowering Nepal's private sector";

  // const sliderImages = [
  //   "/images/slider1.jpg",
  //   "/images/slider2.jpg",
  //   "/images/news2.png",
  //   "/images/slider3.jpg",
  //   "/images/slider4.jpg",
  //   "/images/slider5.jpg",
  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const values = [
    {
      image: "images/Collaboration.png",
      title: "Collaboration and Discipline",
    },
    {
      image: "images/Impact.png",
      title: "Impact and Sustainability",
    },
    {
      image: "images/Innovation.png",
      title: "Innovation and Entrepreneurship",
    },
    {
      image: "images/integrity.png",
      title: "Integrity and Governance",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

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

  return (
    <div className="min-h-screen bg-white">
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Slider Images */}
        {sliderImages.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? "translate-x-0"
                : index ===
                    (currentIndex - 1 + sliderImages.length) %
                      sliderImages.length
                  ? "-translate-x-full"
                  : "translate-x-full"
            }`}
          >
            <img
              src={`http://127.0.0.1:8000${sliderImages[currentIndex]?.image}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text content at bottom */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 sm:px-6 lg:px-8 text-center pb-30">
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            {heroHeading}
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl lg:text-3xl text-white font-semibold mb-8 max-w-3xl mx-auto text-center leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {heroParagraph}
          </motion.p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/investments" passHref>
                <Button
                  size="lg"
                  className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  News And Article <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link href="/news" passHref>
                <Button
                  onClick={() => scrollToSection("investments")}
                  size="lg"
                  variant="outline"
                  className="bg-green-900 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Investments <ChevronRight className="ml-2" size={20} />
                </Button>
              </Link>
            </motion.div>
          </div> */}
        </div>

        {/* Slider dots at very bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="py-16 bg-green-900 text-white relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            Why Maverick Kautilya?
          </motion.h2>

          {/* Condensed Paragraph */}
          <motion.p
            className="text-center text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Maverick Kautilya Venture Limited is a Nepal-focused private equity
            and venture capital firm investing in scalable businesses across
            energy, infrastructure, and mid-market enterprises.
          </motion.p>

          {/* 3-Column Infographic */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Column 1 – What We Invest In */}
            <motion.div
              className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaChartLine className="text-3xl  text-blue-300" />
                <h2 className="font-semibold text-2xl">What We Invest In</h2>
              </div>
              <ul className="text-sm list-disc list-inside text-left space-y-2">
                <li>Energy & Renewables</li>
                <li>Infrastructure-linked Businesses</li>
                <li>Mid-Market Enterprises</li>
              </ul>
            </motion.div>

            {/* Column 2 – How We Add Value */}
            <motion.div
              className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaCog className="text-3xl  text-blue-300" />
                <h2 className="font-semibold text-2xl">How We Add Value</h2>
              </div>
              <ul className="text-sm list-disc list-inside text-left space-y-2">
                <li>Strategic & Financial Structuring</li>
                <li>Governance & Risk Frameworks</li>
                <li>Operational & Growth Support</li>
              </ul>
            </motion.div>

            {/* Column 3 – What Investors Get */}
            <motion.div
              className="bg-white/10 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <FaCheckSquare className="text-3xl  text-blue-300" />
                <h2 className="font-semibold text-2xl">What Investors Get</h2>
              </div>
              <ul className="text-sm list-disc list-inside text-left space-y-2">
                <li>Disciplined Capital Deployment</li>
                <li>Risk-Adjusted Returns</li>
                <li>Clear Exit Orientation</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 rounded-xl p-10">
        <h3 className="text-3xl font-bold text-gray-900 mb-14 text-center">
          Our Values
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="relative h-56 rounded-xl overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h4 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <section></section>

      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3">
                What makes <TypingMaveric /> different?
              </h2>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <Handshake className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Collaborative Strategy
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-gray-600 mb-2">
                  We leverage a deep, relationship-driven ecosystem across
                  Nepal’s financial and infrastructure landscape to originate
                  and structure proprietary opportunities.
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    Active engagement with{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      IPPAN and the hydropower developer community{" "}
                    </span>
                  </li>
                  <li>
                    Strong working relationships with{" "}
                    <span className="font-bold text-gray-700">
                      commercial banks, development banks, and financial
                      institutions{" "}
                    </span>
                  </li>
                  <li>
                    Access to{" "}
                    <span className="font-bold text-gray-700">
                      strategic co-investors, EPC partners, and project
                      sponsors{" "}
                    </span>
                  </li>
                  <li>
                    Ability to structure investments across{" "}
                    <span className="font-bold text-gray-700">
                      equity, quasi-equity, and structured capital{" "}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <BookOpen className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Industry Knowledge
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-gray-700 mb-2">
                  Our investment decisions are led by practitioners with
                  hands-on sector experience rather than generalist capital
                  allocators:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    <span className="font-bold text-gray-700">
                      Seasoned hydropower experts and project developers{" "}
                    </span>{" "}
                    with on-ground execution experience
                  </li>
                  <li>
                    Professionals from the{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      private equity and project finance ecosystem
                    </span>
                  </li>
                  <li>
                    In-house and affiliated expertise from the{" "}
                    <span className="font-bold text-gray-700">
                      legal and regulatory advisory space{" "}
                    </span>
                  </li>
                  <li>
                    Deep understanding of{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      licensing, PPA structures, construction risk, and
                      regulatory frameworks{" "}
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <LineChart className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Diversified Investment Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-gray-700 mb-2">
                  We pursue focused diversification within the hydropower and
                  infrastructure ecosystem to enhance portfolio resilience:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    <span className="font-bold text-gray-700">
                      {" "}
                      Geographical diversification within the hydropower
                      sector{" "}
                    </span>{" "}
                    across river basins and regions
                  </li>
                  <li>
                    Exposure across{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      different project sizes and development stages{" "}
                    </span>
                  </li>
                  <li>
                    Risk balancing through{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      portfolio construction rather than single-asset
                      concentration{" "}
                    </span>
                  </li>
                  <li>
                    Ability to capture opportunities across varying hydrological
                    and market conditions
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <Shield className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Sustainable & Responsible Investing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="text-gray-700 mb-2">
                  Sustainability is embedded as a risk and value lens, not a
                  marketing overlay:
                </p>
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    Integration of{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      environmental, social, and governance (ESG)
                      considerations{" "}
                    </span>{" "}
                    into investment decisions
                  </li>
                  <li>
                    Alignment with{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      national energy priorities and long-term development
                      goals{" "}
                    </span>
                  </li>
                  <li>
                    Emphasis on{" "}
                    <span className="font-bold text-gray-700">
                      {" "}
                      governance, transparency, and institutional reporting
                      standards{" "}
                    </span>{" "}
                  </li>
                  <li>
                    Focus on generating durable returns while minimizing adverse
                    environmental and social impact
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="whatWeDo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive investment and advisory services to drive
              sustainable growth
            </p>
          </div>

          {/* HORIZONTAL SCROLL ROW */}
          <div className="flex space-x-8 overflow-x-auto pb-4 no-scrollbar">
            {[
              {
                title: "Private Equity Investments",
                desc: "Maverick invests in SMEs, startups, and companies nearing IPO — providing capital, strategy, and hands-on growth support.",
                Icon: LineChart,
              },
              {
                title: "Financial Optimization & Capital Structuring",
                desc: "We improve capital structure, profitability, cash flow, and long-term stability for sustainable growth.",
                Icon: TrendingUp,
              },
              {
                title: "Institutional Liaison & Credit Facilitation",
                desc: "We connect businesses with banks to secure subsidized loans, structured financing, and optimized credit solutions.",
                Icon: Briefcase,
              },
              {
                title: "Advisory & Value-Creation Services",
                desc: "End-to-end advisory including modeling, business planning, governance, and strategic restructuring.",
                Icon: Lightbulb,
              },
              {
                title: "Growth & Exit Preparation",
                desc: "We prepare companies for IPOs, strategic exits, and scaled expansion with governance and market readiness.",
                Icon: Target,
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="min-w-75 max-w-75 bg-white h-full shadow-md hover:shadow-xl rounded-xl transition-all duration-300 transform hover:-translate-y-1 fade-up flex flex-col"
              >
                <CardHeader className="flex-1">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-green-200 p-4 rounded-xl">
                      <item.Icon className="w-10 h-10 text-[#D9534F]" />
                    </div>

                    <CardTitle className="text-xl font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Animation */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

          .fade-up {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeUp 0.8s ease-out forwards;
          }
          @keyframes fadeUp {
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* <section
        id="investments"
        className="relative bg-[url('/images/entreprenaurs.jpg')] bg-cover bg-center text-white"
      >
        <div className="absolute inset-0 backdrop-blur-lg bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Investments
          </h2>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl mx-auto mb-10">
            Target sectors, investment process, and our flagship Maverick Fund-101.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Targeted Sectors",
                description:
                  "Energy, ICT, Infrastructure, Agriculture, Health, Education, Tourism & Hospitality.",
                link: "/investments",
                image: "/images/integrity.jpg",
                
              },
              {
                title: "Investment Process",
                description:
                  "A structured 13-step due diligence and approval process ensuring governance and quality.",
                link: "/investments",
              },
              {
                title: "Maverick Fund-101",
                description:
                  "A NPR 75 Crore fund focusing on renewable energy and mid-market high-growth businesses.",
                link: "/investments",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md transition group-hover:bg-white/20"></div>

                <div className="relative p-6 h-full min-h-80 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 line-clamp-4 mt-10 ">
                      {item.description}
                    </p>
                  </div>

                  <span className="inline-block mt-6 px-4 py-2 bg-green-800 rounded-full text-sm group-hover:bg-green-900 transition">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <style>{`
    .line-clamp-4 {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `}</style>
      </section> */}

      {/* <section id="news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">News & Articles</h2>
            <p className="text-lg text-gray-600">Latest insights, announcements, and industry updates.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              {
                title: "Nepal’s Private Equity Outlook 2025",
                description: "Explore how Nepal’s evolving market landscape is shaping future investment opportunities.",
                image: "/images/integrity.jpg",
              },
              {
                title: "Renewable Energy: The Next Growth Engine",
                description: "A deep dive into why renewable energy continues to dominate institutional investment trends.",
                image: "/images/innovation.jpg",
              },
              {
                title: "Maverick Fund-101 Reaches New Milestones",
                description: "Inside the fund’s recent progress, portfolio expansion, and future strategic direction.",
                image: "/images/impact.jpg",
              },
            ].map((article, index) => (
              <a key={index} href="/news" className="block">
                <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1">

                  
                  <div className="h-48 w-full overflow-hidden">
                    <img src={article.image} className="w-full h-full object-cover" alt={article.title} />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{article.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>

                    <span className="text-green-700 font-semibold hover:underline text-sm">
                      Read More →
                    </span>
                  </div>

                </div>
              </a>
            ))}

          </div>

        </div>
      </section> */}

      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our team</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <MapPin className="w-6 h-6 text-green-600" />
              <h3 className="font-semibold">Address</h3>
              <p className="text-black-600">Lainchaur, Kathmandu</p>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <Phone className="w-6 h-6 text-[#D9534F]" />
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:9704583930"
                className="text-black-900 hover:underline"
              >
                14547944 / 9704583930
              </a>
            </CardContent>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow rounded-xl cursor-pointer">
            <CardContent className="flex flex-col items-center gap-3">
              <Mail className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:maverickkautilya@gmail.com"
                className="text-black-900 hover:underline"
              >
                venture@maverickkautilya.com
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
