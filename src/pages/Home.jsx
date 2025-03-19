import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <section className='bg-sky-500 w-full'>
        <div className='grid gap-1 md:grid-cols-2 md:items-center md:text-left sm:max-xl-p-9'>
          <img 
            src="person.PNG" 
            alt="Malik Dekid - Front End Developer & UI/UX Designer" 
            className='md:w-full rounded-full p-5'
          />
          <div className='leading-normal p-4'>
            <h1 className='text-6xl text-white font-semibold text-center tracking-tight'>
              Hey
            </h1>
            <h1 className='text-6xl text-white font-semibold text-center tracking-tight'>
              I'm Malik Dekid
            </h1>
            <p className='text-5xl mb-3 p-5 font-bold text-white text-lg text-center underline underline-offset-8'>
              Front End Developer & UI/UX Designer
            </p>
            <div className='gap-12'>
              <center>
                <Link 
                  to='/Resume-Mal.pdf' 
                  className='bg-white border border-white text-sky-700 font-bold rounded-3xl w-28 shadow-xl p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
                <button 
                  className='bg-white border ml-9 border-white text-sky-700 font-bold rounded-3xl w-28 shadow-xl p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                >
                  <a 
                    href='https://www.linkedin.com/in/malik-dekid-4773a0335' 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </button>
              </center>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
