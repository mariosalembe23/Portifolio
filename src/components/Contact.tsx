import { Facebook, Instagram, Linkedin, AtSign, Phone } from "lucide-react";
import "../App.css";
import MyImage from "/img/me.jpg";
import Tippy from "@tippyjs/react";

export default function Contacts() {
  return (
    <section data-aos="fade-down"  data-aos-duration="1000" className="pt-28 pb-10 px-5">
      <header className="flex items-center justify-center relative">
        <h3 className="text-center bg-[#000] px-4 text-xl absolute font-medium text-zinc-200">
          Contacte-me
        </h3>
        <hr className=" bg-zinc-800 border-zinc-700 w-full" />
      </header>
      <div className="mt-6">
        <header>
          <img
            src={MyImage}
            alt="image_profile"
            className="w-20 h-20 ring-4 ring-zinc-200 mx-auto mt-20  rounded-full"
          />
          <div className="max-w-xl text-center pt-4 w-full m-auto">
            <p className="text-white">
              Caso precise bater um papo, alguma ajuda ou queira o meu
              contributo, estarei aberto para falarmos, podes encontrar-me nas
              redes sociais!
            </p>

            <div className="icons_group gap-5 pt-5 flex flex-wrap justify-center items-center">
              <Tippy content="Linkedin">
                <a
                  href="https://www.linkedin.com/in/m%C3%A1rio-salembe-5211792a6/"
                  className="w-11 transition-all bg-zinc-950 hover:ring-4 hover:ring-zinc-800 ring-opacity-25 border-zinc-800 h-11 border rounded-full flex items-center justify-center text-white"
                >
                  <Linkedin />
                </a>
              </Tippy>
              <Tippy content="Instagram">
                <a
                  href="https://www.instagram.com/mariosalembe_/"
                  className="w-11 transition-all bg-zinc-950 hover:ring-4 hover:ring-zinc-800 ring-opacity-25 border-zinc-800 h-11 border rounded-full flex items-center justify-center text-white"
                >
                  <Instagram />
                </a>
              </Tippy>
              <Tippy content="Facebook">
                <a
                  href="https://www.facebook.com/neymario.mario.54/"
                  className="w-11 transition-all bg-zinc-950 hover:ring-4 hover:ring-zinc-800 ring-opacity-25 border-zinc-800 h-11 border rounded-full flex items-center justify-center text-white"
                >
                  <Facebook />
                </a>
              </Tippy>
              <Tippy content="Email">
                <a
                  href="mailto:linomario199010@gmail.com"
                  className="w-11 transition-all bg-zinc-950 hover:ring-4 hover:ring-zinc-800 ring-opacity-25 border-zinc-800 h-11 border rounded-full flex items-center justify-center text-white"
                >
                  <AtSign />
                </a>
              </Tippy>
              <Tippy content="Telefone">
                <a
                  href="tel:+244938393388"
                  className="w-11 transition-all bg-zinc-950 hover:ring-4 hover:ring-zinc-800 ring-opacity-25 border-zinc-800 h-11 border rounded-full flex items-center justify-center text-white"
                >
                  <Phone />
                </a>
              </Tippy>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
