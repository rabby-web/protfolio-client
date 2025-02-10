import ProjectPostCard from "./ProjectPostCard";

export default function ProjectData() {
  const blogPostData = {
    name: "Personal Portfolio Website",
    category: "Web Development",
    title: "Showcase My Skills & Projects",
    content:
      "This is a personal portfolio website where I showcase all of my skills, projects, and achievements as a developer.",
    image:
      "https://res.cloudinary.com/daxjf1buu/image/upload/v1735376160/2025010001Student000.jpg",
    technologies: ["React", "Node.js", "MongoDB", "CSS"],
    liveDemoLink: "https://example.com/portfolio-demo",
    repoLinkClient: "https://github.com/username/portfolio-client",
    repoLinkServer: "https://github.com/username/portfolio-server",
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectPostCard {...blogPostData} />
        {/* Add more ProjectPostCard components here */}
      </div>
    </div>
  );
}
