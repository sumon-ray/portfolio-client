"use server";

import { IProject } from "@/app/types/project";

//
export const getAllProjects = async (): Promise<{
  success: boolean;
  message: string;
  data: IProject[];
}> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("❌ Error fetching projects:", error);
    throw error;
  }
};

//
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getProjectById = async (
  id: string
): Promise<ApiResponse<IProject> | null> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/project/${id}`,
    {}
  );

  if (!res.ok) return null;

  const data: ApiResponse<IProject> = await res.json();
  // console.log(data, "single");
  return data;
};

//
