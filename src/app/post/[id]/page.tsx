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
    { title: `${currentPost?.title}`, path: `/post/${currentPost?.id}` },
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
    <main className="mx-3 py-10">
      <BreadCrumbs list={breadCrumbList} />
      <div>
        <h1>Post {currentPost?.title}</h1>
      </div>
    </main>
  )
}
