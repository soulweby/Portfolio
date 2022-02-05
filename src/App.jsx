import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portfolio/Portfolio";
import Projet from "./components/projet/Projet";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portofolio/>
        <Projet/>
        <Skills/>
        <Contact/>
      </div>

    </div>
  );
}

export default App;
