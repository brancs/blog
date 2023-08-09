import Link from "next/link";
import { paths } from "../../@components";

interface PagePostProps {
  params: { id: string };
}

export default function PagePost({ params }: PagePostProps) {
  const { id } = params;
  return (
    <>
      <Link href={paths.home}>Home</Link>
      <div>Post {id}</div>
    </>
  );
}
