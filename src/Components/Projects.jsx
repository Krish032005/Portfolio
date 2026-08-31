import React from 'react'

import globerra from "../assets/GloberraHome.jpg";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import { useNavigate } from 'react-router-dom';

const Projects = () => {

  const Navigate = useNavigate();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#projects", {
      y: 100,
      opacity: 0,
      duration: 1,

      stagger: 0.3,

      scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    });
  });

  // Child Component
  const ProjectCard = ({ number, image, title, description }) => {

    const handleProjectClick = () => {
      Navigate('/project-content', {
        state: {
          number,
          image,
          title,
          description
        }
      });
    };

    return (
      <div
        id='projects'
        onClick={handleProjectClick}
        className='md:w-1/3 w-full cursor-pointer'
      >

        <div className='border rounded-xl overflow-hidden border-[#333] w-full h-60 md:h-70'>
          <img
            src={image}
            alt=""
            className='w-full h-full object-cover'
          />
        </div>

        <div className='flex items-center justify-around md:mt-4 mt-2 mb-4'>

          <h1
            className='text-[#f70a0a] font-semibold text-3xl md:text-5xl md:-ml-8'
            id='number'
          >
            {number}
          </h1>

          <h1 className='font-bold text-2xl'>
            {title}

            <p className='text-xl font-semibold'>
              {description}
            </p>
          </h1>

          <i className="ri-arrow-right-long-line font-extralight md:text-4xl text-2xl"></i>

        </div>

      </div>
    )
  }

  return (
    <div className='w-full h-full bg-black md:px-10 md:py-8 px-8 py-4 mt-5 pt-0 z-100'>

      {/* Project section title */}
      <div className='flex justify-between items-center' id="nav-head">

        <div className='w-full md:w-fit md:text-start text-center'>
          <h1 className='uppercase font-semibold md:text-3xl text-xl'>
            View Live projects
          </h1>
        </div>

        <div className='hidden md:block border-t-2 border-amber-50 w-250'></div>

      </div>


      {/* Projects Cards */}
      <div
        id='projects1'
        className='flex md:gap-13 md:mt-8 mt-4 md:flex-nowrap flex-wrap'
      >

        <ProjectCard
          number="01"
          image={globerra}
          title="Globerra"
          description="AI- Trip planner"
        />

        <ProjectCard
          number="02"
          image="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D"
          title="JobSphere"
          description="Recruitment & Job Management"
        />

        <ProjectCard
          number="03"
          image="https://images.unsplash.com/photo-1634084462412-b54873c0a56d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D"
          title="Globerra"
          description="AI- Trip planner"
        />

      </div>

      <div className='border-b border-red-600 w-full md:mt-10 mt-6'></div>

    </div>
  )
}

export default Projects
