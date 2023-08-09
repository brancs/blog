'use client'

import Divider from '../Divider'
import ThemeSwitch from '../ThemeSwitch'
import NavList from './NavList'
import NavTitle from './NavTitle'

export default function Desktop() {
  return (
    <>
      <aside className="custom-noise flex min-w-[224px] flex-col items-center gap-8 bg-nav p-8 shadow-nav">
        <div>Icon</div>
        <div className="w-full">Search bar</div>
        <div className="flex w-full flex-col gap-6">
          <NavTitle text="Categories" />
          <NavList />
        </div>
        <div>Ad</div>
        <div className="flex w-full flex-col gap-6">
          <NavTitle text="Theme" />
          <ThemeSwitch />
        </div>
        <Divider />
        <div className="text-center text-xs font-bold leading-none">
          2023 - Vitor Brancalião
        </div>
      </aside>
    </>
  )
}
