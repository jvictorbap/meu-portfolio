import React from 'react'
import TypeIt from "typeit-react";

function MoreMe() {
  return (
    <div className='h-20 flex justify-center items-center'>
      <TypeIt
        options={{
          speed: 100,
          cursor: false,
          waitUntilVisible: true,
        }}
      >
        <h1 className='text-5xl text-secondary moremetitle mb-8 text-center lg:text-6xl font-medium fonte'>EM CONSTRUÇÃO!!</h1>
      </TypeIt>
    </div>
  )
}

export default MoreMe