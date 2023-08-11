import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export default function NavListRoot({ children, ...rest }: NavListProps) {
  return (
    <ul className={twMerge(['flex flex-col gap-6', rest.className])}>
      {children}
    </ul>
  )
}
