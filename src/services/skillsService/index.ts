"use server";

import { ISkill } from "@/components/skills/skill.interface";

// import { revalidatePath } from "next/cache";

type SkillFormValues = {
  name: string;
  type: "technical" | "soft";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
};

export const addSkill = async (data: SkillFormValues) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/skills/create`,
      {
        method: "POST",
        cache: "no-store", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!res.ok) throw new Error("Failed to add skill");

    // revalidatePath("/skills"); // Optional: revalidate if needed
    return { success: true };
  } catch (err) {
    console.error("Server action error:", err);
    return { success: false, error: (err as Error).message };
  }
};

export const getAllSkills = async () => {
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills`, {
      method: "GET",
      next: { revalidate: 20 }

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
    method: 'GET',
    next: { revalidate: 20 }
  });

  if (!res.ok) return null;

  const data: ApiResponse<ISkill> = await res.json();
  // console.log(data, "single");
  return data;
};

//



export async function updateSkillAction(updatedSkill: ISkill) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${updatedSkill._id}`, {
      method: 'PATCH',
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSkill),
    });

    if (!res.ok) {
      throw new Error('Failed to update skill');
    }

    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error('Update error:', error);
    return { success: false, error: (error as Error).message };
  }
}

export const deleteSkill = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/skills/${id}`, {
      method: "DELETE",
      cache: "no-store", 
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete skill.");
    }

    const data = await res.json();
    return { success: true, data }; 
  } catch (error) {
    console.error("Error deleting skill:", error);
    return { success: false, error: (error as Error).message || "An unknown error occurred." };
  }
};