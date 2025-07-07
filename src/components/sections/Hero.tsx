"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4
    }
  }
};

export default function Hero() {
  return (
    <main id="home" className="flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 lg:px-24 py-12 lg:py-20">
      {/* Left Column - Text Content */}
      <div className="lg:w-1/2 space-y-8">
        <div className="space-y-6">
          <motion.h1 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone-900 leading-tight"
          >
            Anisa Rafiee is a{" "}
            <span className="text-stone-700">communication professional</span>{" "}
            covering{" "}
            <span className="text-stone-700">digital marketing</span>,{" "}
            <span className="text-stone-700">social media strategy</span>, and{" "}
            <span className="text-stone-700">event promotion</span>.
          </motion.h1>
          
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-stone-600 leading-relaxed font-inter"
          >
            Currently pursuing a Bachelor of Arts in Human Communication at UCF, 
            with hands-on experience promoting music festivals and managing social media 
            campaigns for wellness brands.
          </motion.p>
          
          <motion.div variants={buttonVariants} initial="hidden" animate="visible">
            <Button 
              size="lg" 
              className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 text-lg font-inter border border-stone-900 hover:border-stone-800 transition-all duration-300"
              asChild
            >
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="lg:w-1/2 mt-12 lg:mt-0 lg:ml-12">
        <motion.div variants={imageVariants} initial="hidden" animate="visible">
          <Card className="overflow-hidden border-none shadow-2xl">
            <div className="aspect-[4/5] bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
              <div className="w-full h-full bg-stone-400 flex items-center justify-center">
                <p className="text-stone-600 text-lg font-inter">Professional Portrait</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </main>
  );
} 