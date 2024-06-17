import Link from "next/link";

export default function TheHeader() {
  return (
    <div className="z-10 flex min-h-20 w-full items-center justify-between bg-black bg-opacity-10 p-4">
      <div className="flex-grow text-center">
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
