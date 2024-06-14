import SocialIcon from "../SocialIcon";

interface AboutMeProps {
  className: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div
      id="about"
      className={`flex flex-col md:flex-row min-w-screen bg-neutral-100 border-2 dark:border-0 dark:bg-slate-700 rounded-3xl p-4 sm:p-10 ${props.className}`}
    >
      <img
        src="perfil-img.jpg"
        alt="Perfil"
        className="bg-gray-900 rounded-full shadow-lg w-32 h-32 md:w-52 md:h-52 object-cover mx-auto md:mx-0"
      />

      <div className="flex flex-col h-full w-full px-2 sm:px-10 mt-5 md:mt-0">
        <h1 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-semibold self-center md:self-end hidden md:block">
          About me
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-900 dark:text-white font-medium self-center md:self-start">
          Allan Somensi
        </h2>
        <h3 className="text-md md:text-lg text-slate-900 dark:text-slate-300 self-center md:self-start">
          Desenvolvedor Web
        </h3>
        <h2 className="text-xl md:text-2xl text-slate-900 dark:text-slate-200 mt-6 ml-4 font-semibold">
          Bio
        </h2>
        <p className="text-sm sm:text-base md:text-md text-slate-900 dark:text-slate-400 ml-5 mt-2">
          Desenvolvedor Web em formação, apaixonado por tecnologia e buscando se
          atualizar com as últimas tendências da área. Atualmente focado em
          desenvolvimento de APIs back-end com Python e Django, explorando
          integrações front-end com React e TailwindCSS.
        </p>
        <div className="flex sm:ml-5 mt-5 gap-4 sm:gap-6 flex-wrap sm:flex-nowrap items-center self-center justify-center md:self-end">
          <a href="https://github.com/allansomensi" target="_blank">
            <SocialIcon name="github" />
          </a>
          <a href="https://linkedin.com/in/allansomensi" target="_blank">
            <SocialIcon name="linkedin" />
          </a>
          <a href="https://instagram.com/allanrsomensi" target="_blank">
            <SocialIcon name="instagram" />
          </a>
          <a href="https://facebook.com/allanrsomensi" target="_blank">
            <SocialIcon name="facebook" />
          </a>
          <a href="https://x.com/allanrsomensi" target="_blank">
            <SocialIcon name="x" className="scale-95 -ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
