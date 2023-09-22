import { PostType } from '@/@types'
import { Card } from '../Card'
import Link from 'next/link'
import { paths } from '..'

interface PostCardProps {
  post: PostType
}

export default function PostCard({ post }: PostCardProps) {
  const { id, icon, title, description } = post
  //TODO Date, Categories tags, link to post
  return (
    <Card.Root className="flex w-full flex-col gap-5 bg-slate-100 dark:bg-nav md:flex-row">
      <Card.Icon icon={icon} className="text-rose-400" />
      <Card.Content>
        <Card.Title
          as="h3"
          className="max-w-sm text-black dark:text-white"
          title={title}
        />
        <Card.Description
          className="max-w-sm text-black dark:text-white"
          description={description}
        />
        <Link href={paths.post(id)} className="text-black dark:text-white">
          Link teste
        </Link>
      </Card.Content>
    </Card.Root>
  )
}
