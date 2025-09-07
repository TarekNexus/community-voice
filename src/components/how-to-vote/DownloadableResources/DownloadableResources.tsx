"use client";

import { Download } from "lucide-react";

export default function DownloadableResources() {
  const resources = [
    "Voting Guide (PDF)",
    "District Flyers",
    "Easy Read Version",
    "Translated Guides",
  ];

  return (
    <section className="w-full flex justify-center mb-12">
      <div className="w-10/12 text-center">
        {/* Label */}
        <div className="inline-block bg-white px-4 py-1 rounded-full border text-sm sm:text-base text-gray-600 shadow-sm mb-4">
          Resources
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-semibold text-[#1F473E]">
          Downloadable Resources
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-[#1F473E] mt-2">
          Get printable guides, flyers, and translations to make voting easy.
        </p>

        {/* Download Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-2xl mx-auto">
          {resources.map((item, index) => (
            <div
              key={index}
              className="flex max-h-[60px] max-w-[363px] justify-between items-center bg-[#F7F6F2] rounded-[10px] px-4 py-3"
            >
              {/* Left bar + text */}
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-[#437E6B] rounded-full -ml-5"></span>
                <span className="text-[#1F473E] font-medium text-sm sm:text-base md:text-lg lg:text-lg">
                  {item}
                </span>
              </div>

              {/* Download icon */}
              <Download className="w-5 h-5 text-[#1F473E] stroke-[3]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
