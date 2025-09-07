import React from "react";

const Hero = () => {
  return (
    <section
      className="relative rounded-none md:rounded-3xl md:w-11/12 md:mb-14 mb-6 mx-auto top-0 md:top-6 h-[471px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/image/plans-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with rgba(0, 0, 0, 0.45) */}
      <div className="absolute inset-0 rounded-none md:rounded-3xl bg-black opacity-45"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold text-white leading-snug">
             Building a Future That <br /> Works for Everyone
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-200 mt-2">
             Our plans are grounded in real needs, shaped by our community, and driven
          by a shared vision for a better tomorrow.
        </p>
      </div>
    </section>
  );
};

export default Hero;
