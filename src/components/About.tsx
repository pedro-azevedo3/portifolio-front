import Eu from '../assets/Eu.png';
import { scrollToSection } from '../App';

interface ProjectProps {
  id: string;
}

const About: React.FC<ProjectProps> = ({id}) =>{
  return (
    <div id={id} className="bg-bgPattern">
      <div className="hero min-h-screen flex items-center justify-center"> {/* Ajustei a classe min-h-screen */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-componentColor rounded-lg shadow-2xl p-8">
            <img src={Eu} className="max-w-full lg:max-w-96 rounded-lg lg:mr-16" />
            <div className="text-justify">
              <h1 className="text-4xl font-bold mb-6">Desenvolvedor Back-end</h1>
              <p className="mb-6">Olá, meu nome é Pedro! Tenho 20 anos, e sou desenvolvedor back-end! Ao longo desse site você encontrará informações sobre minha carreira, 
                sinta-se livre para me contar um pouco sobre suas ideias clicando no botão fale comigo!</p>
              <button className="btn btn-outline btn-info" onClick={() => scrollToSection('Footer')}>FALE COMIGO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
