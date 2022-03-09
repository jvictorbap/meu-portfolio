import React from 'react'
import AboutMe from '../components/AboutMe'
import Cover from '../components/Cover'
import Header from '../components/Header'
import MoreMe from '../components/MoreMe'
import ScrollDown from '../components/ScrollDown'

function Home() {

  return (
    <>
      <Cover anime='fade-down' duration='1000'>
        <Header />
        <AboutMe />
        <ScrollDown />
      </Cover>
      <Cover>
      <MoreMe />
      </Cover>
    </>
  )
}

export default Home