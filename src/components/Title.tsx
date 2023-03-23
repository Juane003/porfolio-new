import { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-zinc-200">
      {children}
    </h1>
  );
};
