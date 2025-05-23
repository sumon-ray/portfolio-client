"use client";

import { motion } from "framer-motion";
import React, { useState, useMemo } from 'react';
import type { ISkill } from "./skill.interface";
import { getIconComponent } from "@/app/utils/iconHelper";

const AllSkillLists = ({ mySkills }: { mySkills: ISkill[] }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const skillTypes = useMemo(() => {
    const types = new Set<string>();
    mySkills.forEach(skill => types.add(skill.type));
    return ['all', ...Array.from(types)];
  }, [mySkills]);

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') {
      return mySkills;
    }
    return mySkills.filter(skill => skill.type === activeFilter);
  }, [mySkills, activeFilter]);

  return (
    <div id="skills" className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-2 mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          My Skills
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my professional skills and technical expertise
        </p>
      </motion.div>

      {/* ফিল্টার বাটন */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {skillTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${activeFilter === type
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* স্কিল লিস্ট */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 p-6">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => {
            const IconComponent = getIconComponent(skill.icon);

            return (
              <motion.div
                key={skill._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                // নতুন ডিজাইন এবং ব্যাকগ্রাউন্ড ইফেক্ট
                className="relative  border-2 border-dotted p-3 text-white rounded-2xl  border-slate-300 
                           overflow-hidden transform transition-all duration-300 hover:scale-105 
                           flex flex-col items-center justify-center text-center group"
              >
                {/* Background glow/effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#72d2d788] via-[#759b75] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl"></div>

                {/* আইকন এবং নাম */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  {IconComponent ? (
                    <IconComponent className="w-8 h-10 text-blue-700 mb-3 transform transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <div className="w-10  flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-2xl font-bold mb-3">
                      {skill.name.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-sm font-semibold mt-2">
                    {skill.name}
                  </h3>
                </div>
                {/* Proficiency এবং Type এই কোড থেকে সরিয়ে দেওয়া হয়েছে */}
              </motion.div>
            );
          })
        ) : (
          <p className="text-center text-gray-500 col-span-full">কোনো স্কিল পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default AllSkillLists;