import Image from 'next/image';
import profileImage from '/public/images/profile.jpg';
import Link from 'next/link';

export default function Profile() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        width={200}
        height={100}
        alt="Picture of the author"
        priority
      />
      <h2 className="text-3xl font-bold mt-2">Reese</h2>
      <h3 className="text-xl font-semibold">FrontEnd Engineer</h3>
      <p>who likes to travel</p>
    </section>
  );
}
