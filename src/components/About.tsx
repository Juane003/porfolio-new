export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center text-center pt-20 pb-12"
    >
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-zinc-200">
        Juan Emilio Rivero
      </h1>
      <p className="text-base md:text-cl mb-3 font-medium dark:text-zinc-200">
        Full Stack Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold dark:text-zinc-200">
      With 3+ years of experience in web development, I focus on building clean, maintainable applications using React, TypeScript, and modern full-stack tools.
      <br />
      I’m especially interested in performance optimization and scalable frontend architecture.
      </p>
      <div className="flex gap-4">
        <a
          href="#contact"
          className=" flex items-center justify-center bg-zinc-200 w-32 h-8 text-zinc-900 p-2 rounded-md hover:bg-transparent hover:text-zinc-200 border hover:border-zinc-200 duration-300 font-semibold"
        >
          Contact Me
        </a>

        <a
          href="cv.pdf"
          download
          className="flex items-center justify-center bg-zinc-200 w-32 h-8 text-zinc-900 p-2 rounded-md hover:bg-transparent hover:text-zinc-200 border hover:border-zinc-200 duration-300 font-semibold"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};
