/* eslint-disable getter-return */
import React, { useCallback, useEffect, useState } from 'react'
import TypeIt from "typeit-react";
import FrontItem from './FrontItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

function MoreMe() {

  function preventDefault(e) {
    e.preventDefault();
  }

  let supportsPassive = false;
  try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: () => { supportsPassive = true; }
    }));
  } catch (e) { }
  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

  const divNode = document.getElementsByClassName('scroll')

  function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  }

  React.useEffect(() => {
    disableScroll();
    let div = 0;
    document.body.addEventListener('wheel', async (event) => {
      if (String(event.deltaY).startsWith('-')) {
        div = div - 1
      } else {
        div = div + 1
      }
      if (div < 0 || div > divNode.length - 1) {
        div = 0 
      }
      divNode[div].scrollIntoView({ behavior: 'smooth' })
    })
  })


  return (
    <div className='flex flex-col justify-center items-center bg-secondary'>
      <div className=''>
        <TypeIt
          options={{
            speed: 100,
            cursor: false,
            waitUntilVisible: true,
          }}
        >
          <h1 className='text-5xl text-primary moremetitle text-center lg:text-6xl font-medium fonte'>TECHNOLOGIES</h1>
        </TypeIt>
      </div>
      <div className='flex flex-col justify-center items-center h-full w-full'>
        <div id="front" className='scroll h-screen flex w-full margincenter 1'>
          <div className='flex justify-center items-center w-full'>
            <div className='flex w-2/4 h-full justify-center items-center'>
              <img src="https://www.mynerdlifebr.com.br/wp-content/uploads/2020/08/2020-08-26-back-front-end-2.png" alt='teaching' className='w-3/5' />
            </div>
            <div className='flex-col w-2/4'>
              <div className='flex justify-center mx-auto w-2/4'>
                <h1 className='text-6xl text-primary border-b-2 border-quinary text-center fonte'>Front End</h1>
              </div>
              <div className='flex flex-col justify-center items-center w-1/4 mx-auto mt-2'>
                <FrontItem img="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png" text="HTML" />
                <FrontItem img="https://terminalroot.com.br/assets/img/css/css.png" text="CSS" />
                <FrontItem img="https://bognarjunior.files.wordpress.com/2018/01/1crcyaithv7aiqh1z93v99q.png" text="JavaScript" />
                <FrontItem img="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" text="React.JS" />
                <FrontItem img="https://cdn.iconscout.com/icon/free/png-256/redux-3772327-3151453.png" text="Redux" />
                <FrontItem img="https://testing-library.com/img/octopus-128x128.png" text="TDD - RTL" />
              </div>
              <div>
                <div className='flex flex-col justify-center mx-auto w-2/4'>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Experiência trabalhando com frameworks.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Experiência realizando deploy de front-end.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Construindo aplicações responsivas.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Usando Design Patterns modernos.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Realizando testes de usuabilidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll h-screen flex w-full margincenter 2'>
          <div className='flex justify-center items-center w-full'>
            <div className='flex w-2/4 h-full justify-center items-center'>
              <img src="https://www.getsetgoweb.com/assets/images/backend-devlopement/back-end-development.png" alt='teaching' className='w-3/5' />
            </div>
            <div className='w-2/4'>
              <div className='flex justify-center mx-auto w-2/4'>
                <h1 className='text-6xl text-primary border-b-2 border-tertiary text-center fonte'>Back End</h1>
              </div>
              <div className='flex flex-col justify-center items-center w-1/4 mx-auto mt-2'>
                <FrontItem img="https://findicons.com/files/icons/2420/coded/256/sql.png" text="SQL" />
                <FrontItem img="https://api.civo.com/k3s-marketplace/mongodb.png" text="NoSQL" />
                <FrontItem img="https://cyb3rd.github.io/img/expressjs.png" text="Express" />
                <FrontItem img="https://miro.medium.com/max/475/0*DiQd7JoB2X5C_Bng.png" text="TDD" />
                <FrontItem img="https://yosoy.dev/wp-content/uploads/2014/09/orm.png" text="ORM" />
                <FrontItem img="https://programathor.com.br/blog/wp-content/uploads/2018/08/api-768x768.png" text="API RESTful" />
              </div>
              <div>
                <div className='flex flex-col justify-center mx-auto w-2/4'>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Experiência trabalhando com frameworks.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Experiência realizando deploy de back-end.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Construindo aplicações escalaveis.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Usando Design Patterns modernos.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte'>Realizando testes de integração.</p>
                  </div>
                  <div className='flex items-center justify-center h-10 gap-2'>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <p className='fonte text-center'>Utilizando CI/CD (integração e entrega continua).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='scroll h-screen flex 3'>
          <div className='flex justify-center items-center'>
            <div className='w-2/4'>
              <img src={backend} alt='teaching' className='w-full h-full' />
            </div>
            <div className='w-2/4'>
              <h1>Oi</h1>
            </div>
          </div>
        </div> */}
      </div>
    </div >
  )
}

export default MoreMe