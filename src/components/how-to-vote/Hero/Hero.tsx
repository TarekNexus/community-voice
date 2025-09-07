import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative md:rounded-3xl md:w-11/12 mb-7 mx-auto bg-[#437E6B] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:top-6 h-[471px] flex items-center justify-center">
      {/* Overlay with rgba(0, 0, 0, 0.45) */}
      <div className="absolute inset-0 md:rounded-3xl bg-black opacity-45"></div>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold text-white leading-snug">
          Your Guide to Voting
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-white mt-2">
          Follow these simple steps to make your vote count. <br /> You can also
          download guides and flyers for later.
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <button className="cursor-pointer text-white bg-black/80 max-w-[340px] h-[48px] backdrop-blur-md border hover:bg-black/80 hover:backdrop-blur-md rounded-4xl flex items-center justify-between gap-2 px-1">
            <span className="py-3 flex justify-center md:text-xl text-sm pl-4">
              Download Voting Guide (PDF)
            </span>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1EDB24]">
              <FiArrowUpRight size={30} className="text-black font-bold" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
