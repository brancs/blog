'use client'

import { navItemType } from '@/@types'
import Divider from '../Divider'
import ThemeSwitch from '../ThemeSwitch'
import { NavList } from './NavList'
import NavTitle from './NavTitle'

interface DesktopProps {
  navItems: navItemType[]
}

export default function Desktop({ navItems }: DesktopProps) {
  return (
    <>
      <aside className="custom-noise flex min-w-[224px] flex-col items-center gap-8 bg-nav p-8 shadow-nav">
        <div>Icon</div>
        <div className="w-full">Search bar</div>
        <div className="flex w-full flex-col gap-6">
          <NavTitle text="Categories" />
          <NavList.Root className="">
            {navItems &&
              navItems.map((item) => (
                <NavList.Item key={item.text} item={item} />
              ))}
          </NavList.Root>
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
