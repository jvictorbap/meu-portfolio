import React from 'react'
import TypeIt from "typeit-react";

function Projects() {

  function qrCode(){
    window.location.href = "/qrcode"
  }

  return (
    <div id='projects' className='scroll 4'>
      <TypeIt
        options={{
          speed: 100,
          cursor: false,
          waitUntilVisible: true,
        }}
      >
        <h1 className='text-5xl text-primary moremetitle text-center lg:text-6xl font-medium fonte'>PROJECTS</h1>
      </TypeIt>
      <div className='flex flex-col w-4/5 h-screen mx-auto'>
        <div data-aos="flip-up" data-aos-delay="300" className='flex justify-center items-center mx-auto w-3/4 bg-secondary h-[40%] mt-2 hvr-underline-from-center hover:scale-105 transition cursor-pointer' onClick={() => qrCode()}>
          <div className='w-1/2 h-full'>
            <img src="https://i.imgur.com/qAsQkpp.png" alt="" className='w-full h-full' />
          </div>
          <div className='flex flex-col justify-center items-center text-center p-2 w-1/2 h-full'>
            <p className='fonte'>Esse projeto foi feito em ReactJS e Tailwind.</p>
            <p className='fonte'>Basicamente ele consome uma API externa que espera receber um link ou um texto</p>
            <p className='fonte'>e retorna uma imagem com a resposta, ou seja, um link ou um texto.</p>
            <p className='fonte'>A API é um serviço que retorna uma imagem, ou seja, um QRCODE.</p>
            <p className='fonte'>Ao escanear o QRCODE a pessoa é redirecionada para o link ou é exibido o texto com o conteudo passado.</p>
          </div>
        </div>
        {/* <div className='flex justify-center items-center mx-auto w-3/4 border-2 border-quinary bg-secondary h-[40%] mt-2'>
            <h3>Em construção</h3>
          </div> */}
      </div>
    </div>
  )
}

export default Projects