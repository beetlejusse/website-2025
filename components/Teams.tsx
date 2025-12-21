"use client"

import { ProductPreview } from './ui/product-preview'
import { BsLightningCharge } from "react-icons/bs"

const articleTop = [
    {
      title: {
        text: "Arpan Basu Sachdeva",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Leads the council, sets vision, and ensures smooth execution across teams.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
      imageSrc: "./execom/arpan.png",
    },
    {
      title: {
        text: "Aditya",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Supports the chair, drives initiatives, and keeps teams aligned and accountable.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
      imageSrc: "./execom/aditya.png",
    },
    {
      title: {
        text: "Sagar",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Manages budgets, tracking, and transparent allocations for events and projects.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
      imageSrc: "./execom/sagar.png",
    },
    {
      title: {
        text: "Swastika Shrivastava",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Oversees documentation, scheduling, and cross-team coordination.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
      imageSrc: "./execom/swastika.png",
    },
    {
      title: {
        text: "Vishal Belwal",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Builds and maintains web platforms, ensuring reliability and performance.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
      imageSrc: "./execom/vishal.png",
    },
  ]
 
  const articleBottom = [
    {
      title: {
        text: "Chairperson",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-red-500", // Changed to brighter red for visibility on dark bg
      },
      description: {
        text: "Represents the council, mentors teams, and steers long-term strategy.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Vice Chairperson",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Coordinates operations, removes blockers, and ensures timely delivery.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Treasurer",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Oversees finance, budgets, reimbursements, and expense governance.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Gen-Sec",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Manages records, communications, and inter-team coordination.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "WebMaster",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Owns the website stack, infrastructure, and overall tech quality.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
  ]

const Teams = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-pressstart text-white mb-12 tracking-wider">Meet Our Team</h1>
      <div className="relative w-full">
        <ProductPreview
          productSrc="./team.png"
          articleTop={articleTop}
          articleBottom={articleBottom}
          start="top 5%"
          rotate={0}
          scaleFactor={0.7} 
          productHeight={1000}
          productWidth={1000}
        />
      </div>
    </div>
  )
}

export default Teams