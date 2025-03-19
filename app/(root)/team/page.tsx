"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import { teamData } from "./teamData";

const TeamPage = () => {
  return (
    <div className="min-h-screen py-12 mt-14 px-4 md:px-12 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
        Meet Our Team
      </h1>

      {Object.keys(teamData).map((council) => (
        <section key={council} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center text-fuchsia-400">
            {council}
          </h2>
          <div className="flex gap-8 justify-items-center">
            {teamData[council].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="backdrop:blur-3xl border border-slate-500 p-12 rounded-2xl shadow-xl flex flex-col items-center text-center w-full max-w-xs"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-2xl mb-4 object-cover w-44 h-44 border-4 border-fuchsia-500"
                />
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-fuchsia-400 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="hover:text-blue-400" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="hover:text-blue-400" />
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    <Instagram className="hover:text-pink-400" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TeamPage;
