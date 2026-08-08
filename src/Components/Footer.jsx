import React from 'react'
import footer1 from "../assets/footer1.png";
const Footer = () => {
  return (
    <>
    {/* Desktop */}
    <div className='hidden md:block w-full min-h-full  bg-black px-4 py-2 md:px-10 md:pt-4'>
        <div className='border-t-2 border-red-500 w-full'></div>

        {/* Final footer */}
        <div className=' w-full h-full mt-12 flex '>

            {/* left text */}
            <div className=' px-8 w-1/3 '>
                <h1 className='font-semibold text-5xl'>Let's Work</h1>
                <h1 className='font-semibold text-5xl'>Together</h1>
                <p className='mt-4 font-semibold text-xl'>I am currently open for new projects and collaborations. Let's create something that drive results</p>
            </div>

            {/* All Links */}
             <div className=' w-1/3 px-4'>

                <div className=' flex items-center  font-bold text-xl border-b-1 border-red-500 pb-5'>
                    <button className='px-4 py-3 text-xl rounded-full border-1 border-red-500'><i class="ri-mail-line"></i></button>
                    <p className='ml-8'>krish.mehta.382005@gmail.com</p>
                </div>
                
                <div className='mt-5 flex items-center  font-bold text-xl'>
                    <button className='px-4 py-3  text-xl rounded-full border-1 border-red-500'>
                        <i class="ri-map-pin-line"></i>
                    </button>
                    <p className='ml-8'>Mumbai, India</p>
                </div>
            </div>

            <div className='w-1/3  relative h-100 '>

                <div className=" w-100 h-70 absolute top-10  bg-red-500/20 blur-3xl rounded-full"></div>
                <img
                    src={footer1}
                    className="  absolute object-cover z-10 -top-20 w-125"
                    alt=""
                />
            </div>



        </div>
        


    </div>


    {/* Mobile */}
    <div className=' md:hidden w-full h-full  bg-black px-4 pt-2 md:px-10 md:pt-4'>
           <div className='border-t-2 border-red-500 w-full'></div>

           {/* Final footer */}
        <div className='md:mt-15 mt-8  w-full h-full relative'>

           
            <div className=' px-4 w-full '>
                <h1 className='font-bold text-2xl'>Let's Work Together</h1>
                <p className='mt-4 font-semibold text-lg'>I am currently open for new projects and collaborations. Let's create something that drive results</p>
            </div>

            <div className="px-4 relative flex justify-center ">

                <div className="absolute w-50 h-50 mt-10 bg-red-500/20 blur-2xl rounded-full">
                </div>
                <img
                    className="  relative z-10 top-[-0px] w-full"
                    src={footer1}
                    alt=""
                ></img>

            </div>


            {/* All Links */}
            <div className=' w-full px-2 py-10'>

                <div className=' flex items-center  text-sm border-b border-red-500 pb-5'>
                    <button className='px-2 py-1 pb-1 text-sm rounded-full border border-red-500'>
                        <i class="ri-mail-line"></i>
                    </button>
                    <p className='ml-2 font-semibold'>krish.mehta.382005@gmail.com</p>
                </div>
                
                <div className='mt-5 w-full flex items-center   text-sm'>
                    <button className='px-2 py-1 pb-1  text-sm rounded-full border border-red-500'>
                        <i class="ri-map-pin-line"></i>
                    </button>
                    <p className='ml-8'>Mumbai, India</p>
                </div>
            </div>

             

        </div>

            
    </div>
    </>
  )
}

export default Footer