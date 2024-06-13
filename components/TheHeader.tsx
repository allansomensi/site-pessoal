export default function TheHeader() {
  return (
    <div className="flex w-full items-center justify-between bg-black bg-opacity-10 p-4 z-10 min-h-20">
      <a href="#" className="mx-auto sm:hidden">
        <img src="menu.svg" alt="" />
      </a>
      <div className="flex-grow text-center hidden sm:block">
        <ul className="inline-flex select-none gap-8 text-lg font-medium text-slate-300 sm:gap-20 sm:text-xl md:gap-28">
          <li className="md:hover:scale-105 duration-200 active:scale-105">
            <a href="#projects">Projetos</a>
          </li>
          <li className="md:hover:scale-105 duration-200 active:scale-105">
            <a href="#about">Sobre</a>
          </li>
          <li className="md:hover:scale-105 duration-200 active:scale-105">
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
