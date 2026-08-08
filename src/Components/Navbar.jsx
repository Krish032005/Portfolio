import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='w-full bg-black  md:px-10 md:py-8   p-4 '>

      <div className='flex justify-between items-center uppercase font-semibold text-xs md:text-lg '>
        <div>
          <h1 className='text-[#df4141]'>web designer</h1>
          <h1>digital creator</h1>
        </div>
        <div className='flex items-center wrap'>
              <h1 className='mr-2'>available for freelance </h1>
              <div className='animate-pulse bg-red-600 rounded-full w-3 h-3'></div>
        </div>
     </div>

      <div className='w-full border-t border-red-500 lg:mt-6 mt-2'></div>
      
    </div>
    </>

    )
}

export default Navbar


