'use client'
import { useContext, useEffect } from 'react'
import { posts } from '@/@mocks'
import Voca from 'voca'
import { PostContext } from '@/app/@context/Post'
import BreadCrumbs from '@/app/@components/BreadCrumbs'
import path from 'path'

interface PagePostProps {
  params: { id: string }
}

export default function PagePost({ params }: PagePostProps) {
  const { id } = params
  const currentPost = posts.find(
    (post) => post.id === id || Voca.slugify(post.title) === id
  )
  const { setCurrentPost } = useContext(PostContext)

  const breadCrumbList = [
    {
      title: `${currentPost?.category}`,
      path: `/posts/${currentPost?.category}`,
    },
    {
      title: `${currentPost?.title}`,
      path: `/post/${Voca.slugify(currentPost?.title)}`,
      active: true,
    },
  ]

  useEffect(() => {
    if (typeof window === 'undefined' && !currentPost) return

    window.history.pushState(
      {},
      '',
      `/post/${Voca.slugify(currentPost?.title)}`
    )

    if (setCurrentPost) setCurrentPost(currentPost)

    return () => {
      if (setCurrentPost) setCurrentPost(undefined)
    }
  }, [currentPost, setCurrentPost])

  return (
    <main className="custom-noise w-full bg-white px-3 py-10 dark:bg-body sm:px-5 md:px-8 lg:px-12">
      <BreadCrumbs list={breadCrumbList} />
      <div>
        <h1 className="text-black dark:text-white">{currentPost?.title}</h1>
      </div>
    </main>
  )
}
