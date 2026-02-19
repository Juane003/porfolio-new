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
            <p className="text-zinc-300">
              <span className="font-bold">React · TypeScript · Django · React Native</span>
              <br />
              <ul className="text-zinc-300 text-right list-disc list-inside space-y-2 marker:text-zinc-400">
                <li>Improved large data table performance by rewriting resizing logic</li>
                <li>Reduced redundant API requests by ~50% with RTK Query</li>
                <li>Integrated production monitoring with BugSnag</li>
                <li>Built REST APIs and cross-platform mobile features</li>
              </ul>
              </p>
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
            <p className="text-zinc-300">
              <span className="font-bold">React · Next.js · TypeScript</span>
              <br />
              <ul className="text-zinc-300 text-left list-disc list-inside space-y-2 marker:text-zinc-400">
                <li>Reduced legacy app load time from 13s to &lt; 500ms</li>
                <li>Built Next.js product catalog with 100 Lighthouse score</li>
                <li>Implemented security-focused input sanitization</li>
                <li>Mentored junior developers</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};