import { BlogType } from "@/app/types/blog";
import GetAllBlogs from "@/components/blog/GetAllBlogs";
import { getAllBlogs } from "@/services/blogService";

const AllBlogPage = async () => {
  const res = await getAllBlogs();
  const blogs = res?.data ?? [];

  return (
   <>
    <div
    // initial={{ opacity: 0, y: 20 }}
    // animate={{ opacity: 1, y: 0 }}
    // transition={{ duration: 0.5 }}
    className="flex flex-col gap-2 mb-12 text-center"
  >
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
      My Blogs
    </h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      A showcase of my writting blogs and technical expertise
    </p>
  </div>
    <div className="p-4  mx-auto w-full grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      
      {blogs.length > 0 ? (
        blogs.map((blog: BlogType) => <GetAllBlogs key={blog._id} blogs={blog} />)
      ) : (
        <p className="text-center col-span-full">No blogs found.</p>
      )}
    </div>
   </>
  );
};

export default AllBlogPage;
