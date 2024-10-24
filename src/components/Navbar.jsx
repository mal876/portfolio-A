import React from 'react'
import { useState } from "react"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'


import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div>
        <BrowserRouter>
          <nav className='bg-sky-500 flex justify-between items-center text-white py-6 px-8 md:px-32   md:h-full md:w-full'>
            <Link to="/">
              <h3 className='text-4xl font-semibold hover:scale-110 duration-300 hover:font-bold'>Mal.</h3>
            </Link>

            <ul className='hidden xl:flex items-center gap-12 text-base font-semibold'>
                <li className='p-2 transition-all cursor-pointer hover:scale-110 duration-300 hover:underline hover:underline-offset-8'>
                    <Link to='/about'>
                      About
                    </Link>
                </li>
                <li className='p-2 transition-all cursor-pointer  hover:scale-110 duration-300 hover:underline hover:underline-offset-8 '>
                    <Link to='/project'>
                      Projects
                    </Link>
                </li>
                <li className='p-2 transition-all cursor-pointer hover:scale-110 duration-300 hover:underline  hover:underline-offset-8'>
                    <Link to='/contact'>
                      Contact
                    </Link>
                </li>
            </ul>

            <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={()=> setIsMenuOpen(!isMenuOpen)}></i>

            <div className={`absolute xl:hidden top-24 left-0 w-full bg-sky-300 text-white flex flex-col items-center gap-6 font-semibold  text-lg transform transition-transform
              ${isMenuOpen ? "opacity-100" : "opacity-0"}`} style={{transition: "transform 0.3s ease, opacity 0.3s ease"}} >

                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/about'>
                      About
                    </Link>
                </li>
                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/project'>
                      Projects
                    </Link>
                </li>
                <li className='list-none p-2 transition-all cursor-pointer'>
                    <Link to='/contact'>
                      Contact
                    </Link>
                </li>
                {/* <li className='list-none p-2 transition-all cursor-pointer'>
                  <button className='px-4 py-2 border border-green-900  text-white font-semibold bg-green-900 w-28 rounded'>
                     <Link to='#'>
                      Join
                     </Link>
                  </button>
                </li> */}
            </div>
          </nav>
          <main>
            <Routes>
              <Route index element={<Home/>} />
              <Route path='about' element={<About/>} />
              <Route path='project' element={<Projects/>} />
              <Route path='contact' element= {<Contact/>} />
            </Routes>
          </main>
        </BrowserRouter>
        
    </div>
  )
}

export default Navbar