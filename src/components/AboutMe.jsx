import React from 'react'
import TypeIt from "typeit-react";
import eu from "../images/profile-pic.png"
import ScrollDown from './ScrollDown';

function AboutMe() {
  return (
    // SOBRE MIM
    <div>
      <div id='sobremim' className='flex flex-col lg:flex-row justify-center items-center w-full margincenter'>
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
              <h1 className='text-5xl mb-8 text-center font-medium fonte aboutmetitle'>SOBRE MIM</h1>
            </TypeIt>
          </div>
          <img className='w-2/4 border-4 aboutmeimage border-quinary rounded-full ' src={eu} alt="" />
        </div>
        <div className='flex flex-wrap mt-6 items-center w-4/5 lg:p-10'>
          <p className='text-center sm:text-4xl text-2xl sobremim text-primary'>Olá, me chamo José Victor, tenho 20 anos, moro atualmente em
            Sobral e sou um desenvolvedor full-stack com foco em back-end. Sou apaixonado
            por tecnologia e por programação. Atualmente estou cursando Full
            Stack Web Development na Trybe.</p>
        </div>
      </div>
      <ScrollDown/>
    </div>
  )
}

export default AboutMe