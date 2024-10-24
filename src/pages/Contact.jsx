import React from 'react'

import Footer from '../components/Footer2'

import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <br />
      <div className='md:items-center  md:text-left sm:max-xl-p-9 m-12'>
        <center>
          <div className='border border-black  rounded-lg'>
          <p className='text-lg tracking-light px-12 p-5 font-semibold '>
                Email : maldekid876@gmail.com
          </p>
          </div>
        </center>
      </div>
      <br /><br /><br /><br /><br /><br />
      <Footer/>
    </div>
  )
}

export default Contact