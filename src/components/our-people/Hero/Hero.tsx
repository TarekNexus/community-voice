import React from "react";

const Hero = () => {
  return (
    <section
      className="relative rounded-none md:rounded-3xl md:w-11/12 mb-14 mx-auto top-0 md:top-6 h-[471px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/image/our-people.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with rgba(0, 0, 0, 0.45) */}
      <div className="absolute inset-0 rounded-none md:rounded-3xl bg-black opacity-45"></div>

      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold text-white leading-snug">
           Meet the People <br /> Behind the Movement
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-[22px] text-gray-200 mt-2">
           Our strength comes from everyday people who care, <br /> work, and act for change.
        </p>
      </div>
    </section>
  );
};

export default Hero;
