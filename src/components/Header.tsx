import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-3xl font-bold">{"Reese's blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href="/posts">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/guestbook">GuestBook</Link>
      </nav>
    </header>
  );
}
