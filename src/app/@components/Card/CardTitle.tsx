import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardTitleProps extends HTMLAttributes<HTMLTitleElement> {
  as?: "h1" | "h2" | "h3";
  title: string;
}

export default function CardTitle({ title, as: Component = "h2", ...rest }: CardTitleProps) {
  return <Component className={twMerge(["text-2xl mb-4", rest.className])}>{title}</Component>;
}
