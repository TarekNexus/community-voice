"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // <-- import framer-motion
import Steps1 from "../../../../public/image/Steps1.png";
import Steps2 from "../../../../public/image/Steps2.png";
import Steps3 from "../../../../public/image/Steps3.png";
import Steps4 from "../../../../public/image/Steps4.png";

const steps = [
  {
    id: 1,
    title: "Enrol to Vote",
    desc: "Make sure you’re on the roll – check your enrolment online or update your details if you’ve moved.",
    img: Steps1,
  },
  {
    id: 2,
    title: "Find Your Polling Place",
    desc: "Locate where you’ll vote – polling booths are listed on the AEC website and in local newspapers.",
    img: Steps2,
  },
  {
    id: 3,
    title: "Collect Your Ballot Papers",
    desc: "When you arrive, staff will give you two papers – one for the House of Representatives and one for the Senate.",
    img: Steps3,
  },
  {
    id: 4,
    title: "Fill Out & Lodge Your Vote",
    desc: "Complete your ballot papers carefully, following the instructions, and place them into the ballot box to lodge your vote.",
    img: Steps4,
  },
];

export default function Steps() {
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto md:my-20 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <motion.div
          key={step.id}
          className="bg-white rounded-xl border border-[#D9D9D9] overflow-hidden relative cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
        >
          <div className="relative">
            <Image
              src={step.img}
              alt={step.title}
              width={400}
              height={250}
              className="w-full h-40 object-cover"
            />
            <span className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 text-sm font-medium shadow">
              Step {index + 1}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg text-black">{step.title}</h3>
            <p className="text-sm text-gray-700 mt-2">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
