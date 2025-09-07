"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative md:rounded-3xl md:w-11/12 mb-6 mx-auto bg-contain object-fill md:top-6 h-[755px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 md:rounded-3xl bg-black opacity-45"></div>

      <div className="relative text-center text-white z-10 px-4 sm:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold leading-snug md:leading-tight mb-4"
        >
          Stronger Voices <br />
          United Across Australia <br /> Creating Real Impact
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl lg:text-[22px] mb-5 md:mb-20 leading-relaxed"
        >
          Join fellow Australians in speaking up, influencing decisions, and{" "}
          <br className="hidden sm:block" />
          making a difference nationwide.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.2 }}
          className="flex md:flex-row flex-col items-center justify-center gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Link href={"/get-involved"}>
              <button className="cursor-pointer text-white bg-black/80 w-[140px] h-[48px] backdrop-blur-md border hover:bg-black/80 hover:backdrop-blur-md rounded-4xl flex items-center justify-between gap-2 px-1">
                <span className="py-3 flex justify-center text-lg sm:text-xl pl-4">
                  Join us
                </span>
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1EDB24]">
                  <FiArrowUpRight
                    size={24}
                    className="sm:size-7 text-black font-bold"
                  />
                </span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Link href={"/donate-us"}>
              <Button className="cursor-pointer text-white text-lg sm:text-xl bg-white/10 w-[140px] h-[48px] backdrop-blur-md border hover:bg-white/10 hover:backdrop-blur-md rounded-4xl flex items-center justify-center gap-2 px-1 shadow-lg">
                Donate now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
