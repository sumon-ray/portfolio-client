// components/BlogDetailsPage.tsx

import { BlogType } from "@/app/types/blog";
import { getBlogById } from "@/services/blogService";
import Link from "next/link";

const BlogDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const res = await getBlogById(id);
  const data: BlogType | null = (await res?.data) ?? null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Blog post not found.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-14  bg-gray-950 text-gray-100 p-4 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
        {data.image && (
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-64 object-cover object-center transform transition-transform duration-500 "
          />
        )}

        <div className="p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 mb-4 leading-tight">
            {data.title}
          </h1>

          <div className="text-gray-400 text-sm mb-6 flex flex-wrap gap-x-4">
            {data.createdAt && (
              <span>
                Published:{" "}
                {new Date(data.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {data.updatedAt && data.createdAt !== data.updatedAt && (
              <span>
                Last updated:{" "}
                {new Date(data.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>

          <div
            className="prose prose-invert prose-lg text-gray-300 leading-relaxed max-w-none [&>p]:mb-4 [&>h1]:text-blue-300 [&>h2]:text-blue-300"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />


          <div className="mt-8 pt-6 border-t border-gray-700 text-right text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {data.title}</p>
          </div>

          {/* go back to home  button */}
       {/* Go Back to Home Button */}
       <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
               Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
