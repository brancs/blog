'use client'
import { posts } from '@/@mocks'
import { Card } from '@/app/@components/Card'
import PostCard from '@/app/@components/PostCard'
import { PostContext } from '@/app/@context/Post'
import { useContext } from 'react'

export default function Home() {
  const { currentPost } = useContext(PostContext)
  return (
    <main className="mx-3 flex flex-col gap-8 py-10 sm:mx-5 md:mx-8 lg:mx-12">
      {currentPost && currentPost.title}
      <Card.Root className="relative flex min-h-[300px] items-center overflow-hidden">
        <div className="custom-noise absolute bottom-[-64px] right-[-64px] z-[0] h-[300px] w-[300px] rounded-full bg-rose-400"></div>
        <p className="relative text-5xl">Boa noite</p>
      </Card.Root>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl uppercase tracking-wider">Recentes</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
