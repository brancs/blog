import { navItemType } from '@/@types'
import { NavList } from './NavList'

interface MobileProps {
  navItems: navItemType[]
}

export default function Mobile({ navItems }: MobileProps) {
  return (
    <>
      <div className="custom-noise fixed top-0 z-10 h-16 w-full bg-nav shadow-nav">
        Top
      </div>
      <div className="custom-noise fixed bottom-0 z-10 h-16 w-full bg-nav shadow-nav">
        <NavList.Root className="h-full flex-row items-center justify-center">
          {navItems &&
            navItems.map((item) => (
              <NavList.Item
                key={item.text}
                item={item}
                className="flex-col gap-1 text-xs"
              />
            ))}
        </NavList.Root>
      </div>
    </>
  )
}
