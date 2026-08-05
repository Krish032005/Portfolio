import React from 'react'


const Navbar = () => {
  return (
    <div
    className='w-full bg-black  px-10 py-8'
    >
     <div className='flex justify-between items-center uppercase font-semibold text-xs
     lg:text-lg 
     md:text-xs 
     sm:text-xs
     '>

      <div>
        <h1 className='text-[#df4141]'>web designer</h1>
        <h1>digital creator</h1>
      </div>
      <div className='flex items-center '>
            <h1 className='mr-2'>available for freelance </h1>
             <div className='animate-pulse bg-red-600 rounded-full w-3 h-3'></div>
     </div>
     </div>

    <div className='w-full border-t-2 border-red-500 mt-[1.5rem]'></div>
    </div>
    )
}

export default Navbar


//  <div className='w-full bg-black'>

    // <div className='uppercase flex items-center justify-between font-semibold lg:text-lg md:text-xs sm:text-2xl'>
    //     <div>
    //         <h1 className='text-[#df4141]'>web designer</h1>
    //         <h1>digital creator</h1>
    //     </div>
    //     <div className='flex items-center '>
    //         <h1 className='mr-2'>available for freelance </h1>
    //         <div className='animate-pulse bg-red-600 rounded-full w-3 h-3'></div>
    //     </div>
    // </div>
    // <div className='w-full border-b-2 border-[#df4141] mt-4'></div>
    // </div>
 