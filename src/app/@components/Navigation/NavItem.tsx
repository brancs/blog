'use client'

import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface NavItemProps {
  icon: React.ReactNode
  text: string
  active?: boolean
}

export default function NavItem({ text, icon, active }: NavItemProps) {
  const activeTextStyle = active
    ? 'text-rose-400'
    : 'text-opacity-50 text-white'

  if (!icon)
    return (
      <NavItemContainer className={activeTextStyle}>
        <NavItemText text={text} />
      </NavItemContainer>
    )

  return (
    <NavItemContainer className={activeTextStyle}>
      {icon} <NavItemText text={text} />
    </NavItemContainer>
  )
}

function NavItemText({ text }: { text: string }) {
  return <span className="text-base font-semibold leading-none ">{text}</span>
}

interface NavItemContainerProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
}

function NavItemContainer({ children, ...rest }: NavItemContainerProps) {
  return (
    <li className={twMerge(['flex items-center gap-4', rest.className])}>
      {children}
    </li>
  )
}
