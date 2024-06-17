import Link from "next/link";

export default function TheHeader() {
  return (
    <div className="z-10 flex min-h-20 w-full items-center justify-between bg-black bg-opacity-10 p-4">
      <div className="flex-grow text-center">
        <ul className="flex select-none items-center justify-center space-x-8 self-center text-lg font-medium text-slate-300 sm:space-x-12 md:space-x-16">
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#projects">Projetos</Link>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#about">Sobre</Link>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <Link href="#myskills">My Skills</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
