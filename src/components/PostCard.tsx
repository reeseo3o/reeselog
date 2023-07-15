import { Post } from '@/service/posts';
import Link from 'next/link';

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`posts/${path}`}>
      <article className="w-full flex flex-col">
        <div>
          <div className="flex">
            <h3 className="text-md font-bold mr-2">{title}</h3>
            <span className="text-xs align-middle text-center text-rose-400">
              {category}
            </span>
          </div>
          <p className="text-center text-sm">{description}</p>
          <time className="text-gray-500 text-xs">{date.toString()}</time>
        </div>
      </article>
    </Link>
  );
}
