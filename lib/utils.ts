import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

 export const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity },
};

export const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
  hover: { y: -10 },
};

export const joinUsURL = process.env.NEXT_PUBLIC_JOIN_US_URL || "";

export const testimonials = [
  {
    quote:
      "I AM MUSIC",
    name: "Himanshu Bhenwal",
    designation: "CHAIRPERSON",
    src: "/members/himanshu.png",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Arpan B. Sachdeva",
    designation: "VICE CHAIRPERSON",
    src: "/members/arpan.png",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Sagar Singh",
    designation: "GENERAL SECRETARY",
    src: "/members/sagar.jpg",
  },
  {
    quote:
      "Pain, mistakes and heartache behind strength, lessons and pride",
    name: "Mansimar Singh",
    designation: "Treasurer",
    src: "/members/mansimar.jpg",
  },
  {
    quote:
      "I'm a mix of sunshine and a little bit of chaos—spreading good vibes, chasing dreams, and always up for an adventure! ✨",
    name: "Aditi kansal",
    designation: "Chair WIE Student Branch Affinity Group",
    src: "/members/aditi.jpg",
  },
  {
    quote:
      "The Man, The Myth, The Legend",
    name: "Jai Tyagi",
    designation: "Chairperson, ComSoc",
    src: "/members/jai.png",
  },
  {
    quote:
      "Hardwork always pays off, it worked for me will work for you too.",
    name: "Harsh Sharma",
    designation: "WebMaster",
    src: "/members/harsh.jpg",
  },
];

  