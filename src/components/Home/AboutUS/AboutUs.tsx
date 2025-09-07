"use client";

import { FiArrowUpRight } from "react-icons/fi";
import CountUp from "react-countup";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Motion variants for the cards
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="md:w-9/12 mx-auto bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <span className="inline-block bg-gray-100 text-[#1F473E] text-xs sm:text-sm px-4 py-1 rounded-full">
            About us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1F473E] font-bold leading-snug">
            Empowering Australians, <br /> One Voice at a Time
          </h2>

          <Link href={"/get-involved"}>
            <button className="flex cursor-pointer items-center gap-2 px-2 py-2 border border-black rounded-full transition text-sm sm:text-base md:text-lg">
              Join the movement
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-green-500">
                <FiArrowUpRight
                  size={22}
                  className="sm:size-6 md:size-7 text-white font-bold"
                />
              </span>
            </button>
          </Link>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-sm sm:text-base md:text-lg text-[#616161] leading-relaxed"
          >
            We are a concerned group of citizens and advocates within our local
            government area who are committed to promoting transparency,
            accountability, and genuine community participation in the
            decision-making processes that affect our community’s well-being.
          </motion.p>

          {/* Count-up Cards */}
          <motion.div
            className="grid grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {[{ end: 100, label: "Members", desc: "A Growing Network of Active Australians" },
              { end: 20, label: "Programs", desc: "Programs Driving Real Community Impact" },
              { end: 15, label: "Events", desc: "Events Connecting Voices Across Australia" }].map(
              (item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="space-y-2"
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                    <CountUp
                      start={0}
                      end={item.end}
                      duration={3}
                      suffix="+"
                      enableScrollSpy
                      scrollSpyDelay={100}
                    >
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#1EDB24]">{item.label}</p>
                  <p className="text-xs sm:text-sm text-[#616161]">{item.desc}</p>
                </motion.div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
