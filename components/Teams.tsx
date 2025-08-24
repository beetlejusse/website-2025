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
        text: "Experience fast and efficient charging with USB-C compatibility, ensuring you never run out of power.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Aditya",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Crafted with precision, the sleek design complements any modern workspace or lifestyle.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Sagar",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Built to last, with robust materials that ensure long-term reliability and performance.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Swastika Shrivastava",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Built to last, with robust materials that ensure long-term reliability and performance.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
    {
      title: {
        text: "Vishal Belwal",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-white",
      },
      description: {
        text: "Built to last, with robust materials that ensure long-term reliability and performance.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
  ]
 
  const articleBottom = [
    {
      title: {
        text: "Chairperson",
        className: "text-xl md:text-2xl lg:text-3xl font-pixel text-red-500", // Changed to brighter red for visibility on dark bg
      },
      description: {
        text: "Equipped with cutting-edge technology to enhance your productivity and experience.",
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
        text: "Intuitive controls and seamless connectivity for an effortless user experience.",
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
        text: "Manufactured with environmentally sustainable materials, contributing to a greener planet.",
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
        text: "Manufactured with environmentally sustainable materials, contributing to a greener planet.",
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
        text: "Manufactured with environmentally sustainable materials, contributing to a greener planet.",
        className: "text-gray-300 font-mono text-sm md:text-base",
      },
      icon: <BsLightningCharge className="scale-[2] text-white" />,
    },
  ]

const Teams = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-press text-white mb-12 tracking-wider">Meet Our Team</h1>
      <div className="relative w-full">
        <ProductPreview
          productSrc="./team.png"
          articleTop={articleTop}
          articleBottom={articleBottom}
          start="top 5%"
          rotate={0}
          scaleFactor={0.6} 
        />
      </div>
    </div>
  )
}

export default Teams