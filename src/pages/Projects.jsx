import React from 'react';
import Footer from '../components/Footer2';
import { Link } from 'react-router-dom';

// Reusable Project Card Component
const ProjectCard = ({ image, title, githubLink, liveLink, techTags }) => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg'>
    <img src={image} alt={title} className='w-full' />
    <div className='px-6 py-4'>
      <div className='font-bold text-xl mb-2 text-center'>{title}</div>
      <div className='flex justify-center gap-4'>
        <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
          <Link to={githubLink}>Github</Link>
        </button>
        <button className='bg-white text-sky-400 border border-sky-400 font-bold rounded-xl w-28 p-2 hover:bg-sky-400 hover:text-white hover:transition hover:duration-500 hover:delay-150'>
          <Link to={liveLink}>Live</Link>
        </button>
      </div>
      <div className='px-6 pt-4 pb-2 text-center'>
        {techTags.map((tag, index) => (
          <span
            key={index}
            className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

function Projects() {
  const projects = [
    {
      image: 'wilksbay.PNG',
      title: 'Wilks Bay',
      githubLink: 'https://github.com/mal876',
      liveLink: 'https://wilksbay.netlify.app/',
      techTags: ['React', 'Tailwind'],
    },
    {
      image: 'cycle-jamaica.PNG',
      title: 'Jamaica Cycling Federation',
      githubLink: 'https://github.com/mal876',
      liveLink: 'https://jamaica-cycling-federation.netlify.app',
      techTags: ['React', 'Tailwind'],
    },
    {
      image: 'asaj.PNG',
      title: 'Aquatic Sports Association of Jamaica' ,
      githubLink: 'https://github.com/mal876',
      liveLink: 'https://asaj.netlify.app',
      techTags: ['React', 'Tailwind'],
    },
    {
      image: 'trey.PNG',
      title: 'SlayedbyTrey' ,
      githubLink: 'https://github.com/mal876',
      liveLink: 'https://treyshairandbeauty.netlify.app',
      techTags: ['Html', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div>
      <br /><br />
      <center>
        <div className='border border-white rounded-lg m-1 md:items-center md:text-left sm:max-xl-p-9'>
          <h3 className='text-3xl font-semibold text-center text-sky-800 tracking-light px-12 underline underline-offset-8 decoration-2 decoration-solid decoration-black'>
            Projects
          </h3>
          <br /><br />
          <div className='flex flex-wrap gap-4 md:items-center md:justify-center'>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                techTags={project.techTags}
              />
            ))}
          </div>
        </div>
      </center>
      <br />
      <Footer />
    </div>
  );
}

export default Projects;
