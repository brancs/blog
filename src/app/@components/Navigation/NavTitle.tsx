interface NavTitleProps {
  text: string
}

export default function NavTitle({ text }: NavTitleProps) {
  return (
    <h3 className="text-xl font-semibold leading-normal text-black dark:text-white dark:text-opacity-50">
      {text}
    </h3>
  )
}
