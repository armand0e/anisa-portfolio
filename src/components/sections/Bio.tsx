"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Bio() {
  return (
    <section id="about" className="px-8 md:px-16 lg:px-24 py-16 max-w-4xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-playfair font-bold text-stone-900 mb-8 text-center"
        >
          About Me
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-stone-700 leading-relaxed font-inter"
        >
          I&apos;m an enthusiastic Communication major at the University of Central Florida, 
          graduating in Fall 2025. I specialize in leveraging strong communication skills 
          and passion for media to drive innovative work in advertising, entertainment, 
          and technology.
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-stone-700 leading-relaxed font-inter"
        >
          My experience spans promoting major music festivals like Imagine Music Festival 
          and managing social media campaigns for wellness brands. I&apos;ve collaborated 
          with production companies including House Hats, House Headz, and Primal Production 
          Management, gaining comprehensive insights into event promotion and the music industry.
        </motion.p>
        
        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-stone-700 leading-relaxed font-inter"
        >
          When I&apos;m not creating engaging content or analyzing social media metrics, 
          you&apos;ll find me planning my next event promotion campaign or exploring 
          emerging trends in digital marketing and brand strategy.
        </motion.p>
      </motion.div>
    </section>
  );
} 