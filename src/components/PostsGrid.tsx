import { Post } from '@/service/posts';
import PostCard from './PostCard';

type Props = { posts: Post[] };
export default function PostsGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}
        className='flex flex-nowrap items-center justify-between w-full rounded-lg my-4 p-1.5 cursor-pointer'>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
