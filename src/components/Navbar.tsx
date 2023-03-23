export const Navbar = () => {
  return (
    <div className="w-full flex justify-center sticky top-0 backdrop-blur-md ">
      <nav className="w-3/4 flex justify-between p-4 ">
        <a href="/">
          <img src="letter.svg" />
        </a>

        <ul className="text-zinc-200 flex gap-4">
          <ListItem text="About" />
          <ListItem text="Projects" />
          <ListItem text="Skills" />
          <ListItem text="Contact" />
        </ul>
      </nav>
    </div>
  );
};

interface ListItem {
  text: string;
}
const ListItem = ({ text }: ListItem) => {
  return (
    <li className="cursor-pointer after:content-[''] after:w-0 after:h-0.5 hover:after:w-full after:block after:transition-all after:bg-zinc-200 after:duration-300 after:ease-linear">
      <a href={`#${text.toLowerCase()}`}>{text}</a>
    </li>
  );
};
