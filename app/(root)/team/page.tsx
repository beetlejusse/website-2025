"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  ChevronDown,
  ExternalLink,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { teamData } from "./teamData";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const SectionHeader = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center underline text-slate-300 flex items-center justify-center gap-3 ">
        {title}
      </h2>
    </motion.div>
  );
};

const TeamMemberCard = ({ member, isExpanded, onClick, index }: any) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <motion.div
        layout
        onClick={onClick}
        className={cn(
          "relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border",
          isExpanded
            ? "bg-zinc-800/50 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
            : "bg-zinc-800/50 hover:bg-zinc-800 border-zinc-700/50 hover:border-fuchsia-500/50 hover:shadow-md hover:shadow-fuchsia-500/10"
        )}
        initial={{ borderRadius: 16 }}
        animate={{
          borderRadius: isExpanded ? 16 : 16,
          transition: { duration: 0.3 },
        }}
        whileHover={
          !isExpanded ? { scale: 1.02, transition: { duration: 0.2 } } : {}
        }
        whileTap={!isExpanded ? { scale: 0.98 } : {}}
      >
        <motion.div
          layout="position"
          className="flex items-center p-4 md:p-6 gap-4"
        >
          <div className="relative">
            <Image
              src={member.image || "/placeholder.svg?height=60&width=60"}
              alt={member.name}
              width={100}
              height={70}
              className={cn(
                "rounded-lg object-cover transition-all duration-300",
                isExpanded
                  ? "border-2 border-emerald-500"
                  : "border-2 border-fuchsia-500"
              )}
            />
            {!isExpanded && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute -bottom-2 -right-2 bg-zinc-900 rounded-full p-1 border border-zinc-700"
              >
                <Users className="w-4 h-4 text-emerald-400" />
              </motion.div>
            )}
          </div>
          <div className="flex-1">
            <motion.h3
              layout="position"
              className="font-bold text-xl md:text-2xl"
            >
              {member.name}
            </motion.h3>
            <motion.p
              layout="position"
              className="text-emerald-400 text-sm font-semibold md:text-base"
            >
              {member.position}
            </motion.p>
          </div>
          <motion.div
            layout="position"
            className={cn(
              "flex items-center justify-center rounded-full w-10 h-10 transition-colors",
              isExpanded
                ? "bg-emerald-500"
                : "bg-zinc-700 group-hover:bg-fuchsia-500"
            )}
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isExpanded ? (
                <ChevronDown className="w-5 h-5 text-black" />
              ) : (
                <ChevronDown className="w-5 h-5 ml-1 text-white" />
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="px-4 md:px-6 pb-6"
            >
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative group">
                    <Image
                      src={
                        member.image || "/placeholder.svg?height=300&width=300"
                      }
                      alt={member.name}
                      width={300}
                      height={300}
                      className="rounded-xl w-full object-cover border-2 border-emerald-500 transition-all duration-300 group-hover:border-fuchsia-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <p className="text-white font-medium text-center px-2">
                        {member.name}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
                    <h4 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Connect with{" "}
                      {member.name.split(" ")[0]}
                    </h4>
                    <div className="flex flex-col space-y-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zinc-300 hover:text-blue-400 transition-colors group"
                      >
                        <div className="bg-zinc-700 group-hover:bg-blue-600 p-2 rounded-lg transition-colors">
                          <FaLinkedin className="w-4 h-4" />
                        </div>
                        <span>Connect on LinkedIn</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-zinc-300 hover:text-zinc-100 transition-colors group"
                      >
                        <div className="bg-zinc-700 group-hover:bg-black p-2 rounded-lg transition-colors">
                          <BsTwitter className="w-4 h-4" />
                        </div>
                        <span>Follow on Twitter</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const TeamPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true });

  const handleCardClick = (councilName: string, memberIndex: number) => {
    const id = `${councilName}-${memberIndex}`;
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <div className="relative min-h-screen py-12 mt-14 px-4 md:px-12 text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-emerald-400 to-fuchsia-500 text-transparent bg-clip-text">
            Meet Our Team
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Our talented team of professionals is dedicated to delivering
            exceptional results and driving innovation in everything we do.
          </p> 
        </motion.div>
        <div className="space-y-20">
          {Object.keys(teamData).map((council) => (
            <section key={council} className="space-y-6">
              <SectionHeader title={council} />
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {teamData[council].map((member, index) => (
                  <TeamMemberCard
                    key={index}
                    member={member}
                    index={index}
                    isExpanded={expandedId === `${council}-${index}`}
                    onClick={() => handleCardClick(council, index)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
