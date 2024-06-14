import TheHeader from "../components/layout/TheHeader";
import Hero from "../components/sections/Hero";
import Card from "../components/common/Card";
import AboutMe from "../components/sections/AboutMe";

export default function Home() {
  return (
    <div>
      <title>Allan Somensi</title>
      <div className="overflow-hidden">
        <div className="relative flex flex-grow flex-col bg-gradient-to-b from-cyan-950 to-cyan-600 text-white min-h-screen">
          <TheHeader />
          <Hero />
        </div>
        <div className="bg-white p-10">
          <h1 className="text-3xl">Projetos</h1>
          <p className="text-lg">Veja todos os principais projetos:</p>
          <div
            id="projects"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center mt-6"
          >
            <Card
              title="site-pessoal"
              description="O site que você está acessando! :) Feito com NextJS e TailwindCSS."
              image="projects/site-pessoal.png"
            />
            <Card
              title="easy-ticket"
              description="Projeto API de tickets de suporte utilizando Django, autenticação JWT, grupos e permissões de usuários personalizadas."
              image="projects/easy-ticket.png"
            />
            <Card
              title="brother-snmp"
              description="Projeto para consulta de recursos em impressoras Brother utilizando o protocolo SNMP."
              image="projects/brother-snmp.png"
            />
            <Card
              title="rust-menu"
              description="Menu de console simples em Rust para treino e estudo da linguagem e lógica de programação."
              image="projects/rust-menu.png"
            />
          </div>
          <AboutMe className="mt-10" />
        </div>
      </div>
    </div>
  );
}
