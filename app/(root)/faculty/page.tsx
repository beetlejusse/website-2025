"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, cardVariants } from "@/lib/utils";

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Achal Sharma",
      position: "Dean, HOD - Computer Science",
      image: "/achal_sir.png",
      bio: "AI/ML Expert with 15+ years experience, Published 50+ research papers",
    },
    {
      name: "Dr. Shweta Taneja",
      position: "ASSOCIATE PROFESSOR (CSE)",
      image: "/shweta_mam.png",
      bio: "Cybersecurity Specialist, Awarded Best Faculty 2023",
    },
    {
      name: "Dr. Monika Arora",
      position: "ASSOCIATE PROFESSOR (IT)",
      image: "/monika_mam.png",
      bio: "Data Science Researcher, Lead 10+ industry projects",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-2 sm:mb-4">
            Our Faculty
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-cyan-100">
            Meet our visionary academic leaders
          </p>
        </motion.div>

        {/* Faculty Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
        >
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-black/30 backdrop-blur-lg rounded-xl lg:rounded-2xl p-4 sm:p-6 shadow-lg lg:shadow-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Faculty Image */}
              <div className="relative aspect-square w-full rounded-lg lg:rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Faculty Details */}
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  {member.name}
                </h3>
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 h-1 w-16 sm:w-20 mx-auto mb-2 sm:mb-4 rounded-full" />
                <p className="text-gray-300 text-base sm:text-lg mb-2 sm:mb-4 font-medium">
                  {member.position}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Faculty;