import { getFeaturedPosts } from '@/service/posts';
import PostsGrid from './PostsGrid';

export default async function FeaturedPost() {
  const posts = await getFeaturedPosts();
  return (
    <section className='mt-20' >
      <h2 className="text-2xl font-bold my-2">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
