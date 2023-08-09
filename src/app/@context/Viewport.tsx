'use client'
import { ReactNode, createContext, useEffect, useState } from 'react'

type ViewportSizeType = {
  width: number
  height: number
  isMobile: boolean
}

const defaultVpSize: ViewportSizeType = {
  width: 0,
  height: 0,
  isMobile: false,
}

export const ViewportContext = createContext(defaultVpSize)

export function ViewportProvider({ children }: { children: ReactNode }) {
  const getCurrentVpSize = () => {
    if (typeof window === 'undefined') return defaultVpSize

    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: window.innerWidth < 1024,
    }
  }

  const [vpSize, setVpSize] = useState<ViewportSizeType>(getCurrentVpSize())

  useEffect(() => {
    const updateVpSize = () => setVpSize(getCurrentVpSize())

    window.addEventListener('resize', updateVpSize)

    return () => window.removeEventListener('resize', updateVpSize)
  }, [])

  return (
    <ViewportContext.Provider value={vpSize}>
      {children}
    </ViewportContext.Provider>
  )
}
