import "../App.css";
import Skills from "./Skill";

export default function HardSkill() {
  const cardData = [
    {
      title: "Javascript",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/js.svg",
    },
    {
      title: "Vue",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/vue.svg",
    },
    {
      title: "Figma",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/figma.svg",
    },
    {
      title: "Git",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/git.svg",
    },
    {
      title: "Bash",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/bash.svg",
    },
    {
      title: "TailwindCSS",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/tail.svg",
    },
    {
      title: "Typescript",
      backgroundColor: "bg-blue-200",
      pathIcon: "/icons/typescript.svg",
    },
    {
      title: "CSS",
      backgroundColor: "bg-purple-200",
      pathIcon: "/icons/css.svg",
    },
    {
      title: "HTML",
      backgroundColor: "bg-green-200",
      pathIcon: "/icons/html.svg",
    },
    {
      title: "C",
      backgroundColor: "bg-yellow-200",
      pathIcon: "/icons/c.svg",
    },
    {
      title: "Python",
      backgroundColor: "bg-red-200",
      pathIcon: "/icons/python.svg",
    },
    {
      title: "ReactJS",
      backgroundColor: "bg-orange-200",
      pathIcon: "/icons/react.svg",
    },
  ];
  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="pt-1 pb-10">
      <header className="px-5">
        <h3 className="text-center paisagem-tablet:text-6xl text-4xl text-white font-semibold">
          Hard Skills
        </h3>
        <div className="max-w-6xl w-full m-auto text-center pt-2">
          <p className="text-white">
            Durante meus estudos adquiri alguns conhecimentos que em questões
            técnicas chamamos de Hard Skills!
          </p>
        </div>
      </header>
      <Skills cardData={cardData} />
    </section>
  );
}
