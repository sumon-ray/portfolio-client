"use server";

import { ISkill } from "@/components/skills/skill.interface";

export const getAllSkills = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
      method: "GET",
      next: { revalidate: 20 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch skills");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    return null;
  }
};

//
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const getSkillById = async (
  id: string
): Promise<ApiResponse<ISkill> | null> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`, {
    method: "GET",
    next: { revalidate: 20 },
  });

  if (!res.ok) return null;

  const data: ApiResponse<ISkill> = await res.json();
  // console.log(data, "single");
  return data;
};

//
