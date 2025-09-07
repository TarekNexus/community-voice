"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardData = [
  {
    title: "What We Stand for",
    description:
      "We act with integrity, fairness, and purpose in everything we do, making sure our actions reflect the principles we believe in.",
    image: "/image/round1.png",
  },
  {
    title: "Our Foundation",
    description:
      "Built on trust, respect, and shared commitment, this foundation supports everything we do and keeps us moving together.",
    image: "/image/round.png",
  },
  {
    title: "At the Core",
    description:
      "People, community, and impact sit at the heart of all we pursue, driving every choice and action we take.",
    image: "/image/round2.png",
  },
  {
    title: "What Drives Us",
    description:
      "Passion, innovation, and collaboration push us forward, inspiring us to make meaningful change every day.",
    image: "/image/round3.png",
  },
];

// Variants for staggered animation
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Values: React.FC = () => {
  return (
    <section className="relative mx-auto my-12 bg-white">
      {/* Top section */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full bg-gray-100 text-emerald-700 text-xs sm:text-sm py-2 sm:py-3 px-3 sm:px-4">
          Our values
        </span>

        <h2 className="text-[#1F473E] text-2xl sm:text-3xl md:text-4xl lg:text-[55px] font-semibold mt-4">
          Where Action Meets Opportunity
        </h2>

        <p className="mt-4 max-w-2xl text-[#1F473E] text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed">
          Every page here leads to something meaningful. Learn, <br /> vote,
          join, or give and see how you can contribute.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        className="md:max-w-9/12 mx-auto px-2 md:px-0 mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cardData.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Card className="flex flex-col justify-between p-3 rounded-2xl border-2 border-gray-200 shadow-[0_1px_0_#e5e7eb,0_6px_24px_-12px_rgba(16,24,40,.16)] bg-white h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  height={48}
                  width={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[22px] font-bold text-[#1C4B41] text-center sm:text-left">
                  {card.title}
                </h3>
                <div className="mt-4 rounded-xl min-h-[150px] sm:min-h-[160px] md:min-h-[180px] border border-gray-300 bg-[#f5f4ef] px-3 pt-4 flex items-center">
                  <p className="text-xs sm:text-sm md:text-base lg:text-sm text-[#1C4B41] font-medium leading-6 text-center sm:text-left">
                    {card.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Values;
