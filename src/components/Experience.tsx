import { Title } from "./Title";

export const Experience = () => {
  return (
    <section id="experience" className="flex flex-col items-center justify-center text-center pt-20 pb-12">
      <Title>Experience</Title>
      <div className="flex flex-col items-center justify-center relative">
        <div className="absolute w-0.5 h-full bg-zinc-200 left-1/2 transform -translate-x-1/2"></div>

        <div className="flex items-center w-full max-w-2xl mb-16 relative">
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-base font-semibold text-zinc-200">March 2024 - Present</h3>
            <h2 className="text-xl md:text-2xl font-bold text-zinc-200">Full Stack Developer</h2>
            <h3 className="text-base font-semibold text-zinc-200">Kindalab</h3>
            <p className="text-zinc-300">Full Stack Developer for a Software Factory Startup, working with React, Typescript, Redux, Python and Django. Developing new features and taking technical decisions, doing Frontend code review and giving feedback. Working with Agile methodologies and international teams.</p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-200 rounded-full border-4 border-gray-900"></div>
          <div className="w-1/2"></div>
        </div>

        <div className="flex items-center w-full max-w-2xl relative">
          <div className="w-1/2"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zinc-200 rounded-full border-4 border-gray-900"></div>
          <div className="w-1/2 pl-8 text-left">
            <h3 className="text-base font-semibold text-zinc-200">June 2023 - March 2024</h3>
            <h2 className="text-xl md:text-2xl mb-2 font-bold text-zinc-200">Full Stack Developer</h2>
            <p className="text-zinc-300">Frontend Developer for an AgTech Startup. My main duties included developing extensions for third party agronomy related companies, helping with project estimations, helping to take Tech-Stack related choices and going through security protocols for the apps. The tech stack I used was ReactJS, Typescript, TailwindCSS, React Router, React Query and various UI Libraries (Material UI, Ant Design, Headless UI, Shadcn UI). Also used Node + Typescript + Express for some backend projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};