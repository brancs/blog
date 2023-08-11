import Link from 'next/link'
import { paths } from '.'

interface BreadCrumbsProps {
  list: { title: string; path: string }[]
}

export default function BreadCrumbs({ list }: BreadCrumbsProps) {
  return (
    <div>
      <Link href={paths.home}>Home</Link>{' '}
      {list.map(({ title, path }) => (
        <span key={title}>
          \ <Link href={path}>{title}</Link>
        </span>
      ))}
    </div>
  )
}
