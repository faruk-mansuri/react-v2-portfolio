import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id='about'
      className='text-primary bg-secondary py-10 body-font scroll-mt-20'
    >
      <div className='container px-2 py-10 w-5/6 mx-auto text-center lg:px-40'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className='text-3xl font-medium title-font mb-4 text-primary'>
            About Me
          </h1>
          <p className='text-lg text-center'>
            I&apos;m currently a full stack engineer, building websites at the
            &nbsp;
            <a
              href={'https://www.haptiq.com/'}
              className='hover:text-accent-100 text-accent-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              Haptiq
            </a>
            . I post graduated from Pune University in 2024 then completed SWE
            internships at &nbsp;
            <span className='text-gray-950'>Haptiq</span>.
          </p>
          <br />
          <p className='text-lg text-center'>
            My experience is primarily in full stack development, building
            accessible applications with Next.js, React, Node and Express.
            I&lsquo;m always excited to learn new technologies and expand my
            knowledge deeper into the stack.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
