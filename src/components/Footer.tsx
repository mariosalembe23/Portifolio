import "../App.css";
import LogoImage from "/img/logo_white.png";
export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-transparent to-zinc-900 p-5 mt-9">
      <div className="max-w-6xl w-full m-auto items-center gap-5 flex retrato-tablet:flex-row flex-col justify-center  retrato-tablet:justify-between">
        <div>
          <img src={LogoImage} className="w-6" alt="logo_image" />
        </div>
        <div>
          <p className="text-white">&copy; Mário Salembe - 2024</p>
        </div>
      </div>
    </footer>
  );
}
