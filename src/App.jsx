import myself from './assets/myself.jpg'
import ST from './assets/ST1.png'
import CV from "./assets/CV.pdf"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaInstagramSquare } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";

import { MdContacts } from "react-icons/md";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { FaHome } from "react-icons/fa";

import cvFile from './assets/CV.pdf';
import { FaDownload } from 'react-icons/fa'; // for a download icon





function App() {

  return (
    <>

<div className="min-h-screen bg-gray-100 dark:bg-gray-900">

<div className="flex justify-end items-end">
  <button onclick="(() => document.body.classList.toggle('dark'))()" className="h-12 w-12 rounded-lg p-2 ">
    <svg className="fill-violet-700 block dark:hidden" fill="currentColor" viewBox="0 0 20 20">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
    <svg className="fill-yellow-500 hidden " fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  </button>
</div>
  <ul className="flex">
    {/* sidebar */}
    <li>      
<div className="flex h-screen bg-gray-100">
  {/* sidebar */}
  <div className="hidden md:flex flex-col w-64 dark:bg-gray-900">
    <div className="flex items-center justify-center h-16 w-16 rounded-full overflow-hidden border-2 border-gray-300 ml-12">
  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-lg">
    
  <img 
    src={ST} 
    alt="Sujan Tamang Logo" 
    className="object-contain w-27 h-27 "
    style={{
      filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))'
    }}
  />
</div>
</div>
    <div className="flex flex-col flex-1 overflow-y-auto">
      <nav className="flex-1 px-2 py-4">
        <a href="#" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
          <FaHome className='text-2xl'/>
         Home
        </a>
        <a href="https://folll.io/sujan" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
          <BiSolidMessageRoundedDetail className='text-2xl' />
          About
        </a>
        <a href="https://folll.io/sujan" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokelinecap="round" strokelinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
          </svg>
         Skills
        </a>
        <a href="https://folll.io/sujan" className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokelinecap="round" strokelinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
         Interest
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScZjb7GijpuitHbqqoea6YMPysSyBNiJAzmZmjDe2GQ-riMMw/viewform?usp=dialog" target='blank' className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
          <MdContacts className='text-2xl'/>
         Contact
        </a>
      </nav>
    </div>
  </div>
  {/* Main content */}
</div>     

    </li>
    {/* sidebarend */}


 <li className="relative group mt-10">
  <img 
    src={myself} 
    alt="Myself" 
    width={700} 
    height={200}
    className="rounded-full transition-all duration-300 
           border-4 border-white dark:border-gray-700
           group-hover:scale-105
           filter grayscale-10 hover:grayscale-0"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                 opacity-0 group-hover:opacity-100 rounded-full
                 duration-300 flex flex-col justify-end items-center p-6 pb-8">
    <div className="text-center space-y-1">
      <p className="text-white text-lg font-semibold">Sujan Tamang</p>
      <div className="text-white text-sm space-y-1">
        <p className="flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Kathmandu, Nepal
        </p>
        <p className="flex items-center justify-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          From: Makalu
        </p>
      </div>
    </div>
  </div>
</li>


    <li className="text-lg mt-40 mx-10 text-white">
      <p >I am,</p>
      <p className='mt-6'>Sujan Tamang</p>
      <p className='mt-6'>A passionate web and Python django developer with over 2 years of experience in programming and the internet, In my free time, I enjoy sharing my experiences though my blog and contricutin to the open source community, I am also the creater of the Graphic Designer</p>
      
      <div className='flex gap-4'>
  <p>My CV:</p>
  <div>


    <a
    href={cvFile}
    download="CV.pdf"
    className="text-white text-xl hover:text-blue-400"
    title="Download CV"
  >
    <FaDownload /> 
  </a>
  
 
</div>

</div>


       <div className='flex gap-3 mt-3'>         
  <li><a href="https://www.linkedin.com/in/sujan-tamang-5b712928b/" target="_blank"><TbBrandLinkedinFilled className="text-4xl" /> </a></li>
  <li><a href="https://x.com/Trade_N_Code" target="_blank"><FaXTwitter className="text-3xl" /> </a></li>
  <li><a href="https://www.facebook.com/sujan.tamang.124636" target="_blank"><IoLogoFacebook className="text-3xl" /> </a></li>
  <li><a href="https://www.instagram.com/___sumantmg/?igsh=NGlvNDE1ODd4b2h2#" target="_blank"><FaInstagramSquare className="text-3xl" /> </a></li>
       </div>
      


      </li>
      
      <li />
    <li />
    <li />
    <li />
    <p />
  </ul>
</div>




     
    </>
  )
}

export default App











