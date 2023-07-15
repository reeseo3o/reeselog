import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 dark:text-white dark:bg-sky-950">
      <Link href="/">
        <h1 className="text-3xl font-bold">{'Reese.dev'}</h1>
      </Link>
      <nav className="flex gap-4">
        <DarkModeButton />
        <Link href="/posts">Posts</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
