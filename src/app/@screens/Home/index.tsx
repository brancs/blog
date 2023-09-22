'use client'
import { posts } from '@/@mocks'
import { Card } from '@/app/@components/Card'
import PostCard from '@/app/@components/PostCard'
import { PostContext } from '@/app/@context/Post'
import { useContext } from 'react'

export default function Home() {
  const { currentPost } = useContext(PostContext)
  return (
    <main className="flex flex-col gap-8 bg-white px-3 py-10 dark:bg-body sm:px-5 md:px-8 lg:px-12">
      {currentPost && currentPost.title}
      <Card.Root className="relative flex min-h-[300px] items-center overflow-hidden bg-slate-100 dark:bg-nav">
        <div className="custom-noise absolute bottom-[-64px] right-[-64px] z-[0] h-[300px] w-[300px] rounded-full bg-rose-400"></div>
        <p className="relative text-5xl text-black dark:text-white">
          Boa noite
        </p>
      </Card.Root>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl uppercase tracking-wider text-black dark:text-white">
          Recentes
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
