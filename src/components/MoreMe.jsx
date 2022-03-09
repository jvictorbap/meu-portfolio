/* eslint-disable getter-return */
import React, { useCallback, useEffect, useState } from 'react'
import TypeIt from "typeit-react";
import backend from '../images/undraw_teaching_re_g7e3.svg'
import frontend from '../images/undraw_building_blocks_re_rwls.svg'

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
      div = div + 1
      if (div > divNode.length - 1) {
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
        <div className='scroll h-screen flex w-full margincenter 1'>
          <div className='flex justify-center items-center w-full'>
            <div className='flex w-2/4 h-full justify-center items-center'>
              <img src={frontend} alt='teaching' className='w-full h-full' />
            </div>
            <div className='flex w-2/4 h-full justify-center items-center'>
              <div>
                <TypeIt
                  options={{
                    speed: 100,
                    cursor: false,
                    waitUntilVisible: true,
                  }}
                >
                  <h1 className='text-6xl text-primary border-b-2 border-quinary text-center fonte'>Front End</h1>
                </TypeIt>
              </div>
            </div>
          </div>
        </div>
        <div className='scroll h-screen flex 2'>
          <div className='flex justify-center items-center'>
            <div className='w-2/4'>
              <img src={backend} alt='teaching' className='w-full h-full' />
            </div>
            <div className='w-2/4'>
              <h1>Oi</h1>
            </div>
          </div>
        </div>
        <div className='scroll h-screen flex 3'>
          <div className='flex justify-center items-center'>
            <div className='w-2/4'>
              <img src={backend} alt='teaching' className='w-full h-full' />
            </div>
            <div className='w-2/4'>
              <h1>Oi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreMe