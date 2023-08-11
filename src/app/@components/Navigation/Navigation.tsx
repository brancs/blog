'use client'
import React, { useContext } from 'react'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { ViewportContext } from '@/app/@context/Viewport'
import { Icon } from '@iconify/react'
import { navItemType } from '@/@types'

export function Navigation() {
  const { isMobile } = useContext(ViewportContext)

  const rawNavItems: { iconName: string; text: string; path: string }[] = [
    {
      iconName: 'ph:house-bold',
      text: 'Home',
      path: '/',
    },
    {
      iconName: 'ph:code-bold',
      text: 'Coding',
      path: '/posts/coding',
    },
    {
      iconName: 'ph:pen-nib-bold',
      text: 'Design',
      path: '/posts/design',
    },
    {
      iconName: 'ph:leaf-bold',
      text: 'Life Style',
      path: '/posts/life-style',
    },
  ]

  const makeNavItemsIcon = (isMobile: boolean): navItemType[] => {
    const classNameDesktop = 'inline-block text-2xl leading-none'
    const classNameMobile = 'inline-block text-lg leading-none'

    return rawNavItems.map(({ iconName, text, path }) => ({
      icon: (
        <Icon
          icon={iconName}
          className={isMobile ? classNameMobile : classNameDesktop}
        />
      ),
      text,
      path,
    }))
  }

  const navItems = makeNavItemsIcon(isMobile)

  if (isMobile) return <Mobile navItems={navItems} />
  return <Desktop navItems={navItems} />
}
