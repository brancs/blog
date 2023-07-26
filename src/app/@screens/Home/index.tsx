
import { posts } from "@/@mocks";
import { Card } from "@/app/@components/Card";
import PostCard from "@/app/@components/PostCard";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mx-3 sm:mx-5 md:mx-8 lg:mx-12 py-10">
      <Card.Root className="relative flex items-center min-h-[300px] overflow-hidden">
        <div className="absolute bg-rose-400 custom-noise w-[300px] h-[300px] rounded-full bottom-[-64px] right-[-64px] z-[0]"></div>
        <p className="relative text-5xl">Boa noite</p>
      </Card.Root>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl uppercase tracking-wider">Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
