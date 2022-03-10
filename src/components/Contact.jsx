import React from 'react'

function Contact() {
  return (
    <div className='scroll 5'>
      <TypeIt
        options={{
          speed: 100,
          cursor: false,
          waitUntilVisible: true,
        }}
      >
        <h1 className='text-5xl text-primary moremetitle text-center lg:text-6xl font-medium fonte'>CONTACT</h1>
      </TypeIt>
    </div>
  )
}

export default Contact