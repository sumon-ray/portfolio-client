import { BlogType } from "@/app/types/blog";
import GetAllBlogs from "@/components/blog/GetAllBlogs";
import { getAllBlogs } from "@/services/blogService";
import { StarIcon } from "lucide-react";

const allBlogPage = async () => {
  const res = await getAllBlogs();
  const blogs = res?.data ?? [];

  return (
    <div className="">
         <div className="space-y-4 mt-14  text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
              <StarIcon className="w-4 h-4" />
            Blogs
            </div>

            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-300 to-pink-300 bg-clip-text text-transparent">
          My Blogs
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Dive into my thoughts, experiences, and lessons learned in tech, coding, and beyond each blog crafted to inform and inspire.
            </p>
          </div>
  
    <div className="p-4 mt-10 mx-auto w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {blogs.length > 0 ? (
        blogs.map((blog: BlogType) => <GetAllBlogs key={blog._id} blogs={blog} />)
      ) : (
        <p className="text-center col-span-full">No blogs found.</p>
      )}
    </div>
    </div>
  );
};

export default allBlogPage;
