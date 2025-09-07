"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Our plans", href: "/our-plans" },
    { name: "Our people", href: "/our-people" },
    { name: "How to vote", href: "/how-to-vote" },
    { name: "Get involved", href: "/get-involved" },
  ];

  return (
    <div className="w-full flex justify-center">
      <nav className="w-11/12 sm:w-10/12 lg:w-9/12 h-12 z-40 md:bg-white/40 md:backdrop-blur-md md:border top-10 fixed md:border-white/30 rounded-full px-3 sm:px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium text-black">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`py-1 ${
                pathname === item.href ? "text-[#1EDB24] font-bold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* Desktop Donate Button */}
        <Link href={"/donate-us"}>
          <Button className="bg-neutral-800 hidden md:flex cursor-pointer text-white rounded-full items-center justify-between gap-2 w-36 sm:w-38 h-9 py-2 px-2 shadow-lg hover:shadow-xl font-liquidGlass">
            <span className="py-1 text-sm px-2">Donate now</span>
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-[#1EDB24]">
              <ArrowUpRight className="text-black" />
            </span>
          </Button>
        </Link>

        {/* Hamburger Icon */}
        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#1F473E]"
          >
            {isOpen ? (
              <HiX className="text-white w-6 h-6" />
            ) : (
              <HiMenu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-11/12 bg-white/90 backdrop-blur-md rounded-xl shadow-lg flex flex-col items-center py-4 md:hidden z-50">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2 w-full text-center ${
                  pathname === item.href ? "text-[#1EDB24] font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={"/donate-us"}
              onClick={() => setIsOpen(false)}
              className={`py-2 w-full text-center ${
                pathname === "/donate-us" ? "text-[#1EDB24] font-bold" : ""
              }`}
            >
              Donate now
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
