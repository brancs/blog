'use client'
import React, { ReactNode, useContext } from 'react'
import { ViewportContext } from '../@context/Viewport'
import { twMerge } from 'tailwind-merge'

export default function ContentWrapper({ children }: { children: ReactNode }) {
  const { isMobile } = useContext(ViewportContext)
  const cn = isMobile ? 'relative my-16' : 'flex'
  return <nav className={twMerge(['h-screen', cn])}>{children}</nav>
}
