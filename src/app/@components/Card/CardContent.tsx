import { HTMLAttributes, ReactNode } from "react";

interface CardTitleProps extends HTMLAttributes<HTMLDivElement> {
  children:ReactNode
}

export default function CardContent({children, className}:CardTitleProps) {
  return <div className={className}>{children}</div>;
}
