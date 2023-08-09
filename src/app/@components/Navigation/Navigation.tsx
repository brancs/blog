'use client'
import React, { useContext } from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { ViewportContext } from '@/app/@context/Viewport'

export function Navigation() {
  const { isMobile } = useContext(ViewportContext)

  if (isMobile) return <Mobile />
  return <Desktop />
}
