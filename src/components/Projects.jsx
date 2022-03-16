import React from 'react'
import TypeIt from "typeit-react";

function Projects() {

  function qrCode(){
    window.location.href = "/qrcode"
  }

  function virusSearcher(){
    window.location.href = "/virussearcher"
  }

  return (
    <div id='projects' className='scroll 4 mt-16'>
      <TypeIt
        options={{
          speed: 100,
          cursor: false,
          waitUntilVisible: true,
        }}
      >
        <h1 className='text-5xl text-primary moremetitle text-center lg:text-6xl font-medium fonte'>PROJECTS</h1>
      </TypeIt>
      <div className='flex flex-col w-full xl:w-3/4 mx-auto'>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center bg-secondary mt-2 hvr-underline-from-center hover:scale-105 transition cursor-pointer' onClick={() => qrCode()}>
          <div className='w-4/4 xl:w-1/2 h-full'>
            <img src="https://i.imgur.com/qAsQkpp.png" alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col xl:w-3/5 justify-center items-center text-center p-2 h-full'>
            <p className='fonte'>Esse projeto foi feito com ReactJS e Tailwind.</p>
            <p className='fonte'>Basicamente esse sistema consome uma API externa que espera receber um link ou um texto e retorna uma imagem com a resposta, ou seja, um link ou um texto.</p>
            <p className='fonte'>A API é um serviço que retorna uma imagem, ou seja, um QRCODE.</p>
            <p className='fonte'>Ao escanear o QRCODE a pessoa é redirecionada para o link ou é exibido o texto com o conteudo passado.</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row xl:flex-row justify-center items-center bg-secondary mt-2 hvr-underline-from-center hover:scale-105 transition  mb-16 cursor-pointer' onClick={() => virusSearcher()}>
          <div className='w-4/4 xl:w-1/2 h-full'>
            <img src="https://i.imgur.com/yOdTZqi.png" alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col xl:w-3/5 justify-center items-center text-center p-2 h-full'>
            <p className='fonte'>Esse projeto foi feito com ReactJS e Tailwind.</p>
            <p className='fonte'>Basicamente esse sistema irá verificar se a URL informada pelo cliente possui alguma categoria de virus</p>
            <p className='fonte'>Feito com um backend e um frontend, o backend faz uma requisição para uma API externa que devolve uma resposta de 93 antivirus sobre a URL informada, o frontend popula todo o HTML com as 93 respostas devolvidas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects