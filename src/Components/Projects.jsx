import React from 'react'
import "../CSS/Project.css";

const Projects = () => {
  return (
    <div className='w-full  bg-black px-10 py-8  mt-65'>

{/* Project section title */}
    <div className='flex justify-between items-center'  id="nav-head">

      <div><h1 className='uppercase font-semibold text-3xl'>selected projects</h1></div>

      <div className='border-t-2 border-amber-50 w-200'></div>

      <div className='flex items-center'>
        <h1 className='uppercase font-semibold text-lg '>view all projects</h1>
        <i class="ri-arrow-right-long-line font-extralight text-4xl ml-4 "></i>
      </div>

    </div>

{/* Projects Cards */}
   <div className='flex gap-13 mt-8'>

     <div className=' w-1/3 ' >  
      <div className=' border-3 border-[#333] w-full h-70'>
        <img src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D" alt=""  className='w-full h-full object-cover'/>
        </div>
      <div className='flex items-center justify-around mt-4'>
        <h1 className='text-[#f70a0a] font-semibold text-5xl ml-[-2rem]' id='number'>01</h1>
        <h1 className='font-bold text-2xl'>Globerra <p className='text-xl font-semibold'>AI- Trip planner</p></h1>
        <i class="ri-arrow-right-long-line font-extralight text-4xl "></i>
      </div>
    </div>

 <div className=' w-1/3 ' >  
      <div className=' border-3 border-[#333] w-full h-70'>
        <img src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D" alt=""  className='w-full h-full object-cover'/>
        </div>
      <div className='flex items-center justify-around mt-4'>
        <h1 className='text-[#f70a0a] font-semibold text-5xl ml-[-2rem]' id='number'>02</h1>
        <h1 className='font-bold text-2xl'>JobSphere <p className='text-xl font-semibold'>Recruitment & Job Management </p></h1>
        <i class="ri-arrow-right-long-line font-extralight text-4xl "></i>
      </div>
    </div>

     <div className=' w-1/3 ' >  
      <div className=' border-3 border-[#333] w-full h-70'>
        <img src="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D" alt=""  className='w-full h-full object-cover'/>
        </div>
      <div className='flex items-center justify-around mt-4'>
        <h1 className='text-[#f70a0a] font-semibold text-5xl ml-[-2rem]' id='number'>03</h1>
        <h1 className='font-bold text-2xl'>Globerra <p className='text-xl font-semibold'>AI- Trip planner</p></h1>
        <i class="ri-arrow-right-long-line font-extralight text-4xl "></i>
      </div>
    </div>
     
   </div>

<div className='border-b-2 border-red-600 w-full mt-10 '></div>
        </div>
  )
}

export default Projects