import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FocusAreas() {
  return (
    <section className="max-w-[810px] mx-auto mb-10 w-11/12">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        {/* Card 1 (highlighted) */}
        <div
          className="group relative md:max-w-[380px] w-full px-6 pt-1 pb-5 rounded-2xl shadow-sm flex flex-col justify-between h-[283px] border-2 
          bg-[#1F473E] text-white hover:bg-[#F5F4EF] hover:text-[#1F473E] transition-colors duration-300"
        >
          <div className="flex  flex-col justify-between h-full">
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <button
                className="text-xs px-5 py-1 rounded-full border border-white text-white 
                group-hover:border-[#1F473E] group-hover:text-[#1F473E] transition-colors duration-300"
              >
                Lend a hand, make a difference
              </button>

              <ArrowUpRight className="h-[63px] w-[63px] text-[#F5F4EF] group-hover:text-[#1F473E] transition-colors duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-[30px] md:text-[36px] pr-4 leading-snug mt-4 transition-colors duration-300">
              Join as a Volunteer
            </h3>

            {/* Bottom Row */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-[64px] transition-colors duration-300">
                01
              </span>

              <button className="flex items-center gap-1 py-2 text-sm border border-white p-0.5 rounded-full pl-3 transition-colors duration-300 group-hover:border-[#1F473E] group-hover:text-[#1F473E]">
                Signup today
                <ArrowUpRight className="h-6 w-6 rounded-full bg-white text-[#1F473E] group-hover:bg-[#1F473E] group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 (normal) */}
        <Link href={"/donate-us"}>
          {" "}
          <div
            className="group relative md:max-w-[360px] w-full px-6 pt-1 pb-5 rounded-2xl shadow-sm flex flex-col justify-between h-[283px] border-2 
          bg-[#F5F4EF] text-[#1F473E] hover:bg-[#1F473E] hover:text-white transition-colors duration-300"
          >
            <div className="flex flex-col   justify-between h-full">
              {/* Top Row */}
              <div className="flex items-center justify-between">
                <button
                  className="text-xs px-5 py-1 rounded-full border border-[#1F473E] text-[#1F473E] 
                group-hover:border-white group-hover:text-white transition-colors duration-300"
                >
                  Support programs that matter
                </button>

                <ArrowUpRight className="h-[63px] w-[63px] text-[#1F473E] group-hover:text-[#F5F4EF] transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-[30px]  md:text-[36px] pr-4 leading-snug mt-4 transition-colors duration-300">
                Donate
              </h3>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-[64px] transition-colors duration-300">
                  02
                </span>

                <button className="flex items-center gap-1  py-2 text-sm border border-[#1F473E] p-0.5 rounded-full pl-3 transition-colors duration-300 group-hover:border-white group-hover:text-white">
                  Support us
                  <ArrowUpRight className="h-6 w-6 rounded-full bg-[#1F473E] text-white group-hover:bg-white group-hover:text-[#1F473E] transition-colors duration-300" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
