"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Independent Social Media Promoter",
    company: "Freelance",
    location: "Orlando, FL",
    period: "2023 – Present",
    description: "Used personal social media platforms to promote Imagine Music Festival and local Orlando venues such as Elixir and The Vanguard showcasing live performances, event highlights, and behind-the-scenes content.",
    achievements: [
      "Spearheaded promotional campaigns for various events and music festivals, including Imagine Music Festival, as part of the Collective Festival Management team",
      "Boosted event exposure and ticket sales through collaboration with festival organizers and brands",
      "Created social media content and analyzed engagement metrics to optimize growth",
      "Partnered with production companies such as House Hats, House Headz, and Primal Production Management to promote local music events",
      "Gained comprehensive insights into event promotion and the inner workings of the music industry"
    ]
  },
  {
    title: "Social Media Manager",
    company: "Zoia Yoga & Wellness Studio",
    location: "Wellington, FL",
    period: "2018 – 2023",
    description: "Responsible for creating and managing social media advertisements to promote classes, events, and special offers.",
    achievements: [
      "Created, edited, and posted photos and videos, crafted compelling captions and scheduled posts",
      "Implemented effective campaigns to attract new clients and increase class/event attendance",
      "Utilized Facebook and Instagram advertising to optimize post reach and audience engagement",
      "Monitored and applied emerging social media trends to maintain relevance and growth"
    ]
  },
  {
    title: "Journalism Project",
    company: "University of Central Florida",
    location: "Gainesville, FL",
    period: "2022",
    description: "Interviewed the band Madwoman at a show in Gainesville, FL at the How Bazar for a journalism project while studying at the University of Central Florida.",
    achievements: [
      "Initiated contact with artists and their teams to coordinate interviews",
      "Honed interview skills and learned to effectively report events to an audience",
      "Strengthened connections within the music industry to facilitate future collaborations"
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="px-8 md:px-16 lg:px-24 py-16 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-playfair font-bold text-stone-900 mb-12 text-center"
          >
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-8 border-stone-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-stone-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-inter text-stone-700 mb-2">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-stone-600 font-inter text-sm font-medium bg-stone-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-stone-700 font-inter mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li 
                        key={achIndex}
                        className="text-stone-700 font-inter text-sm leading-relaxed flex items-start"
                      >
                        <span className="w-2 h-2 bg-stone-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
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