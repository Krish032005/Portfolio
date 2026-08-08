import React from 'react'
import Hero from '../assets/hero.png'
import profile from '../assets/Profile4.png'

const Demo = () => {
  return (
    <div className=' bg-black w-full md:h-250 h-120 z-10  relative px-10'>
       <div className='absolute  left-1/2 -translate-x-1/2 
          md:w-150 md:h-150 w-80 h-80 bg-red-600/30
          rounded-full md:blur-[150px] blur-[80px] '>
        </div> 

         <h1 className='uppercase -z-10 absolute  md:left-[50.6%] left-[54%] -translate-x-1/2 
          md:text-red-600/90 text-red-800
          md:mt-8 mt-4
          whitespace-nowrap
          tracking-tight
          font-black
          '
          id='main-head'>
            portfolio
        </h1>

        <div className='bg-[#111]   w-[90%] 
        left-1/2 -translate-x-1/2  md:h-60 h-40 absolute md:bottom-40 bottom-40
         md:blur-[150px] blur-[100px]
        sm:-mt-10'></div>

       <div className='hidden md:block z-100 '>
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
            <div className=' absolute right-0 bottom-30 w-70   '>
       
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

         <div className='md:hidden  z-100 '>

            {/* Image  */}
            <div className='absolute top-10 left-1/2 -translate-x-1/2 '>
                <img src={profile} alt=""  className='w- h-'/>
            </div>

            {/* Left Text */}
         <div className='absolute px-4  w-30 bottom-45 left-0 '>
         
             <h1 className='text-xl'
             id='second-text'>
               Hello I'm</h1>

             <h1 className='text-xl font-extrabold uppercase tracking-tight '
             id='second-name'
             >krish</h1>
             <h1 className='uppercase text-xl font-extrabold tracking-tight mt-1'
             id='second-name'
             >mehta</h1>

             <h3 className='text-red-500 font-semibold text-lg mt-1'>Frontend</h3>
            <h3 className='text-red-500 font-semibold text-lg -mt-2'>Developer</h3>
             

         </div>
          
       
        </div> 

</div>
  )
}

export default Demo