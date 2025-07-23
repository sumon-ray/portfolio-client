"use client";

import { motion } from "framer-motion";

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  languages: string[];
  interests: string[];
  profileImage: string;
}

interface AboutMeTabProps {
  personalInfo: PersonalInfo;
}

export default function AboutMeTab({ personalInfo }: AboutMeTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6 text-slate-300"
    >
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Hello, I'm {personalInfo.name}!
        </h3>
        <p className=" leading-relaxed">{personalInfo.bio}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Languages</h4>
          <ul className="space-y-2">
            {personalInfo.languages.map((language, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2 "
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                {language}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Interests</h4>
          <div className="flex flex-wrap gap-2">
            {personalInfo.interests.map((interest, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-white mb-3">My Approach</h4>
        <p className="leading-relaxed">
          As a full-stack developer, I strive to build robust, scalable, and
          user-focused applications that deliver real-world value. My approach
          emphasizes clean and maintainable code, performance optimization, and
          thoughtful design from backend architecture to frontend interfaces.
        </p>
        <p className="leading-relaxed mt-3">
          I take pride in combining technical expertise with creative
          problem-solving, whether working independently or in a collaborative
          environment. I'm committed to continuous learning and staying updated
          with the latest tools and technologies to craft seamless, modern web
          experiences that are both functional and visually engaging.
        </p>
      </div>
    </motion.div>
  );
}
