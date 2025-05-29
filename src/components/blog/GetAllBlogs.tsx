"use client";

import { BlogType } from "@/app/types/blog";
import Image from "next/image";
import Link from "next/link";

// Helper to check if a URL is valid
const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Helper to strip HTML tags
const stripHTML = (html: string) => html.replace(/<[^>]*>?/gm, "");

const GetAllBlogs = ({ blogs }: { blogs: BlogType | null }) => {
  const imageSrc = isValidUrl(blogs?.image) ? blogs!.image : "/placeholder.png";

  const previewContent = blogs?.content
    ? stripHTML(blogs.content).slice(0, 100) + "..."
    : "";

  return (
    <div
      id="blogs"
      className="w-full max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-white rounded-lg shadow-md overflow-hidden my-6 hover:shadow-lg transition-shadow duration-300"
    >
      {/* Blog Image */}
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={blogs?.title ?? "Blog image"}
          fill
          className="object-cover rounded-t-lg"
          sizes="100vw"
          priority
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-100 mb-3 line-clamp-2">
          {blogs?.title}
        </h3>

        <p className="text-gray-100/50 text-sm md:text-base max-h-36 overflow-hidden">
          {previewContent}
        </p>

        <p className="mt-4 text-xs text-gray-500 italic">
          Published on:{" "}
          {new Date(blogs?.createdAt || "").toLocaleDateString()}
        </p>

        {/* Details Button */}
        <div className="mt-4">
          <Link
            href={`/blog/${blogs?._id}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetAllBlogs;
