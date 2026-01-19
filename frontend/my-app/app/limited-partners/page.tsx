"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChartNoAxesCombined, HandCoins, LineChart, Scale } from "lucide-react";
import React from "react";

function LimitedPartners() {
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
              <div className="text-gray-600 text-xl mb-4">
                Institutional and strategic investors seeking exposure to
                Nepal’s growth sectors
              </div>
              <div className="text-gray-600">
                At Maverick Kautilya, we provide our investors with a
                comprehensive view of our funds, strategies, and operations to
                ensure informed investment decisions. Our approach combines
                transparency, flexibility, and alignment with investor
                interests.
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <HandCoins className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Fund & Strategy Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>Fund presentations and investment highlights</li>

                  <li>
                    Core investment strategy, portfolio construction, and sector
                    focus
                  </li>
                  <li>
                    Expected returns, target hurdle rates, and exit strategy
                    considerations
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <Scale className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Legal & Governance Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    Limited Partnership Agreement (LPA) or equivalent structure
                    documents
                  </li>
                  <li>
                    Fund governance, management fee, and carried interest
                    structure
                  </li>
                  <li>
                    Alignment of interests through GP commitment and robust
                    conflict-of-interest policies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <ChartNoAxesCombined className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Performance & Operational Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    Historical track record (realized and unrealized
                    performance)
                  </li>
                  <li>
                    Fund projections, cash flow insights, and valuation
                    methodology
                  </li>
                  <li>Risk management practices and ESG integration</li>
                  <li>Custody, audit, and compliance arrangements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <LineChart className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Investor Onboarding & Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>Subscription agreements and investment documentation</li>
                  <li>KYC/AML and regulatory disclosures</li>
                  <li>
                    Investor suitability assessment in line with applicable
                    regulations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LimitedPartners;
