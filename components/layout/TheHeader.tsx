import Image from "next/image";
import Link from "next/link";

export default function TheHeader() {
  return (
    <div className="z-10 flex min-h-20 w-full items-center justify-between bg-black bg-opacity-10 p-4">
      <Link href="/" className="mx-auto sm:hidden">
        <svg
          height={40}
          width={40}
          viewBox="0 0 15 15"
          className="fill-white opacity-80"
        >
          <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"></path>
        </svg>
      </Link>
      <div className="hidden flex-grow text-center sm:block">
        <ul className="inline-flex select-none gap-8 text-lg font-medium text-slate-300 sm:gap-20 sm:text-xl md:gap-28">
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#projects">Projetos</Link>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#about">Sobre</Link>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#about">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
