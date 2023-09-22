'use client'
import { ETheme } from '@/@types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

type ThemeContextType = {
  currentTheme: ETheme
  setCurrentTheme?: Dispatch<SetStateAction<ETheme>>
}

const defaultThemeValues: ThemeContextType = { currentTheme: ETheme.LIGHT }

export const ThemeContext = createContext(defaultThemeValues)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const prefersTheme = () => {
    if (typeof window === 'undefined') return ETheme.DARK

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? ETheme.DARK
      : ETheme.LIGHT
  }

  const [currentTheme, setCurrentTheme] = useState<ETheme>(prefersTheme())

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
