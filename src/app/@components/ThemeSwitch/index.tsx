import { Icon } from '@iconify/react'
import React from 'react'

export default function ThemeSwitch() {
  return (
    <div className="flex items-center gap-2 rounded-full bg-body px-3 py-2">
      <button className="flex h-6 w-16 items-center gap-1 rounded-full bg-rose-400 p-1 text-[10px] leading-none">
        <Icon
          icon="ph:moon-bold"
          className="inline-block text-xs leading-none"
        />
        <span className="font-bold">Dark</span>
      </button>
      <button className="flex h-6 w-16 items-center gap-1 rounded-full p-1 text-[10px] leading-none">
        <Icon
          icon="ph:sun-bold"
          className="inline-block text-xs leading-none"
        />
        <span className="font-bold">Light</span>
      </button>
    </div>
  )
}
