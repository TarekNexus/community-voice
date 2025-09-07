"use client";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  ArrowUp,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div
      className="bg-cover md:w-11/12 mx-auto md:rounded-tl-[80px] rounded-tl-[40px] rounded-tr-[40px] md:rounded-tr-[80px] bg-center py-16 px-0 md:px-4"
      style={{ backgroundImage: "url(/image/footer.png)" }}
    >
      <footer className="text-white">
        <div className="lg:px-20 md:px-16 px-4 mx-auto flex flex-col justify-around gap-8 text-sm">
          {/* Logo Top */}
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Community Voice"
              width={80}
              height={80}
              className="mb-3"
            />
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 justify-between items-center md:items-start border-t border-[#FFFFFF] gap-8 md:gap-0">
            {/* Left Section - Contact */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex md:items-center gap-3 justify-start">
                <div className="bg-[#1EDB2480]/50 w-[34px] h-[34px] flex items-center justify-center rounded-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-white">
                  43 Borthwick St Minto -2566
                </span>
              </div>

              <div className="flex items-center gap-3 justify-start">
                <div className="bg-[#1EDB2480]/50 w-[34px] h-[34px] flex items-center justify-center rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-white">
                  info@communityvoice.org.au
                </span>
              </div>

              <div className="flex items-center gap-3 justify-start">
                <div className="bg-[#1EDB2480]/50 w-[34px] h-[34px] flex items-center justify-center rounded-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-white">0412458815</span>
              </div>
            </div>

            {/* Center Section - Title, Quote, Social */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[27px] font-bold">Community Voice</h2>
              <p className="mt-2 text-white text-center">
                Every action, every voice, and every contribution matters as we
                work side by side to shape a better tomorrow.
              </p>
              <div className="flex mt-6 gap-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-green-500/50 w-[55px] h-[55px] flex items-center justify-center rounded-lg cursor-pointer"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-green-500/50 w-[55px] h-[55px] flex items-center justify-center rounded-lg cursor-pointer"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Right Section - Links */}
            <div className="order-3 md:col-span-2 lg:col-span-1 flex justify-center lg:justify-end text-center md:text-center lg:text-left mt-6 md:mt-0">
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-2 lg:grid-cols-1 text-left gap-2">
                  {[
                    { name: "Our plans", href: "/our-plans" },
                    { name: "Get Involved", href: "/get-involved" },
                    { name: "How to Vote", href: "/how-to-vote" },
                    { name: "Our People", href: "/our-people" },
                  ].map((link) => (
                    <Link key={link.name} href={link.href}>
                      <motion.h1
                        className="lg:text-[25px] md:text-[20px] text-lg font-semibold text-white cursor-pointer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        {link.name}
                      </motion.h1>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-10 border-t border-[#FFFFFF] pt-5 flex flex-col md:flex-row items-center justify-between text-xs text-gray-200 gap-4">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <p>@2025 FAARNS. All rights reserved</p>
            </div>

            {/* Center */}
            <div className="flex-1 flex justify-center">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-full border px-4 py-2 flex items-center gap-2 text-white border-white"
              >
                <ArrowUp className="w-4 h-4" /> Back To Top
              </motion.button>
            </div>

            {/* Right */}
            <div className="flex-1 flex justify-center md:justify-end gap-4">
              <Link href="#" className="underline text-[16px]">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="#" className="underline text-[16px]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
