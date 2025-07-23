"use client"
import type { BlogType } from "@/app/types/blog"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, ClockIcon, ArrowRightIcon } from "@radix-ui/react-icons"

// Helper to check if a URL is valid
const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Helper to strip HTML tags
const stripHTML = (html: string) => html.replace(/<[^>]*>?/gm, "")

const GetAllBlogs = ({ blogs }: { blogs: BlogType | null }) => {
  if (!blogs) return null

  const imageSrc = isValidUrl(blogs?.image) ? blogs!.image : "/placeholder.svg?height=300&width=400"
  const previewContent = blogs?.content ? stripHTML(blogs.content).slice(0, 150) + "..." : ""

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm" />

      {/* Main card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
        {/* Blog Image */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={blogs?.title ?? "Blog image"}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
            <span className="text-xs font-medium text-gray-800">Blog Post</span>
          </div>

          {/* Date overlay */}
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-800">
                <CalendarIcon className="w-3 h-3" />
                {formatDate(blogs?.createdAt || "")}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2 leading-tight">
            {blogs?.title}
          </h3>

          {/* Preview content */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">{previewContent}</p>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-3 h-3" />
              <span>5 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarIcon className="w-3 h-3" />
              <span>{formatDate(blogs?.createdAt || "")}</span>
            </div>
          </div>

          {/* Read more button */}
          <div className="pt-2">
            <Link
              href={`/blog/${blogs?._id}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              <span>Read Article</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  )
}

export default GetAllBlogs
