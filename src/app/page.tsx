import CarouselPost from '@/components/CarouselPost';
import FeaturedPost from '@/components/FeaturedPost';
import Profile from '@/components/Profile';

export default function HomePage() {
  return (
    <section>
      <Profile />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </section>
  );
}
