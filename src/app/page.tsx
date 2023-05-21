import CarouselPost from '@/components/CarouselPost';
import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <CarouselPost />
    </section>
  );
}
