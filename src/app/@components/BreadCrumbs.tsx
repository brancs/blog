import Link from 'next/link'
import { paths } from '.'

interface BreadCrumbsProps {
  list: { title: string; path?: string; active?: boolean }[]
}

export default function BreadCrumbs({ list }: BreadCrumbsProps) {
  return (
    <div className="text-xs lowercase text-black dark:text-white">
      <Link href={paths.home}>Home</Link>{' '}
      {list.map(({ title, path, active }) => (
        <span key={title}>
          \{' '}
          {path && (
            <Link className={active ? 'text-rose-400' : ''} href={path}>
              {title}
            </Link>
          )}
        </span>
      ))}
    </div>
  )
}
