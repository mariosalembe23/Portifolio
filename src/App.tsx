import Header from "./components/Header";
import HardSkill from "./components/HardSkill";
import Projects from "./components/Projects";
import Contacts from "./components/Contact";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <main className="mt-52">
        <HardSkill />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
