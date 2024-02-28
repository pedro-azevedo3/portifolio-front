import Eu from '../../assets/Eu.png';

const About = () => {
  return (
    <div className="bg-bgPattern">
      <div className="hero min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row bg-componentColor rounded-lg shadow-2xl p-8">
            <img src={Eu} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
            <div className="text-justify">
              <h1 className="text-4xl font-bold mb-6">Desenvolvedor Back-end</h1>
              <p className="mb-6">Olá, meu nome é Pedro! Tenho 20 anos, e sou desenvolvedor back-end! Ao longo desse site você encontrará informações sobre minha carreira, 
                sinta-se livre para me contar um pouco sobre suas ideias clicando no botão fale comigo!</p>
              <button className="btn btn-primary bg-customBlue">FALE COMIGO</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
