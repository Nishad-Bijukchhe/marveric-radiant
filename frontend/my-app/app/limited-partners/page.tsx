"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChartNoAxesCombined, HandCoins, LineChart, Scale } from "lucide-react";
import React, { useState } from "react";
import MyForm from "../components/myForm";
import Image from "next/image";

const fundOverviewData = [
  { title: "Name", content: "Maverick Fund 101" },
  { title: "Fund Size", content: "NPR 75 crore" },
  {
    title: "Nature of Fund",
    content: "Closed-end (Specialized Investment Fund)",
  },
  { title: "Sectors", content: "Energy Infrastructure & MME" },
  { title: "Tenure", content: "10 years" },
  { title: "Management Fee", content: "2% p.a." },
  { title: "Hurdle Rate", content: "8%" },
  { title: "Carried Interest", content: "20% (above hurdle rate)" },
  { title: "Number of Deals", content: "5-7 deals in totality" },
  {
    title: "Targeted Fund IRR",
    content:
      "LP: 16% (Adverse) to 31% (Expected) | Net: 17% (Adverse) to 34% (Expected)",
  },
  { title: "LP Contribution", content: "98% of committed capital" },
  { title: "GP Contribution", content: "2% of committed capital" },
];

function LimitedPartners() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  return (
    <div className="mt-20 flex flex-col flex-1">
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
                Partner With <span className="text-green-600">Maverick</span>
              </h2>
              <div className="text-gray-600 font-semibold text-xl italic mb-4 ">
                Institutional and strategic investors seeking exposure to
                high-growth opportunities
              </div>
              <div className="text-gray-600">
                Our platform is built on transparency, flexibility, and strong
                alignment with investor interests.
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div>
            {/* Card 1 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-5xl mx-auto mb-8">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <HandCoins className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Fund Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                {/* <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li className="flex justify-between">
                    <span>Name:</span>
                    <span>Maverick Fund 101</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fund Size:</span>
                    <span>NPR 75 crore</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Nature of Fund:</span>
                    <span>Closed-end (Specialized Investment Fund)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sectors:</span>
                    <span>Energy Infrastructure & MME</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Tenure:</span>
                    <span>10 years</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Management Fee:</span>
                    <span>2% p.a.</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Hurdle Rate:</span>
                    <span>8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Carried Interest:</span>
                    <span>20% (above hurdle rate)</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Number of Deals:</span>
                    <span>5-7 deals in totality</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Targeted Fund IRR:</span>
                    <span className="text-right">
                      Net IRR to LP: 16% – 31% <br />
                      Net Fund IRR: 17% – 34%
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>LP Contribution:</span>
                    <span>98% of committed capital</span>
                  </li>
                  <li className="flex justify-between">
                    <span>GP Contribution:</span>
                    <span>2% of committed capital</span>
                  </li>
                </ul> */}
                <div className="flex gap-8 md:gap-24 text-gray-700 italic mx-auto w-fit">
                  {/* left div */}
                  <div className="w-fit font-semibold flex flex-col gap-4">
                    {fundOverviewData.map((item, index) => {
                      return (
                        <div>
                          {index + 1}. {item.title}
                        </div>
                      );
                    })}
                  </div>
                  {/* right div */}
                  <div className="w-fit flex flex-col gap-4">
                    {fundOverviewData.map((item) => {
                      return <div className="truncate">{item.content}</div>;
                    })}
                    {/* <div>→ LPs get original investment back</div>
                    <div>→ LPs get 8% annually</div>
                    <div>→ Remaining profits split (80% LP / 20% GP)</div> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-5xl h-[44vh] sm:h-[64vh] md:h-[80vh] mx-auto mb-8 overflow-clip ">
              <Image
                src={"/images/fund-overview.png"}
                alt="fund overview image"
                fill
              />
            </Card>

            {/* Card 3 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-5xl mx-auto mb-8 overflow-clip">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <ChartNoAxesCombined className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Profit Distribution Modality
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <div className="text-gray-700 mb-4">
                  Profits from the fund are distributed following a structured
                  waterfall model designed to prioritize the interests of
                  Limited Partners (LPs) before General Partners (GPs) receive
                  their carried interest.
                </div>
                <div className="flex gap-8 md:gap-24 text-gray-700 italic mx-auto w-fit ">
                  {/* left div */}
                  <div className="w-fit font-semibold flex flex-col gap-4">
                    <div>1. Return of Capital</div>
                    <div>2. Preferred Return (Hurdle) </div>
                    <div>3. Carried Interest Split </div>
                  </div>
                  {/* right div */}
                  <div className="w-fit flex flex-col gap-4">
                    <div>→ LPs get original investment back</div>
                    <div>→ LPs get 8% annually</div>
                    <div>→ Remaining profits split (80% LP / 20% GP)</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="relative cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg max-w-5xl h-[44vh] sm:h-[64vh] md:h-[80vh] mx-auto mb-8 overflow-clip ">
              <Image
                src={"/images/profit-distribution-modality.png"}
                alt="fund overview image"
                fill
              />
            </Card>
          </div>

          {/* CTA button for Form */}
          <button
            onClick={() => setIsFormVisible((prev) => !prev)}
            className="block bg-green-600 hover:bg-green-700 text-white font-semibold my-8 mx-auto  px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Request Fund Information
          </button>
          {/* FORM */}
          <Card
            className={`${isFormVisible ? "flex" : "hidden"} p-4 md:w-10/12 max-w-4xl mx-auto`}
          >
            <MyForm className="text-gray-700" />
          </Card>
        </div>
      </section>
    </div>
  );
}

export default LimitedPartners;
