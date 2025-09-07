"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariant: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Highlights: React.FC = () => {
  return (
    <section className="w-11/12 mx-auto bg-[#0f3d2e] text-white py-16 rounded-[20px]">
      <div className="max-w-[1380px] mx-auto px-6 space-y-10">
        {/* Top section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <span className="inline-block border-white border bg-white/10 text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-3 rounded-full">
            Highlights
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold">
            Together Starts Here
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-[22px] max-w-2xl mx-auto">
            Every journey needs a beginning. Dive in, explore, and see <br />
            where you can make the difference that counts.
          </p>
        </motion.div>

        {/* Grid section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 md:gap-3"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left side */}
          <div className="flex flex-col gap-3">
            {/* Card 1 */}
            <Link href="/our-plans">
              <motion.div
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative flex-1 overflow-hidden rounded-lg md:rounded-4xl min-h-[280px] flex flex-col justify-between p-6 cursor-pointer"
                style={{
                  backgroundImage: `url('/image/our-plans.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 rounded-lg md:rounded-4xl bg-white opacity-10"></div>
                <div className="flex justify-between relative z-10">
                  <p className="text-sm sm:text-base md:text-lg">
                    See how our vision turns <br /> into action, with clear steps <br /> that
                    shape a stronger <br /> future for everyone.
                  </p>
                  <button className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center bg-[#1EDB24] rounded-full">
                    <FiArrowUpRight size={28} className="sm:size-10 text-[#2b3e2c] font-bold" />
                  </button>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold relative z-10">
                  Our plans
                </h3>
              </motion.div>
            </Link>

            {/* Card 4 */}
            <Link href="/donate-us">
              <motion.div
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative mb-4 md:mb-0 rounded-lg md:rounded-4xl overflow-hidden bg-[#437E6B] min-h-[180px] flex flex-col justify-between p-6 cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold mb-2">
                  Donate now
                </h3>
                <div className="flex justify-between relative z-10">
                  <p className="text-xs sm:text-sm md:text-base">
                    Every contribution, big or small, fuels <br /> the work we do and helps us <br /> keep moving forward.
                  </p>
                  <button className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center bg-[#4E4D4D] rounded-full">
                    <FiArrowUpRight size={28} className="sm:size-10 text-white font-bold" />
                  </button>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Right side */}
          <div className="col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Card 3 */}
              <Link href="/how-to-vote">
                <motion.div
                  variants={cardVariant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative rounded-lg md:rounded-4xl overflow-hidden bg-gray-800 min-h-[220px] flex flex-col justify-between p-6 bg-cover bg-center cursor-pointer"
                  style={{ backgroundImage: "url('/image/vote.jpg')" }}
                >
                  <div className="absolute inset-0 rounded-lg md:rounded-4xl bg-white opacity-10"></div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold mb-2 relative z-10">
                    How to vote
                  </h3>
                  <div className="flex justify-between relative z-10">
                    <p className="text-xs sm:text-sm md:text-base">
                      See how our vision turns into <br /> action, with clear steps that <br /> shape a stronger future for everyone.
                    </p>
                    <button className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center bg-[#1EDB24] rounded-full">
                      <FiArrowUpRight size={28} className="sm:size-10 text-black/80 font-bold" />
                    </button>
                  </div>
                </motion.div>
              </Link>

              {/* Card 2 */}
              <Link href="/get-involved">
                <motion.div
                  variants={cardVariant}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="relative rounded-lg md:rounded-4xl overflow-hidden bg-[#437E6B] min-h-[220px] flex flex-col justify-between p-6 cursor-pointer"
                >
                  <div className="flex justify-between relative z-10">
                    <p className="text-xs sm:text-sm md:text-base">
                      See how our vision turns into <br /> action, with clear steps that <br /> shape a stronger future for everyone.
                    </p>
                    <button className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center bg-[#4E4D4D] rounded-full">
                      <FiArrowUpRight size={28} className="sm:size-10 text-white font-bold" />
                    </button>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold relative z-10">
                    Get involved
                  </h3>
                </motion.div>
              </Link>

              {/* Card 5 */}
              <motion.div
                variants={cardVariant}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative rounded-lg md:rounded-4xl col-span-1 sm:col-span-2 overflow-hidden bg-gray-800 min-h-[250px] flex flex-col justify-between p-6 cursor-pointer"
                style={{ backgroundImage: `url('/image/people.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 rounded-lg md:rounded-4xl bg-[rgba(28,75,65,0.25)] z-0"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[35px] font-semibold mb-2 z-10">
                  Our People
                </h3>
                <div className=" flex items-center gap-4 relative z-10">
                  <p className="text-xs sm:text-sm  md:text-base leading-5">
                    See how our vision turns into action, with clear steps that shape a stronger future for everyone.
                  </p>
                  <Link href="/our-people">
                    <div>
                      <button className="w-12 h-12 sm:w-[60px] sm:h-[60px] flex items-center justify-center bg-[#1EDB24] rounded-full">
                        <FiArrowUpRight size={28} className="sm:size-10 text-black/80 font-bold" />
                      </button>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Highlights;
