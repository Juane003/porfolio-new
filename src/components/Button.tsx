import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center bg-zinc-200 w-32 h-8 text-zinc-900 p-2 rounded-md hover:bg-transparent hover:text-zinc-200 border hover:border-zinc-200 duration-300 font-semibold`}
    >
      {children}
    </button>
  );
};
