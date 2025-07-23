export interface ProjectType {
    _id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveLink: string;
    githubLink: string;
  }