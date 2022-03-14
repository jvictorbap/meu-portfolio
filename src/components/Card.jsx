import React from 'react'

function Card(props) {
  const data = props.data
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="scroll h-36 flex flex-col bg-test rounded-xl justify-between basis-1/6 fonte" key={index}>
              <h2 className='text-red text-xl'>{item[0]}</h2>
              {item[1].detected ? <p className='text-red'>{`Virus: positivo`}</p> : <p className='text-quinary'>{`Virus: negativo`}</p>}
              <p className='text-primary bg-secondary'>{item[1].result}</p>
          </div>
        )
      })}
      {setTimeout(() => {
        document.getElementsByClassName('scroll')[1].scrollIntoView({ behavior: 'smooth' })
      }, 500)}
    </>
  )
}

export default Card