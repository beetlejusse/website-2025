"use client"

import Navbar from "@/components/Navbar";
import { Component } from "@/components/ui/etheral-shadow";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Navbar />
      <Component
        color="rgba(128, 128, 128, 1)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: 1, scale: 1.2 }}
        sizing="fill"
        className="bg-[#000]"
      />
    </div>
  );
};

export default page;
