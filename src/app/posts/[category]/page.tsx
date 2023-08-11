interface PagePostProps {
  params: { category: string }
}

export default function PagePost({ params }: PagePostProps) {
  const { category } = params
  return (
    <main className="mx-3 py-10">
      <h1>Category {category}</h1>
    </main>
  )
}
