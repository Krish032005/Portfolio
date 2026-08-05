import React from 'react'
import "../CSS/Skills.css";
const Skills = () => {
    
  return (
   

    <div className=' mt-10 px-10  w-full lg:flex gap-4'>

        {/* Education */}
        <div className='w-1/2  '>
            <h1 className='font-semibold text-4xl uppercase'>education</h1>

            <div className='px-4 mt-5'>
                <h1 className='uppercase text-2xl font-semibold text-red-500'>education</h1>
                <div className='flex justify-between mt-3'>
                    <p className='text-xl font-semibold'>Bsc in Information Technology</p>
                    <p className='font-semibold text-xl text-red-500'>2023-2026</p>
                </div>
                <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Mumbai University</p>
                <p className='font-semibold text-lg'>CGPA 8.90/10</p>
                </div>
            </div>

        </div>

        {/* Skills */}
        <div className='w-1/2  px-10'>
            <h1 className='uppercase font-semibold text-4xl'>Skills</h1>

            <div className='flex flex-wrap uppercase gap-6 mt-5' id='skills'>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>html/css</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>javascript</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>react</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>tailwind css</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>gsap</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>git & github</p>
                <p className='border-1 border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center'>sql</p>

            </div>
        </div>
        
    </div>

  
  )
}

export default Skills