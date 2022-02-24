import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Cover(props) {
  AOS.init();
  return (
    <div id='cover' data-aos="fade-down" data-aos-duration="1000" className='Cover bg-secondary'>{props.children}</div>
  )
}

export default Cover