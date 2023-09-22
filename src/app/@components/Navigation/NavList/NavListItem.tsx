'use client'
import { navItemType } from '@/@types'
import { PostContext } from '@/app/@context/Post'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HTMLAttributes, ReactNode, useContext } from 'react'
import { twMerge } from 'tailwind-merge'
import Voca from 'voca'

interface NavItemProps extends HTMLAttributes<HTMLLIElement> {
  item: navItemType
}

export default function NavListItem({ item, ...rest }: NavItemProps) {
  const { text, icon, path } = item

  const pathname = usePathname()
  const { currentPost } = useContext(PostContext)

  const checkActive = (path?: string) =>
    pathname === path || Voca.slugify(text) === currentPost?.category

  const activeTextStyle = checkActive(path)
    ? 'text-rose-400'
    : 'text-black dark:text-opacity-50 dark:text-white'

  if (!icon)
    return (
      <NavItemContainer
        className={twMerge([activeTextStyle, rest.className])}
        path={path}
      >
        <NavItemText text={text} />
      </NavItemContainer>
    )

  return (
    <NavItemContainer
      className={twMerge([activeTextStyle, rest.className])}
      path={path}
    >
      {icon} <NavItemText text={text} />
    </NavItemContainer>
  )
}

function NavItemText({ text }: { text: string }) {
  return (
    <span className="inline-block font-semibold leading-none ">{text}</span>
  )
}

interface NavItemContainerProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode
  path?: string
}

function NavItemContainer({ children, path, ...rest }: NavItemContainerProps) {
  const customStyle = twMerge([
    'flex items-center gap-4 text-base',
    rest.className,
  ])
  return (
    <li className={customStyle}>
      {path ? (
        <Link href={path} className={customStyle}>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  )
}
