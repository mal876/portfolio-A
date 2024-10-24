import React from 'react'

import Footer from '../components/Footer2'

function About() {
  return (
    <div>
        <br /><br />
        <center>
            <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
                <h3 className='text-3xl font-semibold text-center text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
                    About
                </h3>
                <br />
                <p className='p-3 font-normal text-left text-xl'>
                Hey I'm Malik, a Front-End Developer and designer based in Port Antonio, Jamaica. I specialize <br />
                in creating interactive experiences and functional interfaces using tools like React, Tailwind <br />
                Figma and etc. My philosophy is that a person can always improve and get better and I apply that to <br />
                my own desings. So come on!, Let's go make something cool together!.
                </p>
                <br /><br /><br /><br />
                <h3 className='text-3xl font-semibold text-center text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
                    Skills
                </h3>
                {/* <br />
                <h5 className='text-xl font-semibold text-left text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
                    Front-End
                </h5>
                <br /> */}
                <br />
                <center>
                  <div className='flex flex-wrap gap-4 md:items-center md:justify-center'>
                    <button className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300'>
                      HTML
                    </button>
                    <button className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300' >
                      CSS
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300'>
                      Javascript
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300'>
                      React
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300'>
                      Typescript
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:skew-x-6  duration-300'>
                      Github
                    </button>
                  </div>
                </center>
               <br />
                <center>
                  <div className='flex flex-wrap gap-4 md:items-center md:justify-center'>
                    <button className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      Tailwind
                    </button>
                    <button className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300' >
                      Figma
                    </button>
                    {/* <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      MaterialUI
                    </button> */}
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      MYSQL
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      Node.js
                    </button>
                    <button  className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>
                      Express.js
                    </button>
                  </div>
                </center>
                <br />
            </div>
        </center>
        <Footer />
    </div>
  )
}

export default About