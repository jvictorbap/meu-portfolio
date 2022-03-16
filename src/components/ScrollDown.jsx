import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { divContext } from './context/Store';

function ScrollDown() {

  const div = useContext(divContext)

  function scrollTo() {
    if (div.div === 0){
      div.div = 1
      document.getElementById('front').scrollIntoView({ behavior: 'smooth' })
    } else if (div.div === 1){
      div.div = 2
      document.getElementById('back').scrollIntoView({ behavior: 'smooth' })
    } else {
      div.div = 3
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id='scrolldown' className='hidden xl:flex animate-bounce flex-col items-center'>
      <p className='fonte'>Scroll Down</p>
      <a className='text-primary text-5xl cursor-pointer' onClick={() => scrollTo()}>
        <FontAwesomeIcon className='mt-2' icon={faAngleDoubleDown} />
      </a>
    </div>
  )
}

export default ScrollDown