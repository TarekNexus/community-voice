"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

type Area = {
  id: number;
  category: string;
  title: string;
};

const areas: Area[] = [
  { id: 1, category: "Economy", title: "Strong Economy and Jobs" },
  { id: 2, category: "Health", title: "Affordable Healthcare for All" },
  { id: 3, category: "Education", title: "Quality Education for Everyone" },
  { id: 4, category: "Environment", title: "Clean Energy and Environment" },
  { id: 5, category: "Community", title: "Connected Communities" },
  { id: 6, category: "Infrastructure", title: "Reliable Infrastructure" },
];

// Container variant for staggered entrance
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// Card entrance and hover variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.95] },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

// Arrow rotation on hover
const arrowVariants: Variants = {
  hover: { rotate: 45, transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function FocusAreas() {
  return (
    <section className="max-w-7xl mx-auto w-11/12">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gray-100 text-xs sm:text-sm text-gray-600">
          Key Areas
        </span>
        <h2 className="mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-[55px] font-semibold text-[#1F473E] leading-snug">
          What We’re Working Toward
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-2xl text-[#1F473E]">
          Six focus areas that guide our work and our vision for the future.
        </p>
      </div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {areas.map((area) => (
          <motion.div
            key={area.id}
            className="group relative px-4 sm:px-6 pt-3 sm:pt-1 pb-5 rounded-2xl flex flex-col justify-between
                      min-h-[220px] sm:min-h-[260px] lg:h-[283px]
                      bg-[#F5F4EF] text-[#1F473E] shadow-sm transition-colors duration-500
                      hover:bg-[#1F473E] hover:text-[#F5F4EF]"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex flex-col justify-between h-full overflow-hidden">
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <motion.button
                  className="text-[10px] sm:text-xs px-3 sm:px-5 py-1 rounded-full border border-[#1F473E] transition-colors duration-300 group-hover:border-white group-hover:text-[#F5F4EF]"
                  whileHover={{ scale: 1.1 }}
                >
                  {area.category}
                </motion.button>

                <motion.div variants={arrowVariants} className="origin-center">
                  <ArrowUpRight className="h-10 w-10 sm:h-14 sm:w-14 lg:h-[63px] lg:w-[63px] transition-colors duration-300 group-hover:text-[#F5F4EF]" />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-[36px] pr-2 sm:pr-4 leading-snug mt-4 group-hover:text-[#F5F4EF]">
                {area.title}
              </h3>

              {/* Bottom Row */}
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] transition-colors duration-300 group-hover:text-[#F5F4EF] mt-4">
                {area.id.toString().padStart(2, "0")}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
