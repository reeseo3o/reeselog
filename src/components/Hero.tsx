import Image from "next/image";
import profileImage from "/public/images/profile.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        width={250}
        height={250}
        alt="Picture of the author"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm reese"}</h2>
      <h3 className="text-xl font-semibold">FrontEnd Engineer</h3>
      <p>꿈을 코딩하는 사람</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
