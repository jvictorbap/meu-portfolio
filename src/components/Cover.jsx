import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cover(props) {
  // data-aos={props.anime} data-aos-duration={props.duration}
  // data-aos="fade-down" data-aos-duration="1000"
  AOS.init();
  return (
    <div id='cover' data-aos={props.anime} data-aos-duration={props.duration} className='h-screen bg-secondary'>{props.children}
    </div>
  )
}

export default Cover