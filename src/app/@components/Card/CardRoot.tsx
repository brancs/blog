import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function CardRoot({ children, ...rest }: CardRootProps) {
  return (
    <div {...rest} className={twMerge(["p-6 bg-gray-700 rounded-xl custom-noise", rest.className])}>
      {children}
    </div>
  );
}
