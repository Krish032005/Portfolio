import { ArrowLeft, ArrowUpRight, Hammer } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer';

const RED = '#e2231a'
const RED_DEEP = '#4a0d0a'

// Shown in place of the live-project image/link whenever a project's
// `status` is 'in-progress' instead of 'live'.
const StillWorkingOn = () => (
  <div
    className="relative rounded-2xl flex flex-col items-center justify-center text-center py-20 px-6 border-2 border-dashed"
    style={{ borderColor: 'rgba(226,35,26,0.4)' }}
  >
    <Hammer size={36} strokeWidth={2} style={{ color: RED }} />
    <p className="mt-4 font-black uppercase tracking-widest text-xl md:text-2xl text-white">
      Still working on it
    </p>
    <p className="mt-2 text-gray-500 max-w-sm">
      This one isn't deployed yet — the case study's here, the live link is coming soon.
    </p>
  </div>
)

const content = {

  globerra: {
    status: 'live',
    overview:
      "Globerra is an AI-powered travel planning application designed to simplify the process of planning a trip. It allows users to explore destinations, create personalized travel plans, and organize their trip details through an interactive and responsive interface.",
    working: [
      { title: "Explore & set preferences", text: "The user starts by exploring a destination and providing their travel preferences." },
      { title: "AI-generated itinerary", text: "The application processes the user's requirements and uses AI to generate personalized travel suggestions and itinerary ideas." },
      { title: "Review & organize", text: "Users can review and organize the generated plan according to their needs." },
      { title: "REST API communication", text: "The frontend communicates with the backend through REST APIs." },
      { title: "Backend & AI service", text: "The backend handles authentication, user data, trip-related operations, and communication with the AI service." },
      { title: "Data storage", text: "MongoDB is used to securely store application data, allowing users to manage and access their travel information." },
    ],
  },

  jobsphere: {
    status: 'in-progress',
    overview:
      "JobSphere is a full-stack recruitment and job management platform designed to connect candidates and recruiters in a single application. It provides separate experiences for candidates and recruiters, allowing candidates to discover and apply for jobs while recruiters can create job postings and manage applicants.",
    working: [
      { title: "Role-based authentication", text: "Users register and log in as either a candidate or a recruiter." },
      { title: "Candidate profile & resume", text: "Candidates can create and update their profiles, and upload their profile image and resume." },
      { title: "Browse & apply", text: "Candidates browse available job postings, save interesting jobs, and apply for jobs." },
      { title: "Application storage", text: "When a candidate applies, their application and resume information are stored in the backend." },
      { title: "Recruiter dashboard", text: "Recruiters create and manage job postings through their dashboard and view applicants who have applied." },
      { title: "REST API & database", text: "The frontend communicates with the Node.js and Express.js backend through REST APIs, while MongoDB stores users, companies, jobs, applications, resumes, and saved jobs." },
      { title: "JWT auth & authorization", text: "JWT-based authentication and role-based authorization protect candidate and recruiter functionality." },
    ],
  },

   linkup: {

    status: 'in-progress',

    overview:
      "LinkUp is a full-stack social networking platform designed to help users connect, communicate, and share content through an interactive and modern web experience.",

    working: [

      {
        title: "User authentication",
        text:
          "Users can register and log in securely to create and manage their personal LinkUp account."
      },

      {
        title: "Create & manage profile",
        text:
          "Users can create their profile, add personal information, upload a profile picture, and manage their account details."
      },

      {
        title: "Connect with users",
        text:
          "Users can discover other people on the platform and send or manage connection requests to build their network."
      },

      {
        title: "Posts & interactions",
        text:
          "Users can create posts and interact with content through actions such as liking, commenting, and viewing other users' posts."
      },

      {
        title: "Real-time communication",
        text:
          "Users can communicate with their connections through a messaging system designed for fast and convenient conversations."
      },

      {
        title: "Notifications",
        text:
          "The platform provides notifications for important activities such as connection requests, interactions, and messages."
      },

      {
        title: "Responsive experience",
        text:
          "The interface is designed to provide a consistent and responsive experience across desktop, tablet, and mobile devices."
      },

    ],
   }

};


