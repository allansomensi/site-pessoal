export default function TheHeader() {
  return (
    <div className="z-10 flex min-h-20 w-full items-center justify-between bg-black bg-opacity-10 p-4">
      <a href="#" className="mx-auto sm:hidden">
        <img src="menu.svg" alt="" />
      </a>
      <div className="hidden flex-grow text-center sm:block">
        <ul className="inline-flex select-none gap-8 text-lg font-medium text-slate-300 sm:gap-20 sm:text-xl md:gap-28">
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <a href="#projects">Projetos</a>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <a href="#about">Sobre</a>
          </li>
          <li className="duration-200 active:scale-105 md:hover:scale-105">
            <a href="#about">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
