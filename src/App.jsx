import React from 'react'
import Navbar from "./Components/Navbar";
import Center from './Components/Center';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className='w-full min-h-screen bg-black text-white '>
     <Navbar/>
     <Center/>
     {/* <Projects/>
     <Skills/>
     <Footer/> */}
    </div>
  )
}

export default App