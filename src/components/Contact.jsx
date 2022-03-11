import React from 'react'
import TypeIt from "typeit-react";

function Contact() {
  return (
    <div>
      <TypeIt
        options={{
          speed: 100,
          cursor: false,
          waitUntilVisible: true,
        }}
      >
        <h1 className='text-5xl text-primary moremetitle text-center lg:text-6xl font-medium fonte'>CONTACT</h1>
      </TypeIt>
      <div className='scroll 5'>

      </div>
    </div>
  )
}

export default Contact