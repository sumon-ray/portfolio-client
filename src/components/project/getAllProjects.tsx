"use client"
import { useEffect, useState } from "react"
import { getAllProjects } from "@/services/projectService"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRightIcon, GitHubLogoIcon, GlobeIcon, StarIcon, CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import type { ProjectType } from "@/app/types/ProjectType"

const SafeImage = ({
  src,
  alt,
  fallbackSrc = "/images/banner.png",
}: {
  src: string
  alt: string
  fallbackSrc?: string
}) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative w-full h-48 rounded-xl overflow-hidden">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true)
          setLoaded(true)
        }}
        className={cn(
          "object-cover w-full h-full transition-all duration-700 ease-out",
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  )
}

const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />

      {/* Main card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
        {/* Header with image */}
        <div className="relative">
          <SafeImage src={project.image || ""} alt={project.title} />

          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
            <StarIcon className="w-4 h-4 text-yellow-500" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title and date */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <CalendarIcon className="w-4 h-4" />
              <span>Recent Project</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{project.description}</p>

          {/* Technologies */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Technologies</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-white/10 text-xs font-medium text-white rounded-lg border border-white/20 hover:border-purple-400 hover:bg-white/20 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 pt-4">
            <a
              href={`/project/${project._id}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r rounded-lg from-blue-600 to-purple-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View Details</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex gap-2">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 bg-purple-700 text-white rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <GlobeIcon className="w-4 h-4" />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-2.5 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  )
}

const GetAllProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await getAllProjects()
        setProjects(res.data || [])
      } catch (err) {
        console.error("Error fetching projects:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#171b39]">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center space-y-4">
            <Skeleton className="h-10 w-64 mx-auto bg-white/20" />
            <Skeleton className="h-6 w-96 mx-auto bg-white/20" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full rounded-xl bg-white/20" />
                <Skeleton className="h-6 w-3/4 bg-white/20" />
                <Skeleton className="h-4 w-full bg-white/20" />
                <Skeleton className="h-4 w-2/3 bg-white/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#171b39]">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16 text-center space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              <StarIcon className="w-4 h-4" />
              Featured Work
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              A curated collection of my recent work that showcases innovation, technical expertise, and creative
              problem-solving.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <StarIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">No projects found</h3>
              <p className="text-gray-400">Check back soon for new projects!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GetAllProjects
