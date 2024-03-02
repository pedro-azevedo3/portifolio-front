import logo from '../assets/logo.png';
import { scrollToSection } from '../App';

const Nav = () => {
  return (
    <div className="navbar bg-black fixed top-0 left-0 w-full z-10">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="Sua Logo" className="h-8 w-auto" onClick={() => scrollToSection('About')} />
        </a>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost mr-5 w-full" onClick={() => scrollToSection('MyProjects')}>
          PROJETOS
        </button>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost mr-5 w-full" onClick={() => scrollToSection('AboutMe')}>
          SOBRE MIM
        </button>
      </div>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost mr-5 w-full" onClick={() => scrollToSection('Skills')}>
          SKILLS
        </button>
      </div>
      
      {/*<div className="flex-none">
        <button className="btn btn-square btn-ghost mr-5 w-full" onClick={() => scrollToSection('Speak')}>
          FALE COMIGO
        </button>
      </div>*/}

      <div className="flex-none">
        <button className="btn btn-square btn-ghost mr-5 w-full" onClick={() => scrollToSection('Footer')}>
          CONTATO
        </button>
      </div>
    </div>
  );
}

export default Nav;
