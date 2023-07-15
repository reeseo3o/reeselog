import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const LINKS = [
  { icon: <AiFillGithub />, url: '' },
  { icon: <AiFillYoutube />, url: '' },
  { icon: <AiFillLinkedin />, url: '' },
];

export default function Footer() {
  return (
    <footer>
      <ul className="flex gap-4 items-center justify-center dark:bg-sky-950 dark:text-white">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-rose-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <p className="text-black text-sm text-center">
        {
          "It's alright to be slow, but never stand still. | All Rights Reserved."
        }
      </p>
    </footer>
  );
}
