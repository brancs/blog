'use client'
import { PostType } from '@/@types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type PostContextType = {
  currentPost?: PostType
  setCurrentPost?: Dispatch<SetStateAction<PostType | undefined>>
}

const defaultPostValues: PostContextType = {}

export const PostContext = createContext(defaultPostValues)

export function PostProvider({ children }: { children: ReactNode }) {
  const [currentPost, setCurrentPost] = useState<PostType>()

  return (
    <PostContext.Provider value={{ currentPost, setCurrentPost }}>
      {children}
    </PostContext.Provider>
  )
}
