// src/app/project/[id]/page.tsx
import { IProject } from "@/app/types/project"; // Ensure this path and interface name are correct
import { getProjectById } from "@/services/projectService";
import Link from "next/link";

// The dynamic route segment component
const ProjectDetailsPage = async ({ 
    params 
}: { 
    params: Promise<{ id: string }>; 
}) => {
    const resolvedParams = await params; 
    const { id } = resolvedParams; 


    // Fetch project data using the id
    const res = await getProjectById(id);
    const project: IProject | null = res?.data || null;


    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Project Not Found!</h1>
                <p className="text-lg mb-6">দুঃখিত, এই ID এর সাথে কোনো প্রোজেক্ট পাওয়া যায়নি।</p>
                <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        );
    }

    // Render the project details if found
    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 p-6 sm:p-10">
            <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
                {/* Back button */}
                <div className="p-6">
                    <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        হোম পেজে ফিরে যান
                    </Link>
                </div>

                {/* Project Content */}
                <div className="p-6 sm:p-10 lg:p-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-indigo-400 leading-tight">
                        {project.title}
                    </h1>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-xl shadow-lg mb-8 border border-gray-700 object-cover"
                    />
                    <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-200 mb-2">প্রযুক্তি সমূহ:</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies?.map((tech, index) => (
                                <span key={index} className="bg-blue-700 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md font-semibold text-lg"
                            >
                                লাইভ সাইট দেখুন
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M11 3a1 1 101-1h5a1 1 001 1v5a1 1 001 1-2 0V6.414l-8.293 8.293a1 1 001-1.414L14.586 5H11a1 1 001-1z" />
                                </svg>
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300 shadow-md font-semibold text-lg"
                            >
                                GitHub দেখুন
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm-2 15a2 2 0 100-4 2 2 0 000 4zm5-2a2 2 0 100-4 2 2 0 000 4zm-4-7a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailsPage;