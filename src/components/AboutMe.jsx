import React from 'react'

function AboutMe() {
  return (
    // SOBRE MIM
    <div id='sobremim' className='flex flex-col lg:flex-row justify-center items-center w-5/6 margincenter'>
      {/* SOBRE MIM TITULO + IMAGEM */}
      <div className='flex mt-6 justify-center items-center w-2/4 flex-col'>
        <h1 className='text-5xl mb-8 text-center lg:text-6xl font-medium fonte aboutmetitle'>SOBRE MIM</h1>
        <img className='w-80' src='https://cdn-icons-png.flaticon.com/512/1488/1488581.png' alt="" />
      </div>
      {/* TEXTO */}
      <div className='flex mt-6 items-center w-full lg:w-2/4'>
        <p className='text-5xl text-center sobremim text-primary'>Olá, me chamo José Victor, tenho 20 anos, moro atualmente em
          Sobral-CE e sou um desenvolvedor full-stack junior. Sou apaixonado
          por tecnologia e por programação. Atualmente estou cursando Full
          Stack Web Development na Trybe.</p>
      </div>
    </div>
  )
}

export default AboutMe