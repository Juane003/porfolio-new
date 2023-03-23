interface Project {
  title: string;
  imgUrl: string;
  techStack: string[];
  link: string;
  gitRepository: string;
}

interface ProjectProps {
  project: Project;
}

export const Project = ({ project }: ProjectProps) => {
  const { title, imgUrl, techStack, link, gitRepository } = project;

  return (
    <section className="border-2 w-96 p-2 border-zinc-200 rounded-md overflow-hidden text-zinc-200">
      <img
        src={imgUrl}
        className="object-contain h-36 md:h-48 mb-2 md:mb-3 w-full flex items-center justify-center"
      />
      <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-center">
        {title}
      </h3>

      <div className="grid grid-cols-3 text-center h-40 gap-4 mb-2 md:mb-3">
        {techStack.map((tech) => (
          <span className="flex justify-center items-center px-2 py-1 font-semibold border-2 rounded-md  ">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex  mb-2 md:mb-3 gap-8 justify-center">
        <a
          href={link}
          target="_blank"
          className="flex items-center justify-center bg-zinc-200 w-32 h-8 text-zinc-900 p-2 rounded-md hover:bg-transparent hover:text-zinc-200 border hover:border-zinc-200 duration-300 font-semibold"
        >
          Demo
        </a>
        <a
          href={gitRepository}
          target="_blank"
          className="flex items-center justify-center bg-zinc-200 w-32 h-8 text-zinc-900 p-2 rounded-md hover:bg-transparent hover:text-zinc-200 border hover:border-zinc-200 duration-300 font-semibold text-xs"
        >
          Github Repository
        </a>
      </div>
    </section>
  );
};
