"use client"
import type { ISkill } from "./skill.interface"
import { getIconComponent } from "@/app/utils/iconHelper"
import { Trophy } from "lucide-react"
import { Marquee } from "@/components/magicui/marquee"
import { cn } from "@/lib/utils"

const AllSkillLists = ({ mySkills }: { mySkills: ISkill[] }) => {
  // Split skills into two rows for marquee
  const midPoint = Math.ceil(mySkills.length / 2)
  const firstRow = mySkills.slice(0, midPoint)
  const secondRow = mySkills.slice(midPoint)

  const SkillCard = ({ skill }: { skill: ISkill }) => {
    const IconComponent = getIconComponent(skill.icon)

    return (
      <figure
        className={cn(
          "relative cursor-pointer overflow-hidden rounded-3xl border p-6 transition-all duration-300",
          "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44",
          "border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl",
          "hover:border-white/30 hover:shadow-2xl hover:scale-105",
          "group",
        )}
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-lg -z-10" />

        {/* Skill Content */}
        <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
          <div className="relative">
            {IconComponent ? (
              <div className="p-3 sm:p-4 bg-white/15 rounded-2xl group-hover:bg-white/25 transition-colors duration-300">
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                {skill.name.charAt(0)}
              </div>
            )}

            {/* Floating badge */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-3 border-[#171b39] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            </div>
          </div>

          {/* Skill Name */}
          <div className="w-full px-1">
            <h4 className="text-white font-semibold text-xs sm:text-sm group-hover:text-blue-300 transition-colors duration-300 text-center leading-tight">
              {skill.name}
            </h4>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
      </figure>
    )
  }

  return (



    <div id="skills" className="  bg-[#171b39] py-8 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12   space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/20 text-blue-300 rounded-full text-xs sm:text-sm font-medium border border-blue-500/30">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
            My Skills & Technologies
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-4">
            A comprehensive showcase of my technical skills, tools, and technologies that I use to build exceptional
            digital experiences and solve complex problems.
          </p>

          {/* Stats */}
          {/* <div className="flex justify-center gap-4 sm:gap-8 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{mySkills.length}+</div>
              <div className="text-xs sm:text-sm text-gray-400">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">5+</div>
              <div className="text-xs sm:text-sm text-gray-400">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">3+</div>
              <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
            </div>
          </div> */}
        </div>

        {/* Marquee Skills Section */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-6 sm:space-y-8">
          {/* First Row - Left to Right */}
          <Marquee pauseOnHover className="[--duration:25s] [--gap:1rem]">
            {firstRow.map((skill) => (
              <SkillCard key={`first-${skill._id}`} skill={skill} />
            ))}
          </Marquee>

          {/* Second Row - Right to Left */}
          <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:1rem]">
            {secondRow.map((skill) => (
              <SkillCard key={`second-${skill._id}`} skill={skill} />
            ))}
          </Marquee>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 sm:w-1/4 bg-gradient-to-r from-[#171b39] to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 sm:w-1/4 bg-gradient-to-l from-[#171b39] to-transparent"></div>
        </div>

   
      </div>
    </div>
  )
}

export default AllSkillLists
