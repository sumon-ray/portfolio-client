export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export const uploadResume = async (
  file: File
): Promise<ApiResponse<any> | null> => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume/upload`, {
    method: "POST",
    cache: "no-store",

    body: formData,
  });

  if (!res.ok) return null;

  const data: ApiResponse<any> = await res.json();
  return data;
};


export const previewResume = async (): Promise<ApiResponse<any> | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume/preview`, {
      method: "GET",
      cache: "no-store",

    });

    if (!res.ok) return null;

    const data: ApiResponse<any> = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to preview resume:", error);
    return null;
  }
};



export const downloadResume = async (): Promise<void> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/resume/download`, {
      method: "GET",
      cache: "no-store",

    });

    if (!res.ok) {
      console.error("Failed to download resume: Server returned an error");
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf"; // You can set a dynamic name here if needed
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Failed to download resume:", error);
  }
};
