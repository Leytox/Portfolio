import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-color-purple py-12 w-full"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bebas tracking-widest text-white text-center mb-8">
          My Projects 💼
        </h2>
        <div className="flex flex-row gap-24 pb-10 justify-center items-center h-full mt-24 w-full max-lg:flex-col">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
