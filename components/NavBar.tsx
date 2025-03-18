"use client";

import RotatingText from "@/src/blocks/TextAnimations/RotatingText/RotatingText";
import { motion } from "framer-motion";
import React from "react";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20 }}
      className="
        fixed top-4 left-1/2 -translate-x-1/2 
        w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] 
        bg-[#0a0f1d]/80 backdrop-blur-3xl text-white rounded-xl shadow-lg 
        flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 z-50
      "
    >
      <div className="flex items-center font-bold text-lg sm:text-xl md:text-2xl font-oswald">
        <span className="mr-2 text-3xl sm:text-4xl">IEEE</span>
        <RotatingText
          texts={["BPIT", "Creativity meets Innovation"]}
          mainClassName="px-2 sm:px-3 py-1 bg-cyan-400 text-black rounded-lg font-bold"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
      </div>
    </motion.div>
  );
};

export default Navbar;
