import projects from "../data/projects";
import { Project } from "./Project";
import { Title } from "./Title";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="pt-20 pb-12 mb-6 flex flex-col items-center"
    >
      <Title>Personal Projects</Title>
      <h3 className="text-zinc-300">These are some of the projects I've worked on in my free time while i was learning to code.</h3>
      <div className="grid mt-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};
