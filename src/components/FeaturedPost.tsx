import { getFeaturedPosts } from "@/service/posts";
import PostsGrid from "./PostsGrid";

export default async function FeaturedPost() {
  // 1.모든 포스트 데이터 읽어야
  // 모든 포스트 데이터 읽어야
  const posts = await getFeaturedPosts();
  return (
    <div>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <PostsGrid posts={posts} />
    </div>
  );
}
