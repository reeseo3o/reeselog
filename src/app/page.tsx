import FeaturedPost from "@/components/FeaturedPost";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <section>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
    </section>
  );
}
