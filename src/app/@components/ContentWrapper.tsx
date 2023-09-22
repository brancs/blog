'use client'
import React, { ReactNode, useContext, useEffect } from 'react'
import { ViewportContext } from '../@context/Viewport'
import { twMerge } from 'tailwind-merge'
import { ThemeContext } from '../@context/Theme'
import { ETheme } from '@/@types'

export default function ContentWrapper({ children }: { children: ReactNode }) {
  const { isMobile } = useContext(ViewportContext)
  const cn = isMobile ? 'relative my-16' : 'flex'

  const { currentTheme } = useContext(ThemeContext)

  return (
    <div
      className={twMerge([
        'h-screen',
        cn,
        currentTheme === ETheme.DARK ? 'dark' : '',
      ])}
    >
      {children}
    </div>
  )
}
