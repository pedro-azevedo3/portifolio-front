import React from 'react';
import microservices from '../assets/microservices.png';
import api from '../assets/api.png';

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id}>
        <div className="pl-4 pr-4 bg-bgPattern">
        <h1 className="text-white text-4xl font-bold">Meus projetos</h1>
        <div className="flex flex-col w-full">
            <div className="divider"/>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                    <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative" > 
                        <img src={microservices} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                        <div className="text-justify ml-4 mr-10">
                        <h1 className="text-4xl font-bold mb-6 text-center">Desenvolvimento de Micro Serviços</h1>
                        <p className="mb-6">Na faculdade, eu e meu grupo decidimos criar alguns micro serviços para ajudar nas entregas que teríamos que desenvolver futuramente no curso. Foi aí que tive a oportunidade de contribuir para a construção de um microserviço dedicado ao envio de e-mails integrado com a API do Google,
                        utilizando as robustas ferramentas oferecidas pelo ecossistema SpringBoot. Esta experiência foi muito positiva para mim, pois consegui aprender conhecimentos valiosos sobre a arquitetura de microservices e suas vantagens em termos de escalabilidade, manutenção e implementação ágil.</p>
                        <button className="btn btn-outline btn-info">Repositório</button>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                <div className="flex flex-col lg:flex-row rounded-lg p-8 relative"> 
                    <img src={api} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                    <div className="text-justify ml-4 mr-10">
                    <h1 className="text-4xl font-bold mb-6 text-center">Desenvolvimento Back-end Java e Python</h1>
                    <p className="mb-6">Tenho experiência desenvolvendo API's back-end com Java (SpringBoot) e Python(Flask), desenvolvi a API de envio e recebimento de PDF's e Emails em um projeto em meu último estágio utilizando o Framework Flask e o Banco de Dados MongoDB. Infelizmente o repositório desse projeto é privado.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Project;
