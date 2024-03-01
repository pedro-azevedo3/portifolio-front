import React from 'react';
import pedroca from '../assets/pedroca.png';
import eu2 from '../assets/eu2.png';

interface ProjectProps {
    id: string;
}

const AboutMe: React.FC<ProjectProps> = ({id}) => {
  return (
    <div>
        <div id={id} className="pl-4 pr-4 bg-bgPattern">
        <h1 className="text-white text-4xl font-bold">Sobre Mim</h1>
        <div className="flex flex-col w-full">
            <div className="divider"/>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                    <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative" > 
                        <img src={pedroca} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                        <div className="text-justify ml-4 mr-10">
                        <h1 className="text-4xl font-bold mb-6">Como tudo começou</h1>
                        <p className="mb-6">Desde pequeno tive contato com computadores graças ao meu pai que sempre foi um entusiasta da área. Com o passar dos anos pensei em fazer um curso que fosse voltado a área de computação e programação, e ao conhecer o curso de Sistemas de Informação me apaixonei pela área.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                <div className="flex flex-col lg:flex-row rounded-lg p-8 relative"> 
                    <img src={eu2} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                    <div className="text-justify ml-4 mr-10">
                    <h1 className="text-4xl font-bold mb-6">Estágios</h1>
                    <p className="mb-6">Tive experiências em duas empresas trabalhando como estagiário. Na primeira - Video Streaming Inc - trabalhei como desenvolvedor estagiário back-end, nela que desenvolvi a API Python com Flask e MongoDB, ao todo minha experiência foi de 3 meses. Posteriormente, 
                    fui aceito para trabalhar na SECTI (Secretaria de Ciência Tecnologia e Inovação) da cidade de Campina Grande. Lá atuei como desenvolvedor e professor de programação no programa Lan House Social ofertado pela SECTI.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutMe
