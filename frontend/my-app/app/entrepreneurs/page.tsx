"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUser, ReceiptText, Scale } from "lucide-react";
import MyForm from "../components/myForm";

function Entrepreneurs() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <div className="flex flex-col flex-1 mt-20">
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-center mb-16 w-full">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Partner With <span className="text-green-600">Maverick</span>
              </h2>
              <div className="text-gray-600 font-semibold text-xl mb-4">
                Seeking growth capital or project-level investment
              </div>
              <div className="text-gray-600">
                We partner with credible promoters and developers seeking
                structured capital and long-term institutional partners.
                Preliminary assessment focuses on project viability, governance
                readiness, and risk transparency.
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <ReceiptText className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Financial & Commercial Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>Detailed Project / Business Information Memorandum</li>
                  <li>
                    Financial model, including base case and sensitivity
                    analyses
                  </li>
                  <li>
                    Historical audited financial statements (if applicable)
                  </li>
                  <li>Projected cash flow statements</li>
                  <li>
                    Capital expenditure estimates and proposed funding structure
                  </li>
                  <li>
                    Details of existing debt, security arrangements, and
                    guarantees
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <Scale className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Legal & Regulatory Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>
                    Company registration documents and shareholding structure
                  </li>
                  <li>
                    Licenses, approvals, and permits (e.g., survey, generation,
                    construction)
                  </li>
                  <li>
                    Power Purchase Agreement (PPA) or draft PPA (for hydropower
                    projects)
                  </li>
                  <li>
                    Key contracts and agreements (EPC, O&M, concession, land
                    lease)
                  </li>
                  <li>
                    Litigation history and contingent liability disclosure
                  </li>
                  <li>Compliance with sectoral and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader className="flex flex-row items-center justify-center gap-4">
                <FileUser className="w-12 h-12 text-green-600 shrink-0" />
                <CardTitle className="text-2xl font-bold text-center">
                  Promoter & Governance Information
                </CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <ul className="text-gray-600 space-y-2 list-disc list-outside ml-6">
                  <li>Promoter background and track record</li>
                  <li>Board structure and governance framework</li>
                  <li>Related-party transactions (if any)</li>
                  <li>ESG and environmental compliance disclosures</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA button for Form */}
          <button
            onClick={() => setIsFormVisible((prev) => !prev)}
            className="block bg-green-600 hover:bg-green-700 text-white font-semibold my-8 mx-auto  px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit an Investment Proposal
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

export default Entrepreneurs;
