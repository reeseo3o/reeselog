import FilterablePost from '@/components/FilterablePost';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  //중복 없애기 위해 Set으로 한 번 변환
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <FilterablePost posts={posts} categories={categories}></FilterablePost>
  );
}
