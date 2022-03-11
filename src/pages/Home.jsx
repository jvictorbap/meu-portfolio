import React from 'react'
import AboutMe from '../components/AboutMe'
import Cover from '../components/Cover'
import Header from '../components/Header'
import HelmetTitle from '../components/Helmet'
import MoreMe from '../components/MoreMe'
import Projects from '../components/Projects'
import Scroll from '../components/Scroll'
// import Contact from '../components/Contact'
import ScrollDown from '../components/ScrollDown'

function Home() {

  return (
    <>
      <HelmetTitle />
      <Scroll>
        <Cover anime='fade-down' duration='1000'>
          <Header />
          <AboutMe />
          <ScrollDown />
        </Cover>
        <MoreMe />
        <Projects />
        {/* <Contact /> */}
      </Scroll>
    </>
  )
}

export default Home