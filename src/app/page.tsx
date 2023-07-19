import FeaturedPost from '@/components/FeaturedPost';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section className="w-full mb-20">
      {/* @ts-expect-error Async Server Component */}
      <Profile className="flex flex-col flex-nowrap w-full h-[300px] rounded-2xl p-6 bg-no-repeat bg-cover dark:bg-center" />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
    </section>
  );
}
