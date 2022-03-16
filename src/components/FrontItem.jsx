import React from 'react'

function FrontItem(props) {
  return (
    <div className='front-items'>
      <img src={props.img} className='w-10' alt="" />
      <h1 className='text-xl fonte'>{props.text}</h1>
    </div>
  )
}

export default FrontItem