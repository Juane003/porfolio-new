import projects from "../data/projects";
import { Project } from "./Project";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-20 pb-12 mb-6 flex flex-col items-center"
    >
      <Title>Projects</Title>
      <div className="grid mt-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </section>
  );
};
