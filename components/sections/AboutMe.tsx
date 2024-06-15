import Link from "next/link";
import SocialIcon from "../SocialIcon";

interface AboutMeProps {
  className: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div
      id="about"
      className={`min-w-screen flex flex-col rounded-3xl border-2 p-4 sm:p-10 md:flex-row dark:border-0 dark:bg-slate-700 ${props.className}`}
    >
      <img
        src="profile.jpg"
        alt="profile image"
        className="mx-auto h-32 w-32 rounded-full bg-gray-900 object-cover shadow-lg md:mx-0 md:h-52 md:w-52"
      />

      <div className="mt-5 flex h-full w-full flex-col px-2 sm:px-10 md:mt-0">
        <h1 className="hidden self-center text-3xl font-semibold text-slate-900 md:block md:self-end md:text-4xl dark:text-white">
          About me
        </h1>
        <h2 className="self-center text-2xl font-medium text-slate-900 md:self-start md:text-3xl dark:text-white">
          Allan Somensi
        </h2>
        <h3 className="text-md self-center text-slate-900 md:self-start md:text-lg dark:text-slate-300">
          Desenvolvedor Web
        </h3>
        <h2 className="ml-4 mt-6 text-xl font-semibold text-slate-900 md:text-2xl dark:text-slate-200">
          Bio
        </h2>
        <p className="md:text-md ml-5 mt-2 text-sm text-slate-900 sm:text-base dark:text-slate-400">
          Desenvolvedor Web em formação, apaixonado por tecnologia e buscando se
          atualizar com as últimas tendências da área. Atualmente focado em
          desenvolvimento de APIs back-end com Python e Django, explorando
          integrações front-end com React e TailwindCSS.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 self-center sm:ml-5 sm:flex-nowrap sm:gap-6 md:self-end">
          <Link href="https://github.com/allansomensi" target="_blank">
            <SocialIcon name="github" />
          </Link>
          <Link href="https://linkedin.com/in/allansomensi" target="_blank">
            <SocialIcon name="linkedin" />
          </Link>
          <Link href="https://instagram.com/allanrsomensi" target="_blank">
            <SocialIcon name="instagram" />
          </Link>
          <Link href="https://facebook.com/allanrsomensi" target="_blank">
            <SocialIcon name="facebook" />
          </Link>
          <Link href="https://x.com/allanrsomensi" target="_blank">
            <SocialIcon name="x" className="-ml-1 scale-95" />
          </Link>
        </div>
      </div>
    </div>
  );
}
