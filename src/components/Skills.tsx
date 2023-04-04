import git from "../assets/skills/Git.svg";
import css from "../assets/skills/CSS.svg";
import html from "../assets/skills/html5.svg";
import javascript from "../assets/skills/JavaScript.svg";
import typescript from "../assets/skills/Typescript.svg";
import react from "../assets/skills/react.svg";
import node from "../assets/skills/Node.svg";
import tailwind from "../assets/skills/TailwindCSS.svg";
import { Title } from "./Title";

const logos = [
  { id: 1, img: git },
  { id: 2, img: css },
  { id: 3, img: html },
  { id: 4, img: javascript },
  { id: 5, img: typescript },
  { id: 6, img: react },
  { id: 7, img: node },
  { id: 8, img: tailwind },
];

export const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-12 w-full flex justify-center">
      <div className="flex flex-col items-center gap-4">
        <Title>Skills</Title>
        <div className=" mb-6  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
          {logos.map((logo) => (
            <img
              alt="skills logo"
              key={logo.id}
              src={logo.img}
              className="bg-transparent border-2  rounded-md p-4 w-32 h-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
