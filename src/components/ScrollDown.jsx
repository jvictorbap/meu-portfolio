import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

function ScrollDown() {
  return (
    // Scroll Down
    <div id='scrolldown' className='absolute bottom-5 flex flex-col items-center margincenter w-full'>
      <p className='fonte'>DESLIZE PARA BAIXO</p>
      <a href='#portfolio' className='text-primary text-5xl'>
      <FontAwesomeIcon icon={faAngleDoubleDown} />
      </a>
    </div>
  )
}

export default ScrollDown