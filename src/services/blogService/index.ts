"use server";

import { BlogType } from "@/app/types/blog";

export const createBlog = async (data: {
  title: string;
  content: string;
  isPublished: boolean;
  image: string;
}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/create`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Failed to create blog");
    }

    return await res.json();
  } catch (error) {
    console.error("Blog creation error:", error);
    throw error;
  }
};

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

//   interface ApiResponse<T> {
//     success: boolean;
//     message: string;
//     data: T;
//   }

export const getBlogById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {});

  if (!res.ok) return null;

  const data = await res.json();
  return data;
};

// update
export const updateBlog = async (
  id: string,
  updatedData: Partial<BlogType>
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
    method: "PATCH",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      // jodi authentication lagay, ekhane token add korte hobe
      // "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  // console.log(res, "updated data");
  if (!res.ok) return null;

  const data = await res.json();
  return data;
};

//
export const deleteBlog = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog/${id}`, {
    method: "DELETE",
    cache: "no-store",
  });

  if (!res.ok) return null;

  const data = await res.json();
  // console.log(data, "single");
  return data;
};