const ProjectContent = () => {

  const relocate = useNavigate();
  const location = useLocation();

  const {
    number,
    image,
    title,
    description
  } = location.state || {}

  // Look up by lowercased title so "Globerra" / "globerra" / "GLOBERRA"
  // all match. Falls back to the description passed via router state
  // for any project not listed in `content` above.
  const project = content[title?.toLowerCase()]
  const overview = project?.overview || description;
  const working = project?.working;

  return (
    <div
      style={{ backgroundColor: '#040404' }}
      className="min-h-screen text-white relative overflow-hidden"
    >

      {/* Top bar */}
      <div className="relative z-20 flex items-center justify-between px-6 md:px-14 pt-8">

        <button
          onClick={() => relocate("/")}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-600 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} strokeWidth={3} />
          Back to work
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold uppercase tracking-widest text-white">
            Case study
          </span>
          <div className='animate-pulse bg-red-600 rounded-full w-3 h-3'></div>
        </div>

      </div>

      {/* Border */}
      <div
        className="relative z-20 mx-6 md:mx-14 mt-6 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
      />

      {/* Overview row: ghost numeral + title on the left, overview text on the right */}
      <div className="relative mt-8 md:flex items-end gap-20">

        <div className='absolute w-80 h-80 bg-(--RED_DEEP) rounded-full right-0 top-20 z-0 blur-[200px]' />

        {/* Hero: ghost numeral + title */}
        <div className="relative px-6 md:px-14 pt-10 md:pt-16">


          {/* Giant ghost numeral */}
          <div
            aria-hidden="true"
            className="absolute -top-4 md:-top-10 left-0 right-0 select-none pointer-events-none leading-none font-black"
            style={{
              fontSize: 'clamp(140px, 32vw, 420px)',
              color: 'transparent',
              WebkitTextStroke: `1.5px ${RED}`,
              opacity: 0.35,
              letterSpacing: '-0.02em',
            }}
          >
            {number}
          </div>

          <div className="relative z-10 pt-16 md:pt-24">
            <p
              className="text-2xl md:text-3xl md:mb-2 mt-5"
              style={{
                fontFamily: "'Segoe Script','Brush Script MT',cursive",
                color: RED
              }}
            >
              Project {number}
            </p>

            <h1
              className="font-black leading-[0.95] tracking-tight"
              style={{ fontSize: 'clamp(40px, 7vw, 88px)' }}
            >
              {title}
            </h1>
          </div>

        </div>

        {/* Right content: overview */}
        <div className="md:mt-0 mt-8 px-6 md:px-14 z-10">
          <p className="md:w-full md:text-2xl text-xl text-white leading-relaxed">
            {overview}
          </p>
        </div>

      </div>

      {/* How it works: bold step titles + normal-weight explanations */}
      {working && (
        <div className="px-6 md:px-14 md:mt-28 mt-10">
          <p className="md:text-2xl text-sm font-bold uppercase tracking-widest text-red-600 mb-6">
            How it works
          </p>
          <ul
            className="grid md:grid-flow-col gap-x-16 gap-y-6"
            style={{ gridTemplateRows: `repeat(${Math.ceil(working.length / 2)}, auto)` }}
          >
            {working.map((step, i) => (
              <li key={i} className="flex gap-3 text-lg leading-relaxed">
                <span style={{ color: RED }} className="font-black">•</span>
                <span>
                  <span className="md:text-xl font-bold text-white">{step.title} : </span>
                  <span className="md:text-lg font-normal text-gray-300">{step.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Image, with ambient red glow behind it */}
      <div className="relative w-full flex flex-col items-center z-10 px-6 md:px-14 mt-14 md:mt-20 pb-24">

        <div className="w-[50%] h-100 bg-(--RED_DEEP) absolute rounded-full blur-[200px] top-20 z-0" />

        <div className="relative w-[80%]">

          {project?.status === 'in-progress' ? (
            <StillWorkingOn />
          ) : (
            <>
              <div
                className="relative rounded-2xl overflow-hidden border z-10"
                style={{ borderColor: 'rgba(226,35,26,0.35)' }}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full max-h-140  object-cover"
                />
              </div>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-sm md:text-xl font-bold uppercase tracking-widest text-white hover:text-red-600 transition-colors z-10"
              >
                View live project
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </>
          )}

        </div>
      </div>
      <Footer/>
    </div>

  )
}

export default ProjectContent