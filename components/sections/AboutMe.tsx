import SocialIcon from "../SocialIcon";

interface AboutMeProps {
  className: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <div
      id="about"
      className={`flex flex-col md:flex-row min-w-screen bg-slate-600 rounded-3xl p-4 sm:p-10 ${props.className}`}
    >
      <img
        src="#"
        alt="Perfil"
        className="bg-gray-900 rounded-full text-white border min-h-32 min-w-32 md:min-w-52 md:min-h-52 mx-auto md:mx-0"
      />
      <div className="flex flex-col h-full w-full px-2 sm:px-10 mt-5 md:mt-0">
        <h1 className="text-3xl md:text-4xl text-white font-semibold self-center md:self-end hidden md:block">
          About me
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-medium self-center md:self-start">
          Allan Somensi
        </h2>
        <h3 className="text-md md:text-lg text-slate-300 self-center md:self-start">
          Desenvolvedor Web
        </h3>
        <h2 className="text-xl md:text-2xl text-slate-200 mt-6 ml-4 font-semibold">
          Bio
        </h2>
        <p className="text-sm sm:text-base md:text-md text-slate-400 ml-5 mt-2">
          Desenvolvedor Web em formação, apaixonado por tecnologia e buscando se
          atualizar com as últimas tendências da área. Atualmente focado em
          desenvolvimento de APIs back-end com Python e Django, explorando
          integrações front-end com React e TailwindCSS.
        </p>
        <div className="flex ml-5 mt-5 gap-4 self-center md:self-end">
          <SocialIcon
            name="Github"
            path="icons/social/github.svg"
            redirect="https://github.com/allansomensi"
          />
          <SocialIcon
            name="LinkedIn"
            path="icons/social/linkedin.svg"
            redirect="https://linkedin.com/in/allansomensi"
          />
          <SocialIcon
            name="Instagram"
            path="icons/social/instagram.svg"
            redirect="https://instagram.com/allanrsomensi"
          />
          <SocialIcon
            name="Facebook"
            path="icons/social/facebook.svg"
            redirect="https://facebook.com/allanrsomensi"
          />
          <SocialIcon
            name="X"
            path="icons/social/x.svg"
            redirect="https://x.com/allanrsomensi"
            className="p-1"
          />
        </div>
      </div>
    </div>
  );
}
