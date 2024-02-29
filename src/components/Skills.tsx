import Spring from '../assets/Spring.png';
import Python from '../assets/Python.png';
import BD from '../assets/BD.png'
import Front from '../assets/Front.png'

const Skills = () => {
  return (
    <div>
        <div className="pl-4 pr-4 bg-bgPattern">
        <h1 className="text-white text-4xl font-bold">Skills</h1>
        <div className="flex flex-col w-full">
            <div className="divider"/>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                    <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative" > 
                        <img src={Spring} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                        <div className="ml-4 mr-10">
                        <h1 className="text-4xl font-bold mb-6 text-center">Desenvolvimento em Java/Springboot</h1>
                        <p className="mb-6 text-justify">Inicialmente, quando entrei no curso, a linguagem que menos gostava era Java. Porém, ao estudar mais e me apaixonar pelo desenvolvimento Back-end percebi que Java era uma das, se não a melhor linguagem de programação para desenvolvimento Back-end. 
                        Com isso, iniciei meus estudos na linguagem e caí no SpringBoot e comecei a desenvolver com Spring desde então. Durante o meu 2º ano de faculdade, passei na prova de monitoria e comecei a dar monitoria de Programação Orientada a Objetos utilizando a linguagem Java.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative"> 
                    <img src={Python} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                    <div className="ml-4 mr-10">
                    <h1 className="text-4xl font-bold mb-6 text-center">Desenvolvimento em Python/Flask</h1>
                    <p className="mb-6 text-justify">Python foi a primeira linguagem de programação que tive contato. Durante alguns meses experimentei linguagens e vertentes novas de desenvolvimento como Front-end e Mobile. Porém, quando iniciei meus estudos mais aprofundados em Python, percebi que a linguagem era muito mais do que eu achei que fosse.
                    Fui convidado para trabalhar em um estágio onde a stack escolhida era Python através do Framework Flask integrado a um banco de dados não relacional MongoDB para desenvolvimento de uma API para um projeto da empresa.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-10">
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                    <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative" > 
                        <img src={BD} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                        <div className="ml-4 mr-10">
                        <h1 className="text-4xl font-bold mb-6 text-center ">Banco de Dados Relacionais</h1>
                        <p className="mb-6 text-justify ">Durante meus anos de desenvolvimento, seja em estágios ou na própria faculdade tive contato com alguns bancos de dados, sejam eles relacionais ou não relacionais. O primeiro banco de dados que tive experiência foi MySQL que usei na faculdade e posteriormente no estágio na prefeitura de Campina Grande. Outro banco de dados relacional que tive 
                        experiência foi o PostgreSQL que utilizei na faculdade e no desenvolvimento de micro serviços. Já o MongoDB, como citei acima utilizei no meu primeiro estágio.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="flex items-center justify-center">
                <div className="container mx-auto px-3 relative"> 
                <div className="flex flex-col lg:flex-row-reverse rounded-lg p-8 relative"> 
                    <img src={Front} className="max-w-full lg:max-w-sm rounded-lg lg:mr-8" />
                    <div className="ml-4 mr-10">
                    <h1 className="text-4xl font-bold mb-6 text-center">Desenvolvimento Front</h1>
                    <p className="mb-6 text-justify">Desenvolvimento Front-end é mais um hobby que uma stack escolhida por mim. Não me considero desenvolvedor Front-end nem FullStack. Porém, com o tempo é necessário contato e aprendizado em algumas tecnologias do front-end. Foi aí que comecei a estudar ReactJS e Tailwind CSS para fazer esse site, os repositórios de desenvolvimento deste site são encontrados no meu GitHub!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills
