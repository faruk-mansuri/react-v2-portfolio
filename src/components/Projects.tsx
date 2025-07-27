import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { eCommerce, homeAway, newsLens, threads } from '../assets/images';

const Projects = () => {
  const projects = [
    {
      title: 'Airbnb Clone',
      description:
        'A fully responsive Airbnb clone built with Next.js and TypeScript. Features include user authentication via Clerk, property listings with search and filtering, booking system, and responsive design.',
      image: homeAway,
      technologies: 'Nextjs and TypeScript',
      githubUrl: 'https://github.com/faruk-mansuri/home-away.git',
      liveUrl: 'https://home-away-khaki.vercel.app/',
    },
    {
      title: 'Newslens App',
      description:
        'AI-powered news application built with Next.js that summarizes articles in real-time. Features include intelligent news search, and concise summaries of complex news stories for quick consumption.',
      image: newsLens,
      technologies: 'Nextjs',
      githubUrl: 'git@github.com:farukm-haptiq/newslens.git',
      liveUrl: 'https://newslens.vercel.app/',
    },
    {
      title: 'Threads Clone',
      description:
        'A full-stack MERN application replicating the core functionality of Threads. Features include user authentication, post creation with images, commenting, likes, user profiles, and real-time notifications.',
      image: threads,
      technologies: 'React, express and mongodb',
      githubUrl: 'https://github.com/faruk-mansuri/mern-threads-clone',
      liveUrl: 'https://threads-clone-app.onrender.com/',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A feature-rich e-commerce application with product filtering, search functionality, user authentication, shopping cart, and checkout process. Includes responsive design for optimal mobile experience and admin dashboard for product management.',
      image: eCommerce,
      technologies: 'ReactJS',
      githubUrl: 'https://github.com/faruk-mansuri/ReactJS-E-Commerce',
      liveUrl: 'https://reactjs-e-commerce-app.netlify.app/',
    },
  ];

  return (
    <section
      id='projects'
      className='text-gray-100 bg-primary scroll-mt-20 py-20'
    >
      <div className='container px-5 mx-auto text-center lg:px-40'>
        <motion.h2
          className='text-4xl font-bold mb-16 text-gray-100 relative inline-block'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                // className='bg-gray-800 rounded-lg overflow-hidden shadow-xl'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className='relative group block  overflow-hidden'
              >
                {/* <div> */}
                <img
                  src={project.image}
                  alt={project.title}
                  className=' aspect-video object-cover transition-transform duration-500 group-hover:scale-125
                    '
                />

                <div className='absolute inset-0 bg-accent-200 opacity-0 hover:opacity-100 transition duration-300 ease-in-out '>
                  <div className='absolute inset-2 flex flex-col items-center justify-center text-center sm:p-3  lg:p-5'>
                    <p className='text-gray-100 mb-4 text-sm overflow-y-auto max-h-32'>
                      {project.description}
                    </p>
                    <h2 className='tracking-widest text-sm title-font font-medium text-accent-100 mb-1'>
                      {project.technologies}
                    </h2>
                    <h1 className='title-font text-lg font-medium text-secondary mb-3'>
                      {project.title}
                    </h1>
                    <p className='leading-relaxed '>{project.description}</p>
                    <div className='flex space-x-4 py-5'>
                      <a
                        href={project.githubUrl}
                        className='bg-gray-800 text-gray-100 p-2 rounded-full hover:bg-gray-700 transition-colors'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`GitHub repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className='bg-teal-600 text-white p-2 rounded-full hover:bg-teal-700 transition-colors'
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className='text-center mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href='https://github.com/faruk-mansuri'
              className='px-8 py-3 bg-transparent text-accent-100 border-2 border-accent-100 rounded-lg font-medium hover:bg-accent-100 hover:text-gray-900 transition-all duration-300 inline-flex items-center gap-2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Github size={20} />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
