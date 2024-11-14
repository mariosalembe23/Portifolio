import { AppWindowMac } from "lucide-react";
import React from "react";

const CardProject: React.FC<{ title: string; text: string; url: string }> = ({
  title,
  text,
  url,
}) => {
  return (
    <div className="bg-zinc-950 rounded-lg relative">
      <header className="p-3 inline-flex rounded-br-xl bg-[#000]">
        <AppWindowMac className="text-white" />
      </header>
      <div className="p-5 mb-10">
        <h4 className="text-white text-xl">{title}</h4>
        <p className="text-white text-[13px] pt-3">{text}</p>
      </div>
      <footer className="mt-5 absolute bottom-0">
        <a
          href={url}
          className="bg-[#000] text-white px-5 text-[15px] transition-all hover:text-opacity-25 py-3 rounded-r-xl"
        >
          Website
        </a>
      </footer>
    </div>
  );
};

const Projects = () => {
  return (
    <section data-aos="fade-down" data-aos-duration="1000" className="mt-28 mb-10">
      <header className="flex items-center justify-center relative">
        <h3 className="text-center bg-[#000] px-4 text-xl absolute font-medium text-zinc-200">
          Projectos Destacados
        </h3>
        <hr className=" bg-zinc-800 border-zinc-700 w-full" />
      </header>

      <div className="mt-28 p-4 max-w-7xl w-full m-auto grid retrato-tablet:grid-cols-2 grid-cols-1 paisagem-tablet:grid-cols-4 gap-4">
        <CardProject
          title="Shoprite Angola"
          text="Um projecto onde refiz a interface do website da empresa Shoprite de Angola, entretanto com as minhas ideias e como os componentes estariam dispostos!"
          url="https://shoprite-clone.vercel.app/"
        />
        <CardProject
          title="API Dashboard"
          text="Neste projecto uso valores estáticos de uma funcionalidade do github - github gists - onde consumo esses dados e carrego as informações no dashboard!"
          url="https://dashboard-beryl-phi.vercel.app/"
        />
        <CardProject
          title="42 Luanda"
          text="Um projecto onde refiz a interface do website da escola Internacional 42 Luanda, entretanto com as minhas ideias e como os componentes estariam dispostos!"
          url="https://mariosalembe23.github.io/42Luanda-UI/UI/dark.html"
        />
        <CardProject
          title="ASK - Jogo de perguntas"
          text="Ask, desafiei-me a criar um jogo de perguntas para testar meus conhecimentos em VueJS, tente ganhar o máximo de dinheiro!"
          url="https://ask-one.vercel.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
