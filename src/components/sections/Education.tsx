"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const education = [
  {
    degree: "Bachelor of Arts in Human Communication",
    track: "Visual Communication Track",
    school: "University of Central Florida (UCF)",
    location: "Orlando, FL",
    period: "Expected Graduation: Summer 2025",
    description: "Focused on media and management communication to develop expertise in digital strategy and content creation.",
    highlights: [
      "Specialization in Visual Communication",
      "Digital strategy and content creation focus",
      "Media and management communication studies"
    ]
  },
  {
    degree: "International Baccalaureate (IB) Programme Certificate",
    school: "Atlantic Community High School",
    location: "Delray Beach, FL",
    period: "August 2016 – May 2020",
    description: "Completed the globally recognized pre-university program (IB Program)",
    highlights: [
      "Globally recognized pre-university program",
      "Model United Nations Club Member",
      "Comprehensive international curriculum"
    ]
  }
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Education() {
  return (
    <section id="education" className="px-8 md:px-16 lg:px-24 py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-playfair font-bold text-stone-900 mb-12 text-center"
          >
            Education
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-playfair font-semibold text-stone-900 mb-1">
                        {edu.degree}
                      </h3>
                      {edu.track && (
                        <p className="text-lg font-inter text-stone-600 mb-2">
                          {edu.track}
                        </p>
                      )}
                      <p className="text-lg font-inter text-stone-700 mb-2">
                        {edu.school} • {edu.location}
                      </p>
                    </div>
                    <span className="text-stone-600 font-inter text-sm font-medium bg-stone-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="text-stone-700 font-inter mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, hlIndex) => (
                      <li 
                        key={hlIndex}
                        className="text-stone-700 font-inter text-sm leading-relaxed flex items-start"
                      >
                        <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 