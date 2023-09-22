import BreadCrumbs from '@/app/@components/BreadCrumbs'

interface PagePostProps {
  params: { category: string }
}

export default function PagePost({ params }: PagePostProps) {
  const { category } = params

  const breadCrumbList = [
    {
      title: `${category}`,
      path: `/posts/${category}`,
      active: true,
    },
  ]

  return (
    <main className="custom-noise w-full bg-white px-3 py-10 dark:bg-body sm:px-5 md:px-8 lg:px-12">
      <BreadCrumbs list={breadCrumbList} />
      <div>
        <h1 className="text-black dark:text-white">Category {category}</h1>
      </div>
    </main>
  )
}
