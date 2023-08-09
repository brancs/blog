import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface CardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export default function CardRoot({ children, ...rest }: CardRootProps) {
  return (
    <div
      {...rest}
      className={twMerge([
        'custom-noise rounded-xl bg-nav p-6',
        rest.className,
      ])}
    >
      {children}
    </div>
  )
}
