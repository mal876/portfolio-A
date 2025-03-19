import React from 'react';
import Footer from '../components/Footer2';

const SkillButton = ({ skill }) => (
  <button className='bg-sky-500 text-white font-semibold w-24 shadow-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'>
    {skill}
  </button>
);

function About() {
  const skills = [
    'HTML', 'CSS', 'Javascript', 'React', 'Typescript', 'Github', 
    'Tailwind', 'Figma', 'MYSQL', 'Node.js', 'Express.js'
  ];

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
            Hey I'm Malik, a Front-End Developer and designer based in Port Antonio, Jamaica. I specialize 
            in creating interactive experiences and functional interfaces using tools like React, Tailwind, 
            Figma, and more. My philosophy is that a person can always improve and get better, and I apply that 
            mindset to my designs. So come on! Let's go make something cool together!
          </p>
          <br /><br /><br /><br />
          <h3 className='text-3xl font-semibold text-center text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
            Skills
          </h3>
          <br />
          <center>
            <div className='flex flex-wrap gap-4 md:items-center md:justify-center'>
              {skills.map((skill, index) => (
                <SkillButton key={index} skill={skill} />
              ))}
            </div>
          </center>
          <br />
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default About;
