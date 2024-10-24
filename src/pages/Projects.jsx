import React from 'react'

import Footer from '../components/Footer2'

import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div>
        <br /><br />
        <center>
            <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9' >
                <h3 className='text-3xl font-semibold text-center text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
                    Projects
                </h3>
                <br /><br />
                <div className='flex flex-wrap gap-4 md:items-center md:justify-center'>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <img src="wilksbay.PNG" alt="" className='w-full'/>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center'>
                                Wilks Bay
                            </div>
                            
                            <br />

                            <div className=''>
                                <center>
                                    <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
                                        <Link to='https://github.com/mal876'>
                                            Github
                                        </Link>
                                    </button>
                                    <br /><br />
                                    <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
                                        <Link to='https://wilksbay.netlify.app/'>
                                            Live
                                        </Link>
                                    </button>
                                </center>
                            </div>
                        </div>
                       <center> <div className='px-6 pt-4 pb-2'>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
                                React
                            </span>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
                                Tailwind
                            </span>
                          
                        </div></center>
                    </div>
                    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                        <img src="cycle-jamaica.PNG" alt="" className='w-full'/>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2 text-center'>
                                Jamaica Cycling Federation
                            </div>

                            <br />

                            <div className=''>
                                <center>
                                    <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
                                        <Link to='https://github.com/mal876'>
                                            Github
                                        </Link>
                                    </button>
                                    <br /><br />
                                    <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
                                        <Link to='https://jamaica-cycling-federation.netlify.app'>
                                            Live
                                        </Link>
                                    </button>
                                </center>
                            </div>

                        </div>
                        <center><div className='px-6 pt-4 pb-2'>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
                                React
                            </span>
                            <span className=' inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 '>
                                Tailwind
                            </span>
                        </div></center>
                    </div>
                    
                </div>
            </div>
        </center>
        <br />
        <Footer />
    </div>
  )
}

export default Projects