import type { IProject } from "@/app/types/project"
import { getProjectById } from "@/services/projectService"
import Link from "next/link"
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon,
} from "@radix-ui/react-icons"

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const resolvedParams = await params
  const { id } = resolvedParams

  // Fetch project data using the id
  const res = await getProjectById(id)
  const project: IProject | null = res?.data || null

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#171b39] text-white p-8">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center mb-6">
            <StarIcon className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold text-red-400 mb-4">Project Not Found!</h1>
          <p className="text-lg text-gray-300 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#171b39]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#171b39]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-200 group"
            >
              <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Projects</span>
            </Link>

            <div className="flex items-center gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                >
                  <GitHubLogoIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Source</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b39] via-[#171b39]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        </div>

        <div className="relative h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-purple-300 text-sm font-medium mb-6 border border-white/20">
                <StarIcon className="w-4 h-4" />
                Featured Project
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">{project.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <StarIcon className="w-4 h-4 text-white" />
                </div>
                Project Overview
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
              </div>
            </div>

            {/* Project Image Gallery */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Project Showcase</h2>

              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto rounded-xl shadow-2xl border border-white/20 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Features Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Responsive Design", "Modern UI/UX", "Performance Optimized", "Cross-browser Compatible"].map(
                  (feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Project Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Created</p>
                    <p className="text-white font-medium">Recent Project</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-green-400 font-medium">Completed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Technologies Used</h3>

              <div className="space-y-3">
                {project.technologies?.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors duration-200"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    <span className="text-gray-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>

              <div className="space-y-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                    View Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  >
                    <GitHubLogoIcon className="w-5 h-5" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
              <h3 className="text-xl font-bold text-white mb-3">Interested in Similar Work?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Let's discuss your next project and bring your ideas to life.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsPage
