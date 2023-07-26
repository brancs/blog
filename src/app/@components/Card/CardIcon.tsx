'use client'
import { Icon } from "@iconify/react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  icon: string;
}

export default function CardIcon({ icon, ...rest }: CardIconProps) {
  return (
    <>
      <Icon icon={icon} className={twMerge(["text-4xl", rest.className])} />
    </>
  );
}
