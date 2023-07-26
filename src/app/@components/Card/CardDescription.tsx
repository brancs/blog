import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  description: string;
}

export default function CardDescription({ description, ...rest }: CardDescriptionProps) {
  return <p {...rest} className={twMerge(["text-base", rest.className])}>{description}</p>;
}
