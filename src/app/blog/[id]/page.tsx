"use client"
import { useEffect, useState } from "react"
import type { BlogType } from "@/app/types/blog"
import { getBlogById } from "@/services/blogService"
import Link from "next/link"
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  PersonIcon,
  Share1Icon,
  HeartIcon,
  BookmarkIcon,
  EyeOpenIcon,
  ChatBubbleIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons"

const BlogDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const [data, setData] = useState<BlogType | null>(null)
  const [loading, setLoading] = useState(true)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    const fetchBlog = async () => {
      const { id } = await params
      const res = await getBlogById(id)
      setData((await res?.data) ?? null)
      setLoading(false)
    }
    fetchBlog()
  }, [params])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(progress)
      setShowScrollTop(scrollTop > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#171b39] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#171b39] text-white p-8">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-8">
            <ClockIcon className="w-16 h-16 text-red-400" />
          </div>
          <h1 className="text-3xl font-bold text-red-400">Oops! Article Not Found</h1>
          <p className="text-gray-300 leading-relaxed">
            The article you're looking for seems to have wandered off. Don't worry, let's get you back on track!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Return Home
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const wordCount = content.replace(/<[^>]*>?/gm, "").split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  return (
    <div className="min-h-screen bg-[#171b39] relative">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-40">
        <button
          onClick={() => setLiked(!liked)}
          className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            liked
              ? "bg-red-500/20 border-red-500/50 text-red-400"
              : "bg-white/10 border-white/20 text-gray-400 hover:text-red-400"
          }`}
        >
          <HeartIcon className="w-5 h-5" />
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`p-3 rounded-full backdrop-blur-xl border transition-all duration-300 ${
            bookmarked
              ? "bg-yellow-500/20 border-yellow-500/50 text-yellow-400"
              : "bg-white/10 border-white/20 text-gray-400 hover:text-yellow-400"
          }`}
        >
          <BookmarkIcon className="w-5 h-5" />
        </button>

        <button className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-gray-400 hover:text-blue-400 transition-all duration-300">
          <Share1Icon className="w-5 h-5" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronUpIcon className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#171b39]/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-200 group"
            >
              <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Articles</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <EyeOpenIcon className="w-4 h-4" />
                  <span>1.2k views</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChatBubbleIcon className="w-4 h-4" />
                  <span>24 comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
              <ClockIcon className="w-3 h-3" />
              Article
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-4 h-4" />
                <span>{formatDate(data.createdAt || "")}</span>
              </div>
              <div className="flex items-center gap-1">
                <ClockIcon className="w-4 h-4" />
                <span>{estimateReadTime(data.content || "")} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <PersonIcon className="w-4 h-4" />
                <span>Admin</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">{data.title}</h1>

          {/* Featured Image */}
          {data.image && (
            <div className="relative rounded-2xl overflow-hidden mb-12 group">
              <img
                src={data.image || "/placeholder.svg"}
                alt={data.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 lg:p-12 border border-white/10">
              <div
                className="prose prose-invert prose-xl max-w-none
                  [&>p]:text-gray-200 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
                  [&>h1]:text-white [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mb-8 [&>h1]:mt-12 [&>h1]:border-b [&>h1]:border-white/20 [&>h1]:pb-4
                  [&>h2]:text-white [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-6 [&>h2]:mt-10
                  [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mb-4 [&>h3]:mt-8
                  [&>ul]:text-gray-200 [&>ul]:mb-6 [&>ul]:text-lg [&>ul>li]:mb-2
                  [&>ol]:text-gray-200 [&>ol]:mb-6 [&>ol]:text-lg [&>ol>li]:mb-2
                  [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:italic [&>blockquote]:text-gray-300 [&>blockquote]:bg-blue-500/5 [&>blockquote]:rounded-r-lg
                  [&>code]:bg-gray-800 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-blue-300 [&>code]:text-sm
                  [&>pre]:bg-gray-800 [&>pre]:p-6 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:border [&>pre]:border-gray-700
                  [&>a]:text-blue-400 [&>a]:hover:text-blue-300 [&>a]:transition-colors [&>a]:underline [&>a]:decoration-blue-400/50
                  [&>img]:rounded-xl [&>img]:shadow-lg [&>img]:my-8
                "
                dangerouslySetInnerHTML={{ __html: data.content }}
              />

              {/* Article Footer */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setLiked(!liked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        liked
                          ? "bg-red-500/20 text-red-400 border border-red-500/50"
                          : "bg-white/5 text-gray-400 hover:text-red-400 border border-white/10"
                      }`}
                    >
                      <HeartIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{liked ? "Liked" : "Like"}</span>
                    </button>

                    <button
                      onClick={() => setBookmarked(!bookmarked)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        bookmarked
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/50"
                          : "bg-white/5 text-gray-400 hover:text-yellow-400 border border-white/10"
                      }`}
                    >
                      <BookmarkIcon className="w-4 h-4" />
                      <span className="text-sm font-medium">{bookmarked ? "Saved" : "Save"}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <EyeOpenIcon className="w-4 h-4" />
                    <span>1,234 views</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Author Card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <PersonIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Admin</h3>
                  <p className="text-sm text-gray-400">Content Creator</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Passionate about technology and sharing knowledge through engaging content.
              </p>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300">
                Follow
              </button>
            </div>

            {/* Article Stats */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Article Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <EyeOpenIcon className="w-4 h-4" />
                    <span className="text-sm">Views</span>
                  </div>
                  <span className="text-white font-medium">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <HeartIcon className="w-4 h-4" />
                    <span className="text-sm">Likes</span>
                  </div>
                  <span className="text-white font-medium">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <ChatBubbleIcon className="w-4 h-4" />
                    <span className="text-sm">Comments</span>
                  </div>
                  <span className="text-white font-medium">24</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Share1Icon className="w-4 h-4" />
                    <span className="text-sm">Shares</span>
                  </div>
                  <span className="text-white font-medium">12</span>
                </div>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
              <h3 className="font-semibold text-white mb-4">Share This Article</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
                  <Share1Icon className="w-4 h-4" />
                  <span className="text-sm">Twitter</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg transition-colors duration-200">
                  <Share1Icon className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200">
                  <Share1Icon className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </button>
                <button className="flex items-center justify-center gap-2 p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200">
                  <Share1Icon className="w-4 h-4" />
                  <span className="text-sm">Copy</span>
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
              <h3 className="font-semibold text-white mb-3">Stay in the Loop</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Explore More Articles
          </Link>
        </div>
      </main>
    </div>
  )
}

export default BlogDetailsPage
