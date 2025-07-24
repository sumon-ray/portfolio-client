"use server";

// all blogs
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getBlogById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {});

  if (!res.ok) return null;

  const data = await res.json();
  return data;
};
