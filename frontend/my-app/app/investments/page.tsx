"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function InvestmentsPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-[url('/images/entreprenaurs.jpg')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 fade-up">
            Investments
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto fade-up delay-1">
            Our investment philosophy, targeted sectors, due diligence process,
            and flagship Maverick Fund-101.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          {/* TARGET SECTORS */}
          <div className="mb-24 fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Targeted Sectors
            </h2>
            <p className="text-gray-600 mb-6">
              The broad areas of investment of the fund include but are not
              limited to:
            </p>

            <ul className="space-y-4">
              {[
                "Energy and Alternative Energy",
                "Information & Communication Technologies",
                "Infrastructure, Real Estate & related sectors",
                "Agriculture & related industries",
                "Health, Education & related sectors",
                "Tourism, Hospitality & allied industries",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-600 w-5 h-5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* INVESTMENT PROCESS */}
          <div className="mb-24 fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">
              Investment Process / Due Diligence Flow
            </h2>
            {/* Infographics */}
            <div className="relative w-full lg:w-10/12 h-[44vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh]">
              <Image
                src={"/images/due-delligence.png"}
                alt="investment process infographics"
                fill
              />
            </div>
          </div>

          {/* INVESTMENT FOCUS */}
          <div className="mb-24 fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Investment Focus
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The Fund targets early-stage SMEs with scalable business models,
              growth-stage companies preparing for public listing, and
              high-return potential businesses in priority sectors identified by
              the Government of Nepal (GoN), including energy and
              infrastructure.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              The Fund also prioritizes import-substituting and export-oriented
              enterprises, supporting sustainable economic development and value
              creation.
            </p>
          </div>

          {/* MAVERICK FUND 101 */}
          <div className="fade-up">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Maverick Fund-101
            </h2>

            <Card className="shadow-md">
              <CardContent className="p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Maverick Fund-101 is a governance-driven private equity fund
                  positioned to harness Nepal’s rapidly expanding renewable
                  energy and mid-market sectors.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  With a corpus of <strong>NPR 75 Crore</strong>, the Fund aims
                  to attract high-net-worth individuals and institutional
                  investors seeking priority returns, strategic involvement, and
                  exposure to high-growth opportunities.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Focused on fundamentally strong, growth-stage companies and
                  pre-IPO prospects, the Fund provides active value creation,
                  operational guidance, and strategic oversight—driving
                  sustainable development and long-term value creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ANIMATIONS */}
      <style>{`
        .fade-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease-out forwards;
        }
        .delay-1 {
          animation-delay: 0.15s;
        }
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
