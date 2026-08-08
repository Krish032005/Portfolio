import React from 'react'
import Navbar from "./Components/Navbar";
import Center from './Components/Center';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Demo from './Components/Demo';
import DemoFooter from './Components/DemoFooter';
const App = () => {
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

export default App