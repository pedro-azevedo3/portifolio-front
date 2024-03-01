import React from 'react';

interface ProjectProps {
    id: string;
}

const Speak: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id={id}>
      <div className="pl-4 pr-4 bg-bgPattern pb-10">
        <h1 className="text-white text-4xl font-bold">Fale Comigo</h1>
        <div className="flex flex-col w-full">
            <div className="divider"/>
            <h3 className="text-white text-1xl pb-20">Entre em contato comigo! Preencha o formulário que receberei sua mensagem graças a uma API que desenvolvi!</h3>
        </div>
            <div className="flex flex-col items-center space-y-3">
            <h1 className="text-white text-4xl font-bold pb-5">Preencha o Formulário!👇🏻</h1>
                <h3 className="text-white text-1xl font-bold">Email</h3>
                <label className="input input-bordered flex items-center gap-2 mx-10" style={{ minWidth: '450px' }}>
                    <input type="text" className="grow" placeholder="Digite seu email:" />
                </label>
                <h3 className="text-white text-1xl font-bold">Nome</h3>
                <label className="input input-bordered flex items-center gap-2 mx-10" style={{ minWidth: '450px' }}>
                    <input type="text" className="grow" placeholder="Digite seu nome: " />
                </label>
                <h3 className="text-white text-1xl font-bold">Mensagem</h3>
                <label className="input input-bordered flex items-center gap-2 mx-10" style={{ minWidth: '450px' }}>
                    <input type="text" className="grow" placeholder="Digite sua mensagem: "/>
                </label>
                <button className="btn btn-outline btn-info  items-center">Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Speak
