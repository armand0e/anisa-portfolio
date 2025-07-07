"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const skills = [
  {
    category: "Communication & Strategy",
    items: [
      "Communication and team collaboration",
      "Social media strategy, content creation, and analytics",
      "Event planning and coordination",
      "Brand strategy and marketing",
      "Guest relations and customer service excellence"
    ]
  },
  {
    category: "Technical Skills",
    items: [
      "Microsoft and Photoshop certifications",
      "Facebook and Instagram advertising tools",
      "Photography and videography for digital platforms",
      "Content creation and scheduling",
      "Analytics and performance optimization"
    ]
  },
  {
    category: "Professional Qualities",
    items: [
      "Quick learner and highly adaptable",
      "Time-management and task prioritization",
      "Problem-solving in fast-paced environments",
      "Deadline adherence and execution",
      "Comprehensive knowledge of media industries"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="px-8 md:px-16 lg:px-24 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
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
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full border-stone-200 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-playfair font-semibold text-stone-900 mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="text-stone-700 font-inter text-sm leading-relaxed flex items-start"
                      >
                        <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {skill}
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