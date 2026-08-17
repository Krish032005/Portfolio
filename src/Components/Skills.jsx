import React from 'react'
import "../CSS/Skills.css";
const Skills = () => {

    const skills = ["html & css", "javascript","react","gsap","tailwind","node.js","express.js","sql","mongodb","jwt","postman","token","git & github"];
    
  return (
   

    <div className=' md:px-10 px-4  pb-8 w-full h-full bg-black md:flex block gap-4'>

        {/* Education */}
        <div className='md:w-1/2 w-full '>
            <h1 className='md:text-start text-center font-semibold text-4xl uppercase'>
                education
            </h1>

            <div className='md:px-4 md:mb-0 mb-5 mt-5'>
                
                <div className='flex justify-between mt-3'>
                    <p className='md:text-xl text-sm font-semibold'>Bsc in Information Technology</p>
                    <p className='font-semibold md:text-xl text-sm text-red-500'>2023-2026</p>
                </div>
                <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm md:text-lg'>Mumbai University</p>
                <p className='font-semibold text-sm md:text-lg'>CGPA 8.90/10</p>
                </div>
            </div>
            <div className=' md:hidden border-b border-red-600 w-[90%] justify-self-center mb-5  '></div>
        </div>

        {/* Skills */}
        <div className='md:w-1/2 md:px-10 w-full px-0'>

            <h1 className='md:text-start text-center font-semibold text-4xl uppercase'>
                skills
            </h1>

            <div className='flex flex-wrap uppercase gap-6 mt-5 pl-4' id='skills'>
                {skills.map((elem, idx)=>(
                    <p className='border border-white font-semibold text-lg rounded-lg px-5 py-1 text-center h-10 items-center' key={idx} >{elem}</p>
                ))}

            </div>
        </div>
        
    </div>

  
  )
}

export default Skills