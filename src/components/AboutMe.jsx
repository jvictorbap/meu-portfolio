import React from 'react'
import TypeIt from "typeit-react";


function AboutMe() {
  return (
    // SOBRE MIM
    <div id='sobremim' className='z-10 flex flex-col lg:flex-row justify-center items-center w-5/6 margincenter teste'>
      {/* SOBRE MIM TITULO + IMAGEM */}
      <div className='flex mt-6 justify-center items-center w-2/4 flex-col'>
      <div className='w-full h-24'>
      <TypeIt
        options={{
          speed: 100,
          startDelay: 1000,
          cursor: false,
          loop: true,
          loopDelay: 3000,
          deleteSpeed: 200,
        }}
      >
        <h1 className='text-5xl mb-8 text-center lg:text-6xl font-medium fonte aboutmetitle'>SOBRE MIM</h1>
      </TypeIt>
      </div>
        <img className='w-80' src='https://cdn-icons-png.flaticon.com/512/1488/1488581.png' alt="" />
      </div>
      {/* TEXTO */}
      <div className='flex mt-6 items-center w-full lg:w-2/4'>
        <p className='text-5xl text-center sobremim text-primary'>Olá, me chamo José Victor, tenho 20 anos, moro atualmente em
          Sobral-CE e sou um desenvolvedor full-stack com foco em back-end. Sou apaixonado
          por tecnologia e por programação. Atualmente estou cursando Full
          Stack Web Development na Trybe.</p>
      </div>
    </div>
  )
}

export default AboutMe