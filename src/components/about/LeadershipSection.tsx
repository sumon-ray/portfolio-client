"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Megaphone, Star } from "lucide-react"

export default function LeadershipSection() {
  const activities = [
    {
      id: 1,
      title: "Graphic, Media, and Publication Secretary",
      organization: "English Language Society",
      fullOrganization: "English Language Society, Mawlana Bhashani Science and Technology University (MBSTU)",
      period: "2022 – Present",
      location: "MBSTU, Tangail",
      status: "Active",
      type: "Leadership Role",
      description:
        "Leading creative content design, managing daily session communications, and coordinating both online and offline meetings. Actively contribute to strong branding, smooth operations, and team engagement.",
      skills: ["Communication", "Leadership", "Creative Design", "Team Management", "Event Coordination", "Branding"],
      icon: Megaphone,
      color: "from-emerald-500 to-teal-400", // Distinct color for this section
    },
    // You can add more activities here
    // {
    //   id: 2,
    //   title: "Volunteer Coordinator",
    //   organization: "Local Community Outreach",
    //   fullOrganization: "Local Community Outreach Program, City Name",
    //   period: "2021 – 2022",
    //   location: "City Name",
    //   status: "Completed",
    //   type: "Volunteer Role",
    //   description: "Organized and managed volunteer teams for various community service projects, ensuring effective resource allocation and project completion.",
    //   skills: ["Project Management", "Coordination", "Community Engagement", "Problem Solving"],
    //   icon: Users,
    //   color: "from-orange-500 to-red-400",
    // },
  ]

  return (
    <section className="  py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Leadership &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Activities
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Showcasing my contributions beyond academics and the skills I've honed
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                {/* Background glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${activity.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000`}
                />

                {/* Main card */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br ${activity.color.replace("from-", "from-").replace("to-", "to-")}/20 rounded-2xl border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                      >
                        <IconComponent className="w-10 h-10 text-emerald-400" />
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {activity.title}
                          </h3>
                          <p className="text-lg text-slate-300 font-medium">{activity.organization}</p>
                          <p className="text-sm text-slate-400 mt-1">{activity.fullOrganization}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full text-sm font-medium border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                            {activity.status}
                          </span>
                        </div>
                      </div>

                      {/* Period & Type */}
                      <div className="flex flex-col sm:flex-row gap-4 text-slate-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-teal-400" />
                          <span>{activity.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-teal-400" />
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-teal-400" />
                          <span>{activity.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 leading-relaxed">{activity.description}</p>

                      {/* Skills */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Key Skills Developed:</h4>
                        <div className="flex flex-wrap gap-2">
                          {activity.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Summary of Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl border border-slate-600/30 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Impact & Growth</h3>
            <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              My involvement in leadership roles has been instrumental in honing my communication, organizational, and
              teamwork abilities. These experiences complement my academic background, providing practical skills
              essential for real-world challenges and collaborative environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
