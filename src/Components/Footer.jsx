import React from 'react'
import footer1 from "../assets/footer1.png";
const Footer = () => {
  return (
    <div className='w-full h-full  bg-blue-300 px-10 pt-4'>
        <div className='border-t-2 border-red-500 w-full'></div>

        {/* Final footer */}
        <div className='mt-15 flex bg-amber-600'>

            <div className=' px-8 w-1/3'>
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

            <div className="relative flex justify-center">

                <div className="absolute w-100 h-80 bg-red-500/20 blur-3xl rounded-full"></div>

                <img
                    src={footer1}
                    className="relative z-10 top-[-80px] w-[500px]"
                    alt=""
                />

            </div>
        </div>


    </div>
  )
}

export default Footer