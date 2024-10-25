import React from 'react'

import { Link } from 'react-router-dom'

function Footer() {
  return (
    
 <div>
     <footer className="bg-sky-500">
    
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <Link to='/' className="flex items-center">
                  <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">Mal.</span>
              </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                    <Link to='/about' className='hover:underline'>
                        About
                    </Link>
                  </h2>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold uppercase text-white">Find Me</h2>
                  <ul className="text-white font-medium">
                      <li className="mb-4">
                          <Link to='https://github.com/mal876' className='hover:underline'>
                            Github
                          </Link>
                      </li>
                      <li className="mb-4">
                          <Link to='https://www.linkedin.com/in/malik-dekid-4773a0335' className='hover:underline'>
                            LinkedIn
                          </Link>
                      </li>
                      <li>
                          <Link to='https://www.instagram.com/kai_d3/' className='hover:underline'>
                            Instagram
                          </Link>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center ">© 2024 <Link to='#' className="hover:underline">Malik Dekid</Link>. All Rights Reserved.
          </span>
          {/* <br />  
          <span className="text-sm text-white sm:text-center ">Site developed by <Link to='https://mal-portfolio.netlify.app/' className='font-semibold'>Malik Dekid</Link>.
          </span>   */}
      </div>
    </div>
  </footer>
 </div>


  )
}

export default Footer