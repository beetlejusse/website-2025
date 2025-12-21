"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LightRays from "@/ui/LightRays/LightRays";
import { Calendar, MapPin, Clock, Users, Code, Cpu, Bot, Globe } from "lucide-react";

const pastSIGs = [
  {
    id: "ml-python",
    title: "Machine Learning with Python",
    description: "On 14th April 2023, IEEE BPIT started with their SIG on Machine Learning with Python. In this SIG students will be taken through the basics of Linear Algebra, Supervised Learning and Python for their development in Machine Learning. This SIG is scheduled to run till 28th May 2023.",
    date: "14 Apr - 15 May 2023",
    venue: "Online",
    speakers: "Himanshu Bhenwal, Jai Tyagi and Harshit Kaushik",
    images: ["/events/deeplearning.png", "/events/datadive.png"],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: "robotics",
    title: "Robotics Workshop",
    description: "A 3-day workshop was conducted by IEEE BPIT for its student members where they were taught the basics of robotics using Arduino frameworks, which involved making robots like obstacle avoiding bot and all terrain vehicle and learning in the process.",
    date: "31st May - 2nd June 2022",
    time: "11:00 - 16:00",
    venue: "BPIT Premises (Lab 111)",
    attendees: "17",
    speakers: "Vineet Thakur",
    images: ["/events/introrobo.png", "/events/robosoccer.png"],
    icon: <Bot className="w-6 h-6" />
  }
];

const currentSIGs = [
  {
    id: "iot",
    title: "IoT",
    description: "SIG on Internet of Things and Robotics, in these sessions we'll try to cover and give brief introduction on these emerging fields, basic architecture and how to implement them.",
    date: "24th May-27th May (2022)",
    timings: "7PM onwards",
    venue: "Online",
    hosts: "Vineet (EEE 3rd year) & Yeshwanth (ECE 3rd year)",
    images: ["/events/introrobo.png", "/events/robosoccer.png"],
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: "java",
    title: "Java",
    description: "Series of SIGs on java, which would help the students to enhance their development skills.",
    date: "10 June 2020 onwards",
    images: ["/events/datadive.png", "/events/deeplearning.png"],
    icon: <Code className="w-6 h-6" />
  }
];

function SIGCard({ sig, isPast = false }: { sig: any; isPast?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.35)] hover:bg-white/10 transition-all duration-300"
    >
      <div className="absolute inset-0 opacity-20">
        {sig.images.map((img: string, index: number) => (
          <div key={index} className={`absolute ${index === 0 ? 'top-0 left-0 w-1/2 h-1/2' : 'bottom-0 right-0 w-1/2 h-1/2'}`}>
            <Image
              src={img}
              alt={sig.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      </div>

      <div className="relative p-6 sm:p-8">
       
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-red-500/20 border border-red-500/30">
            {sig.icon}
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-red-500 underline decoration-red-500/50">
            {sig.title}
          </h3>
        </div>

        <p className="text-white/80 text-sm font-mono sm:text-base leading-relaxed mb-6">
          {sig.description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sig.date && (
            <div className="flex items-center gap-2 text-white/70">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{sig.date}</span>
            </div>
          )}
          {sig.time && (
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{sig.time}</span>
            </div>
          )}
          {sig.timings && (
            <div className="flex items-center gap-2 text-white/70">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{sig.timings}</span>
            </div>
          )}
          {sig.venue && (
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{sig.venue}</span>
            </div>
          )}
          {sig.attendees && (
            <div className="flex items-center gap-2 text-white/70">
              <Users className="w-4 h-4" />
              <span className="text-sm">{sig.attendees} attendees</span>
            </div>
          )}
          {sig.speakers && (
            <div className="flex items-start gap-2 text-white/70">
              <Users className="w-4 h-4 mt-0.5" />
              <span className="text-sm">{sig.speakers}</span>
            </div>
          )}
          {sig.hosts && (
            <div className="flex items-start gap-2 text-white/70">
              <Users className="w-4 h-4 mt-0.5" />
              <span className="text-sm">{sig.hosts}</span>
            </div>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -top-12 -left-12 h-40 w-40 bg-red-500/20 blur-3xl rounded-full" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 bg-cyan-500/20 blur-3xl rounded-full" />
    </motion.div>
  );
}

export default function SIGPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
     
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1.2}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          fadeDistance={0.1}
          className="custom-rays"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_-10%,rgba(255,255,255,0.04),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/70" />
      </div>

      <Navbar />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
     
        {/* <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div> */}

        <div className="relative z-20 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-red-500 mb-4 font-pressstart">
              S.I.G
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400 font-pressstart">
              Student Interest Groups
            </h2>
          </motion.div>
        </div>
      </section>

      <main className="relative z-10 container mx-auto px-4 py-16">

        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 sm:p-12 shadow-[0_0_30px_rgba(0,0,0,0.35)]"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-red-500 mb-6 underline font-pressstart decoration-red-500/50 decoration-2">
              What Is S.I.G?
            </h2>
            <div className="space-y-4 text-white/80 text-sm sm:text-base font-mono leading-relaxed">
              <p>
                A student interest group is a group of students who share a common passion or interest. 
                These groups are typically formed on college campuses to help students explore their interests 
                and connect with like-minded individuals.
              </p>
              <p>
                Student interest groups can cover a wide range of topics, including academic subjects, 
                social issues, hobbies, and extracurricular activities. For example, a student interest group 
                might focus on environmental conservation, entrepreneurship, music, or sports.
              </p>
              <p>
                By joining a student interest group, students can broaden their social circles, develop new skills, 
                and pursue their passions. These groups often organize events such as guest lectures, workshops, 
                competitions, and social events, which can enhance the college experience and help students 
                develop professionally.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-green-400 font-pressstart mb-4">
              Our Past S.I.Gs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastSIGs.map((sig) => (
              <SIGCard key={sig.id} sig={sig} isPast={true} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-cyan-400 font-pressstart mb-4">
              Current S.I.Gs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentSIGs.map((sig) => (
              <SIGCard key={sig.id} sig={sig} isPast={false} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
