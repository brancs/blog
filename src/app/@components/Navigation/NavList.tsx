import { Icon } from '@iconify/react'
import NavItem from './NavItem'

export default function NavList() {
  return (
    <ul className="flex flex-col gap-6">
      <NavItem
        active
        icon={
          <Icon
            icon="ph:code-bold"
            className="inline-block text-2xl leading-none"
          />
        }
        text="Coding"
      />
      <NavItem
        icon={
          <Icon
            icon="ph:pen-nib-bold"
            className="inline-block text-2xl leading-none"
          />
        }
        text="Design"
      />
      <NavItem
        icon={
          <Icon
            icon="ph:confetti-bold"
            className="inline-block text-2xl leading-none"
          />
        }
        text="Fun"
      />
    </ul>
  )
}
