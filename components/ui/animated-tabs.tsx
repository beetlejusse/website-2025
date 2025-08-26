"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Member, seniorCouncil, juniorCouncil, coordinators, MainCouncil, WIE, COMSOC } from "@/lib/data";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

function TabCarousel({ items }: { items: Member[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
      {/* Image side (taller image) */}
      <div className="w-full h-[45vh] md:h-[60vh] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] border-none bg-black/20">
        <div className="relative w-full h-full">
          <AnimatePresence mode="sync">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.name}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Details side (parallel to image) */}
      <div className="flex flex-col justify-center gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${current.name}-${current.designation}`}
            initial={{ opacity: 0, x: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-2"
          >
            <h2 className="text-3xl md:text-4xl font-pressstart font-bold text-white m-0">
              
              {current.name}
            </h2>
            <p className="text-xs md:text-base font-pressstart  text-gray-300 tracking-tighter">
              {current.designation}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="md:col-span-2 flex items-center justify-center gap-4 mt-2">
        <button
          onClick={prev}
          aria-label="Previous"
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111111d1] text-white hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.2)]"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="hidden sm:inline text-sm">Prev</span>
        </button>
        <div className="flex items-center gap-1">
          {items.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 w-6 rounded-full transition-all",
                i === index ? "bg-white" : "bg-white/30"
              )}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next"
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#111111d1] text-white hover:bg-white/10 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.2)]"
        >
          <span className="hidden sm:inline text-sm">Next</span>
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

const defaultTabs: Tab[] = [
  {
    id: "tab1",
    label: "Main Council",
    content: <TabCarousel items={MainCouncil} />,
  },
  {
    id: "tab2",
    label: "Senior Council",
    content: <TabCarousel items={seniorCouncil} />,
  },
  {
    id: "tab3",
    label: "Junior Council",
    content: <TabCarousel items={juniorCouncil} />,
  },
  {
    id: "tab4",
    label: "Coordinators",
    content: <TabCarousel items={coordinators} />,
  },
  {
    id: "tab5",
    label: "WIE",
    content: <TabCarousel items={WIE} />,
  },
  {
    id: "tab6",
    label: "COMSOC",
    content: <TabCarousel items={COMSOC} />,
  }
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full max-w-full flex flex-col gap-y-2", className)}>
      <div className="flex gap-2 flex-wrap bg-[#11111198] bg-opacity-50 backdrop-blur-sm p-2 rounded-xl">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-base font-medium rounded-lg text-white outline-none transition-colors"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-[#111111d1] bg-opacity-50 shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm !rounded-lg"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] text-white bg-opacity-50 backdrop-blur-sm rounded-xl border min-h-[70vh] h-full">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  x: -10,
                  filter: "blur(8px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.98, x: -10, filter: "blur(8px)" }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  type: "spring",
                }}
                className="h-full"
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
