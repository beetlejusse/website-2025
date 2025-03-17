"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const navItems = [
  { href: "/events_dock", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/", icon: "/ieee logo.jpg", label: "" },
  { href: "/faculty", label: "Faculty" },
  { href: "/googleForm", label: "Join Us" },
];

export const DockInfo = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", damping: 20, stiffness: 150 }}
    className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[20vw] max-w-[600px] bg-gray-900/80 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-full shadow-lg flex justify-around items-center"
  >
    {navItems.map(({ href, icon, label }, index) => (
      <Link key={index} href={href}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center cursor-pointer"
        >
          {typeof icon === "string" ? (
            <Image
              src={icon}
              alt="IEEE Logo"
              width={60}
              height={60}
              className="rounded w-12 h-12 cursor-auto"
            />
          ) : (
            <div></div>
          )}
          {label && (
            <Button className="text-sm w-14 h-14 rounded-xl flex items-center justify-center bg-black/80 text-white hover:bg-black/90 transition-all cursor-pointer">
              {label}
            </Button>
          )}
        </motion.div>
      </Link>
    ))}
  </motion.div>
);
