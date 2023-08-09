import { PostType } from '@/@types'
import { Card } from '../Card'
import Link from 'next/link';
import { paths } from '..';

interface PostCardProps {
  post: PostType
}

export default function PostCard({post}:PostCardProps) {
  const {id, icon, title, description} = post;
  //TODO Date, Categories tags, link to post
  return (
    <Card.Root className='flex flex-col md:flex-row gap-5 w-full'>
      <Card.Icon icon={icon} className='text-rose-400' />
      <Card.Content>
        <Card.Title as='h3' className='max-w-sm' title={title}/>
        <Card.Description className='max-w-sm' description={description} />
        <Link href={paths.post(id)}>Link teste</Link>
      </Card.Content>
    </Card.Root>
  )
}

