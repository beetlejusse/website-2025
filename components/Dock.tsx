"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { joinUsURL } from "@/lib/utils";

const navItems = [
  { href: "sig", label: "S.I.G" },
  { href: "/dock_events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/", icon: "/ieee logo.jpg", label: "" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: joinUsURL, label: "Join Us" },
];

export const DockInfo = () => {
  const [isVisible, setIsVisible] = useState(true);
  const dockRef = useRef<HTMLDivElement>(null);
  let idleTimeout = useRef<NodeJS.Timeout | null>(null);

  const startIdleTimer = () => {
    if (idleTimeout.current) clearTimeout(idleTimeout.current);
    idleTimeout.current = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  useEffect(() => {
    startIdleTimer();

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerHeight - e.clientY < 50) {
        setIsVisible(true);
        startIdleTimer();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (idleTimeout.current) clearTimeout(idleTimeout.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={dockRef}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
          className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-[95vw] sm:w-[80vw] md:w-[60vw] lg:w-[26vw] max-w-[650px] bg-gray-900/80 backdrop-blur-lg border border-white/20 text-white px-2 py-2 rounded-full shadow-lg flex flex-wrap justify-center items-center gap-2 md:gap-3 lg:gap-4 z-50"
        >
          {navItems.map(({ href, icon, label }, index) =>
            href ? (
              <Link
                key={index}
                href={href}
                target={href.startsWith("http") ? "_blank" : "_self"}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center cursor-pointer space-y-1"
                >
                  {typeof icon === "string" ? (
                    <Image
                      src={icon}
                      alt="IEEE Logo"
                      width={40}
                      height={40}
                      className="rounded w-10 h-10 sm:w-13 sm:h-13 cursor-auto"
                    />
                  ) : null}

                  {label && (
                    <Button className="text-[10px] sm:text-xs w-9 h-9 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center bg-black/80 text-white font-semibold hover:bg-black/90 transition-all cursor-pointer whitespace-nowrap">
                      {label}
                    </Button>
                  )}
                </motion.div>
              </Link>
            ) : null
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
