"use client";

import React from "react";
import { motion } from "framer-motion";
import TiltedCard from "@/src/blocks/Components/TiltedCard/TiltedCard";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const EventsInfo = () => {
  const router = useRouter();

  const handleEventClick = () => {
    router.push("/dock_events");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-12"
        >
          Events
        </motion.h1>

        <div className="flex items-center justify-center gap-10">
          <TiltedCard
            imageSrc="/events/datadive.png"
            altText="Data Dive"
            captionText="Data Dive-The Ultimate Datathon"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Data Dive-The Ultimate Datathon</p>
            }
          />
          <TiltedCard
            imageSrc="/events/deeplearning.png"
            altText="Intro to Deep Learning"
            captionText="Intro to Deep Learning"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Intro to Deep Learning</p>
            }
          />
          <TiltedCard
            imageSrc="/events/introrobo.png"
            altText="Intro to Robotics"
            captionText="Intro to Robotics"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Intro to Robotics</p>
            }
          />
          <TiltedCard
            imageSrc="/events/webinar_wie.png"
            altText="Webinar on Elevating Equality"
            captionText="Webinar on Elevating Equality"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">Webinar on Elevating Equality</p>
            }
          />
        </div>

        <div className="flex justify-center mt-12">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg text-xl hover:from-purple-600 hover:to-pink-600 cursor-pointer" onClick={handleEventClick}>
            Know More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventsInfo;
