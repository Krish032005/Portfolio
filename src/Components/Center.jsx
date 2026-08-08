import React from 'react'
import "../CSS/Center.css"
import Hero from '../assets/hero.png'
import profile from '../assets/Profile4.png'
const Center = () => {
  return (
   <div className='w-full min-h-screen bg-black  relative px-10 md:-mt-8 -mt-4 '>

    
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-150 h-150 bg-red-600/30
          rounded-full blur-[180px] '>
    </div> 

    <h1 className='uppercase absolute top-1/2 md:left-[50.6%] left-[53%] -translate-x-1/2 -translate-y-1/2
          md:text-red-600/90 text-red-800
          md:mt-10 -mt-35
          whitespace-nowrap
          tracking-tight
          font-black
          '
          id='main-head'>
            portfolio
      </h1>

   <div className='bg-[#111] z-1 w-[90%] h-50 absolute bottom-0  sm:-mt-10'></div>

 <div className='z-10 '>
   {/* Left Text */}
         <div className='absolute px-4 w-[350px] top-[340px]'>
         
             <h1 className='text-8xl'
             id='second-text'>
               Hello I'm</h1>

             <h1 className='text-8xl font-extrabold uppercase tracking-tight mt-5'
             id='second-name'
             >krish</h1>
             <h1 className='uppercase text-8xl font-extrabold tracking-tight mt-10'
             id='second-name'
             >mehta</h1>

             <h3 className='text-red-500 font-semibold text-4xl mt-10'>Frontend Developer</h3>
             <p className='text-xl'>
             I design and develop interactive web experiences using
             React, Tailwind CSS and GSAP with a strong focus on clean
             UI, performance and animations.
             </p>

         </div>

         {/* Image  */}
         <div className='absolute top-[160px] left-1/2 -translate-x-1/2 '>
           <img src={profile} alt=""  className='w-180 h-200'/>
         </div>
     {/* Right Text */}
     <div className=' absolute right-0 bottom-[-180px] w-70   '>

       <div className='flex  justify-center items-center mb-5'>
         <h1 className='text-red-600 font-bold text-2xl mr-2'>8+ </h1>
         <p className='uppercase font-semibold text-xl'>projects built</p>
         </div>
           <div className='border-b-2 border-amber-50 mb-5 mx-8'></div>

         <div className='flex items-center justify-center '>
         <h1 className='text-red-600 font-bold text-2xl mr-2'>5+ </h1>
         <p className='uppercase font-bold text-xl'>technologies</p>
         </div>
      </div>

 </div> 
  
<div className='absolute bottom-[-320px] border-b border-red-500 w-[95%] ml-'></div>
   </div>
  )
}



export default Center