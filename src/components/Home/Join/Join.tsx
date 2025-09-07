"use client";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Join() {
  return (
    <section className="rounded-3xl mt-10 py-12 bg-[#1F473E] flex justify-center text-center items-center px-4 w-11/12 mx-auto mb-12 md:w-10/12 lg:w-9/12">
      <div className="max-w-4xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] text-white font-semibold leading-snug md:leading-tight mb-4"
        >
          Be Part of What Comes Next
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="mb-6 text-base sm:text-lg md:text-xl text-white leading-relaxed"
        >
          Your voice, your actions, and your choices can shape the future. Join
          us today and <br /> take part in making real change happen.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 120 }}
          className="flex justify-center"
        >
          <Link href={"/get-involved"}>
            <button className="cursor-pointer text-white bg-black/80 w-[170px] sm:w-[200px] h-[48px] sm:h-[54px] backdrop-blur-md border hover:bg-black/90 rounded-full flex items-center justify-between px-2">
              <span className="flex-1 text-lg sm:text-xl pl-2 text-left">
                Get involved
              </span>
              <span className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#1EDB24]">
                <FiArrowUpRight
                  size={22}
                  className="sm:size-7 text-black font-bold"
                />
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
