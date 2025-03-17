import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUsers,
  FaEye,
  FaBullseye,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";
import { containerVariants, itemVariants } from "@/lib/utils";

const AboutPage = () => {
  const missionPoints = [
    "Develop advanced technical skills among students",
    "Foster meaningful Industry-Institute interaction programs",
    "Promote collaborative learning and innovation culture",
    "Organize workshops and seminars with industry experts",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-12"
        >
          About Us
        </motion.h1>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-500/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-4xl font-bold text-white">Our Philosophy</h3>
          </div>
          <p className="text-gray-200 font-semibold text-lg leading-relaxed">
            We believe in bridging the academic-industry divide through
            immersive Industry-Institute programs. Our collaborative ecosystem
            nurtures technical mastery, corporate acumen, and innovative
            problem-solving skills. By fostering knowledge-sharing and hands-on
            experiences, we empower students to become pioneers in their fields
            while maintaining a strong ethical foundation for positive global
            impact.
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 my-20"
        >
          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-4xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-200 font-semibold text-lg leading-relaxed">
              At IEEE BPIT, we envision a future where technology and human
              potential converge to create transformative solutions. We aim to
              cultivate awareness of cutting-edge technological advancements
              while fostering recognition of technical professionals' vital role
              in shaping our global society.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-4xl font-bold text-white">Our Mission</h3>
            </div>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-200 font-semibold text-lg"
                >
                  <span className="shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-2xl overflow-hidden shadow-xl mb-16 group"
        >
          <Image
            src="/team_about.jpg"
            alt="Our Team"
            layout="fill"
            objectFit="cover"
            className="rounded-lg group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent flex items-end p-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <FaUsers className="text-white text-4xl" />
              <h2 className="text-3xl font-bold text-white">
                Passionate Team Driving Innovation
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;