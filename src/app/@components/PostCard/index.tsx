import { PostType } from '@/@types'
import { Card } from '../Card'

interface PostCardProps {
  post: PostType
}

export default function PostCard({post}:PostCardProps) {
  //TODO Date and Categories tags
  return (
    <Card.Root className='flex flex-col md:flex-row gap-5 w-full'>
      <Card.Icon icon={post.icon} className='text-rose-400' />
      <Card.Content>
        <Card.Title as='h3' className='max-w-sm' title={post.title}/>
        <Card.Description className='max-w-sm' description={post.description} />
      </Card.Content>
    </Card.Root>
  )
}

