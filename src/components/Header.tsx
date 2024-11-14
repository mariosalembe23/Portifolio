import Myself from "/img/me.jpg";
import LogoImage from "/img/logo_white.png";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Linkedin, Fingerprint, GitGraph, Users, Music2 } from "lucide-react";
import Prot from "/img/Macro_2.jpg";
import Prot1 from "/img/Macro_1.png";

const Navbar = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="flex items-center justify-between px-6 py-5">
      <div>
        <Tippy content="Linkedin">
          <a
            href="https://www.linkedin.com/in/m%C3%A1rio-salembe-5211792a6/"
            className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <Linkedin size={20} />
          </a>
        </Tippy>
      </div>
      <img src={LogoImage} alt="logo_image" className="w-8" />
      <div>
        <Tippy content="Github">
          <a
            href="https://github.com/mariosalembe23"
            className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800"
          >
            <GitGraph size={20} />
          </a>
        </Tippy>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header_container w-full bg-[url('/img/back.png')]">
      <div className="w-full h-full bg-gradient-to-b from-transparent to-[#000]">
        <Navbar />
        <section className="mt-32">
          <div data-aos="fade-down" data-aos-duration="1000" className="paisagem-tablet:w-6xl paisagem-tablet:p-0 p-4 w-full m-auto text-center">
            <div className="mb-6">
              <img
                src={Myself}
                alt="image_me"
                className="w-16 ring-4 ring-zinc-800 shadow-white m-auto h-16 rounded-full"
              />
            </div>
            <p className="text-zinc-300">
              DESIGNER UI/UX & DESENVOLVEDOR FRONTEND
            </p>
            <h1 className="paisagem-tablet:text-[7rem] retrato-tablet:text-5xl text-5xl leading-tight text-white font-semibold">
              Mário Salembe
            </h1>
            <div className="max-w-3xl pt-2  w-full m-auto">
              <p className="text-white">
                Hey, sou o Mário, um jovem apaixonado por tecnologia e inovação,
                sendo formado pela{" "}
                <a href="#" className="underline">
                  42 Luanda
                </a>{" "}
                em Engenharia de Software, apostando em ideias e projectos que
                possam ajudar outras pessoas nas suas tarefas ou actividades,
                bem como dando engajamento em comunidades de Desenvolvimento!
                Bem-vindo!
              </p>
            </div>
            <footer className="pt-5">
              <a
                href="https://github.com/mariosalembe23"
                className="flex m-auto transition-all hover:ring-0 justify-center px-4 bg-black w-60 py-2.5 font-medium rounded-lg ring-4 ring-zinc-800 ring-opacity-25 text-white items-center gap-3"
              >
                Visitar Github <GitGraph size={18} />
              </a>
            </footer>
          </div>
        </section>

        <section data-aos="fade-up" data-aos-duration="1000" className="valores m-auto max-w-7xl w-full gap-4 grid grid-cols-1 p-4 paisagem-tablet:grid-cols-3 mt-20">
          <div className="bg-gradient-to-b from-zinc-950 p-5 rounded-t-xl to-transparent">
            <header>
              <div className="w-8 h-8 rounded-full flex items-center justify-center  border border-zinc-600 bg-zinc-900">
                <Fingerprint size={22} className="text-white" />
              </div>
              <h2 className="text-white pt-7 text-xl">Sempre Aprendendo!</h2>
            </header>
            <p className="pt-2 text-[14px] text-white">
              Busco ser uma pessoa que corre atrás do conhecimento a tudo o que
              me interessa e que eu acho importante, não só para minha carreira
              como desenvolvedor mas também como pessoa!
            </p>
          </div>
          <div className="bg-gradient-to-b from-zinc-950 p-5 rounded-t-xl to-transparent">
            <header>
              <div className="w-8 h-8 rounded-full flex items-center justify-center  border border-zinc-600 bg-zinc-900">
                <Users size={21} className="text-white" />
              </div>
              <h2 className="text-white pt-7 text-xl">Espírito Colectivo!</h2>
            </header>
            <p className="pt-2 text-[14px] text-white">
              Por ser uma pessoa que gosta de fazer parte de comunidades de
              desenvolvimento, aprecio trabalho colectivo e estou aberto para
              projectos que impulsionem o desenvolvimento colectivo!
            </p>
          </div>
          <div className="bg-gradient-to-b from-zinc-950 p-5 rounded-t-xl to-transparent">
            <header>
              <div className="w-8 h-8 rounded-full flex items-center justify-center  border border-zinc-300 bg-zinc-900">
                <Music2 size={21} className="text-white" />
              </div>
              <h2 className="text-white pt-7 text-xl">Arte!</h2>
            </header>
            <p className="pt-2 text-[14px] text-white">
              Além de ser apaixonado por Tecnologia, sou uma pessoa que adora
              arte, principalmente a música, onde ajuda bastante para o
              equilíbrio neste grande stress da Programação!
            </p>
          </div>
        </section>

        <section className="prototype mt-28 max-w-6xl w-full m-auto grid grid-cols-1 p-4 paisagem-tablet:grid-cols-2 gap-6">
          <div data-aos="fade-right" data-aos-duration="1000" className=" relative">
            <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.9)]"></div>
            <img
              src={Prot}
              alt="prototipo_image_ui"
              className="rounded-t-xl object-fill w-full"
            />
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="relative">
            <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-b from-transparent to-[rgba(0,0,0,1)]"></div>
            <img src={Prot1} alt="prototipo_image_ui" className="rounded-t-xl" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
