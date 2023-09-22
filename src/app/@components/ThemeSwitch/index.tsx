import { ETheme } from '@/@types'
import { ThemeContext } from '@/app/@context/Theme'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import { twJoin } from 'tailwind-merge'

export default function ThemeSwitch() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  function switchMode(setToDark: boolean) {
    if (!setCurrentTheme) return

    if (setToDark) {
      setCurrentTheme(ETheme.DARK)
      return
    }

    setCurrentTheme(ETheme.LIGHT)
  }

  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-300 px-3 py-2 dark:bg-body">
      <button
        className={twJoin([
          'flex h-6 w-16 items-center gap-1 rounded-full p-1 text-[10px] leading-none text-black dark:text-white',
          currentTheme === ETheme.DARK ? 'bg-rose-400 text-white' : '',
        ])}
        onClick={() => switchMode(true)}
      >
        <Icon
          icon="ph:moon-bold"
          className="inline-block text-xs leading-none"
        />
        <span className="font-bold">Dark</span>
      </button>
      <button
        className={twJoin([
          'flex h-6 w-16 items-center gap-1 rounded-full p-1 text-[10px] leading-none text-black dark:text-white',
          currentTheme !== ETheme.DARK ? 'bg-rose-400 text-white' : '',
        ])}
        onClick={() => switchMode(false)}
      >
        <Icon
          icon="ph:sun-bold"
          className="inline-block text-xs leading-none"
        />
        <span className="font-bold">Light</span>
      </button>
    </div>
  )
}
