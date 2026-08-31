import React from 'react'
import Navbar from './Navbar'
import Demo from './Demo'
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'

const Home = () => {
  return (
     <div className='w-full min-h-screen bg-black  text-white '>
        <Navbar/>
        <Demo/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Home