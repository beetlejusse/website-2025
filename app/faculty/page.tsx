"use client";

import React from "react";
import Aurora from "@/ui/Aurora/Aurora";
import Image from "next/image";
import { FACULTY, FacultyMember } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

export default function FacultyPage() {
  const list = FACULTY;

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0f] text-white">
      <Navbar />
      <Aurora className="z-0" palette="cosmic" intensity={0.9} />

      <section className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <header className="mb-10 sm:mb-12 md:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-pressstart font-bold tracking-tight">
            Our Faculty
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-mono">
            Meet the mentors guiding our journey. Explore their latest posts,
            talks, and research updates.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {list.map((f) => (
            <FacultyCard key={f.id} faculty={f} />
          ))}
        </div>
      </section>
    </main>
  );
}

function FacultyCard({ faculty }: { faculty: FacultyMember }) {
  return (
    <Card className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.55)]">
      <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-[22rem] xl:h-[24rem] overflow-hidden">
        <Image
          src={faculty.avatar}
          alt={faculty.name}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] sm:text-xs text-white/90 ring-1 ring-white/15 backdrop-blur-md">
            {faculty.designation}
          </span>
        </div>
      </div>

      <CardContent className="relative p-6">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden
        >
          <div className="absolute inset-px rounded-[1.4rem] bg-gradient-to-br from-white/5 via-white/0 to-white/0" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-fuchsia-200 to-indigo-200">
            {faculty.name}
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-white/70">
            <span className="rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
              {faculty.department}
            </span>
          </div>
        </div>

        {faculty.bio && (
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            {faculty.bio}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
