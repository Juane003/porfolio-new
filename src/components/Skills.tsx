import git from "../assets/skills/Git.svg";
import css from "../assets/skills/CSS.svg";
import html from "../assets/skills/html5.svg";
import javascript from "../assets/skills/JavaScript.svg";
import typescript from "../assets/skills/Typescript.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/Node.svg";
import tailwind from "../assets/skills/TailwindCSS.svg";
import { Title } from "./Title";

const logos = [git, css, html, javascript, typescript, react, node, tailwind];

export const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-12 w-full flex justify-center">
      <div className="flex flex-col items-center gap-4">
        <Title>Skills</Title>
        <div className=" mb-6  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
          {logos.map((logo) => (
            <img
              src={logo}
              className="bg-transparent border-2  rounded-md p-4 w-32 h-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
