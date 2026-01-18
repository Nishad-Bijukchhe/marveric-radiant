'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, TrendingUp } from 'lucide-react';

const page = () => {
  return (
    <>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* About Us Heading & Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
                Maverick Kautilya Venture Limited is a licensed Private Equity and Venture Capital fund manager operating under Nepal’s Specialized Investment Fund (SIF) framework. We are committed to transform Nepal&apos;s investment landscape by channeling capital into high-growth sectors that drive economic progress.
                <br /><br />
                Our focus spans across energy, infrastructure, technology, and hospitality sectors where strategic capital can unlock untapped potential and drive sustainable growth. By combining best global practices with deep local market insight, we help businesses scale responsibly, deliver superior returns, and contribute meaningfully to Nepal’s evolving economy.
                <br /><br />
                At Maverick, we are more than investors, we are long-term partners committed to building resilient, high-impact companies that shape the future of Nepal.
              </p>
            </div>
          </motion.div>

          {/* Our Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", borderRadius: "1.5rem" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex flex-row justify-center items-center gap-3">
                    <Target className="w-12 h-12 text-green-600" />
                    <CardTitle className="text-2xl font-semibold">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">
                      To set the benchmark for PEVC in Nepal by combining operational excellence with wealth creation and sustainable growth
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)", borderRadius: "1.5rem" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                  <CardHeader className="flex flex-row items-center justify-center gap-3">
                    <TrendingUp className="w-12 h-12 text-green-600" />
                    <CardTitle className="text-2xl font-semibold">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm md:text-base">
                      Invest in visionary entrepreneurs, innovative ideas, and high-growth businesses to drive innovation, create lasting growth, and contribute to Nepal’s development.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page;
