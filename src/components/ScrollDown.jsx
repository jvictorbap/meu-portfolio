import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function ScrollDown() {
  return (
    // Scroll Down
    <div id='scrolldown' className='mt-12 animate-bounce flex flex-col items-center w-full'>
      <p className='fonte'>DESLIZE PARA BAIXO</p>
      <a href='#portfolio' className='text-primary text-5xl'>
        <FontAwesomeIcon id='icone' className='mt-2' icon={faAngleDoubleDown} />
      </a>
    </div>
  )
}

export default ScrollDown