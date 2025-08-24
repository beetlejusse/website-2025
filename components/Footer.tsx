import Threads from "@/ui/Threads/Threads";
import React from "react";

const Footer = () => {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <div>
        <footer className="w-full bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-2xl text-gray-300 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} IEEE BPIT. All rights reserved.
          </p>
        </footer>
      </div>
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
    </div>
  );
};

export default Footer;
